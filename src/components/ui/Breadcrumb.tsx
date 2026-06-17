import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export function Breadcrumb({ items, className, showHome = true }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1.5 text-xs font-mono', className)}>
      {showHome && (
        <>
          <Link to="/" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Home">
            <Home className="w-3.5 h-3.5" />
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
        </>
      )}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-sky-400 font-bold' : 'text-slate-400'}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="w-3 h-3 text-slate-600" />}
          </span>
        );
      })}
    </nav>
  );
}