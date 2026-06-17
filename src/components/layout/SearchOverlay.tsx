import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUIStore } from '../../store/uiStore';
import { useDebounce } from '../../hooks';
import { PRODUCTS } from '../../constants/products';

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUIStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof PRODUCTS>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setResults([]);
      return;
    }
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setResults(filtered.slice(0, 6));
  }, [debouncedQuery]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60]"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={closeSearch} />
          <div className="relative max-w-2xl mx-auto pt-24 px-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, collections, articles..."
                className="w-full bg-black/60 border border-slate-700 rounded-2xl pl-12 pr-12 py-4 text-lg text-white placeholder-slate-500 font-body focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20"
              />
              <button
                onClick={closeSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>

            {results.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-4 bg-black/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl"
              >
                <div className="p-2 space-y-1">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.slug}`}
                      onClick={closeSearch}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0">
                        <img src={product.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{product.name}</p>
                        <p className="text-xs text-slate-400 truncate">{product.category}</p>
                      </div>
                      <span className="text-sm font-mono font-bold text-sky-400">
                        ${product.price.toFixed(2)}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {query.length >= 2 && results.length === 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-4 p-8 text-center"
              >
                <p className="text-slate-400 font-mono text-sm">No results found for "{query}"</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}