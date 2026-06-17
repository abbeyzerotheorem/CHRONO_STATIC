import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  magnetic?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-sky-500 hover:bg-sky-400 text-black font-bold shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 active:shadow-sky-500/5',
  secondary:
    'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm',
  outline:
    'border border-slate-700 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 hover:bg-sky-500/5',
  ghost:
    'text-slate-400 hover:text-white hover:bg-white/5',
  danger:
    'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 hover:border-red-500/40',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
  xl: 'px-10 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  magnetic = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = magnetic ? motion.button : 'button';
  const motionProps = magnetic ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
  } : {};

  return (
    <Comp
      className={cn(
        'relative inline-flex items-center justify-center gap-2 font-mono font-bold tracking-wider uppercase rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...motionProps}
      {...(props as any)}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </Comp>
  );
}