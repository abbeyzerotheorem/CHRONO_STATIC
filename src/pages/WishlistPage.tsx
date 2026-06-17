import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlistStore } from '../store/wishlistStore';
import { ProductCard } from '../components/shop/ProductCard';
import { Button } from '../components/ui/Button';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { PageTransition } from '../components/layout/PageTransition';

export default function WishlistPage() {
  const { items } = useWishlistStore();

  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Wishlist' }]} className="mb-8" />

          <div className="mb-8">
            <span className="text-mono-xs text-sky-400 font-bold">// WISHLIST</span>
            <h1 className="text-display text-white mt-1">Saved Items</h1>
            <p className="text-sm text-slate-400 mt-2">{items.length} items saved</p>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-slate-800 rounded-2xl">
              <Heart className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-lg font-display font-bold text-white">Your wishlist is empty</p>
              <p className="text-sm text-slate-400 mt-2 mb-6">Save items you love to your wishlist.</p>
              <Link to="/shop">
                <Button variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
                  Browse Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}