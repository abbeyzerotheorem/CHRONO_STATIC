import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User } from 'lucide-react';
import { useUIStore } from '@/src/store/uiStore';
import { NAVIGATION } from '@/src/constants/site';
import { cn } from '@/src/lib/utils';

export function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const location = useLocation();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[55] lg:hidden"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-black/95 border-l border-slate-800 shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <span className="font-display text-lg font-bold text-white">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-1">
                {NAVIGATION.main.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 text-sm font-mono font-bold tracking-wider uppercase rounded-lg transition-all',
                      location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                        ? 'bg-sky-500/10 text-sky-400'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-6">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  <User className="w-4 h-4" />
                  Sign In / Register
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}