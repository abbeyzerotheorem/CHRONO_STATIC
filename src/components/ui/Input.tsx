import React, { forwardRef } from 'react';
import { cn } from '@/src/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, iconPosition = 'left', className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-mono-xs text-slate-400 uppercase tracking-widest font-bold"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full bg-black/40 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 font-body transition-all duration-200',
              'focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20',
              'hover:border-slate-700',
              error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20',
              icon && iconPosition === 'left' && 'pl-10',
              icon && iconPosition === 'right' && 'pr-10',
              className
            )}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {icon}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-red-400 font-mono">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-slate-500 font-mono">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';