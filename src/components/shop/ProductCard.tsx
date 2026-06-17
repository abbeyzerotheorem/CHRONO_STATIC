import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import { cn } from '../../lib/utils';
import { Price } from '../ui/Price';
import { useWishlistStore } from '../../store/wishlistStore';
import { useUIStore } from '../../store/uiStore';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { openCart } = useUIStore();
  const wishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={cn('group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-sky-500/20 hover:shadow-xl hover:shadow-sky-500/5', className)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.slug}`} className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-sky-500 text-black text-[9px] font-mono font-black px-2 py-1 rounded uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => { e.preventDefault(); toggleItem(product); }}
            className={cn(
              'p-3 rounded-full transition-all hover:scale-110',
              wishlisted ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white hover:bg-white/20'
            )}
          >
            <Heart className={cn('w-5 h-5', wishlisted && 'fill-red-400')} />
          </button>
          <Link
            to={`/product/${product.slug}`}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          {product.rating.toFixed(1)}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-3">
        <div>
          <Link to={`/product/${product.slug}`} className="hover:text-sky-400 transition-colors">
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">{product.name}</h3>
          </Link>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <Price price={product.price} originalPrice={product.originalPrice} size="sm" />

          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color) => {
              const colorMap: Record<string, string> = {
                Silver: 'bg-slate-300',
                White: 'bg-white border border-slate-600',
                Black: 'bg-slate-950',
                Blue: 'bg-blue-400',
                Navy: 'bg-slate-800',
              };
              return (
                <span
                  key={color}
                  className={cn('w-3 h-3 rounded-full inline-block', colorMap[color] || 'bg-slate-400')}
                  title={color}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}