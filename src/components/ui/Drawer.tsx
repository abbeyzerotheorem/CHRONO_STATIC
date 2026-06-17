import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { drawerRight, modalOverlay } from '@/src/lib/animations';
import { useLockedBody } from '@/src/hooks/useLockedBody';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  side?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export function Drawer({ isOpen, onClose, title, side = 'right', size = 'md', showCloseButton = true, className, children }: DrawerProps) {
  useLockedBody(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={cn(
              'relative w-full h-full bg-black/90 border-l border-slate-800 flex flex-col shadow-2xl',
              sizeStyles[size],
              className
            )}
            variants={drawerRight}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                {title && (
                  <h2 className="font-display text-lg font-bold text-white">{title}</h2>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                    aria-label="Close drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            )}
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}