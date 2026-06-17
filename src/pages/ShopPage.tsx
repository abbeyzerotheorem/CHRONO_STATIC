import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, LayoutGrid, List, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants/products';
import { ProductCard } from '../components/shop/ProductCard';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { PageTransition } from '../components/layout/PageTransition';
import { cn } from '../lib/utils';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let items = PRODUCTS;

    if (activeCategory !== 'all') {
      items = items.filter((p) => p.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    items = items.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-asc':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        items.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return items;
  }, [activeCategory, searchQuery, priceRange, sortBy]);

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Shop' }]} className="mb-8" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-mono-xs text-sky-400 font-bold">// CATALOG</span>
              <h1 className="text-display text-white mt-1">All Products</h1>
              <p className="text-sm text-slate-400 mt-2">{filteredProducts.length} products</p>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-48 lg:w-64 bg-black/40 border border-slate-800 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-sky-500/50"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black/40 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-slate-300 font-mono focus:outline-none focus:border-sky-500/50"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low</option>
                <option value="price-desc">Price: High</option>
                <option value="rating">Rating</option>
              </select>

              {/* View Toggle */}
              <div className="hidden sm:flex border border-slate-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn('p-2.5 transition-colors', viewMode === 'grid' ? 'bg-sky-500/10 text-sky-400' : 'text-slate-500 hover:text-white')}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn('p-2.5 transition-colors', viewMode === 'list' ? 'bg-sky-500/10 text-sky-400' : 'text-slate-500 hover:text-white')}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={cn('p-2.5 border border-slate-800 rounded-lg transition-colors lg:hidden', showFilters && 'bg-sky-500/10 border-sky-500/30 text-sky-400')}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all',
                  activeCategory === cat.id
                    ? 'bg-sky-500 text-black'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-slate-800 rounded-2xl">
              <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-lg font-display font-bold text-white">No products found</p>
              <p className="text-sm text-slate-400 mt-2">Try adjusting your filters</p>
            </div>
          ) : (
            <div
              className={cn(
                'grid gap-6',
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
              )}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}