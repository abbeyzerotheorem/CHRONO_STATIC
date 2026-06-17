import { Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

const sizeStyles = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export function Rating({ rating, maxRating = 5, size = 'sm', showValue = false, reviewCount, interactive = false, onRate }: RatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }).map((_, i) => (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onRate?.(i + 1)}
            className={cn(interactive && 'cursor-pointer hover:scale-110 transition-transform')}
          >
            <Star
              className={cn(
                sizeStyles[size],
                i < Math.floor(rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : i < rating
                  ? 'text-yellow-400 fill-yellow-400 opacity-50'
                  : 'text-slate-600'
              )}
            />
          </button>
        ))}
      </div>
      {showValue && (
        <span className="text-xs font-mono font-bold text-sky-400">{rating.toFixed(1)}</span>
      )}
      {reviewCount !== undefined && (
        <span className="text-xs text-slate-500 font-mono">({reviewCount})</span>
      )}
    </div>
  );
}