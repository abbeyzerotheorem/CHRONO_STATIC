import { cn } from '@/src/lib/utils';
import { formatPrice } from '@/src/lib/utils';

interface PriceProps {
  price: number;
  originalPrice?: number;
  size?: 'sm' | 'md' | 'lg';
  currency?: string;
  className?: string;
}

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
};

const discountSize = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export function Price({ price, originalPrice, size = 'md', currency = 'USD', className }: PriceProps) {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className={cn('font-mono font-bold text-sky-400', sizeStyles[size])}>
        {formatPrice(price, currency)}
      </span>
      {originalPrice && originalPrice > price && (
        <div className="flex items-center gap-2">
          <span className={cn('font-mono line-through text-slate-500', discountSize[size])}>
            {formatPrice(originalPrice, currency)}
          </span>
          <span className="px-1.5 py-0.5 bg-red-500/10 text-red-400 text-[10px] font-mono font-bold rounded">
            -{discount}%
          </span>
        </div>
      )}
    </div>
  );
}