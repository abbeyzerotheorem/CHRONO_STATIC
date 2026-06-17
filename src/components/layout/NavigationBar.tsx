import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, Menu, X, User, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useUIStore } from '../../store/uiStore';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import { NAVIGATION } from '../../constants/site';
import { useIsMobile } from '../../hooks';

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    isDarkMode,
    toggleDarkMode,
    openCart,
    openWishlist,
    openSearch,
    toggleMobileMenu,
    isMobileMenuOpen,
  } = useUIStore();

  const cartCount = useCartStore((s) => s.items.reduce((acc, item) => acc + item.quantity, 0));
  const wishlistCount = useWishlistStore((s) => s.items.length);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveMegaMenu(null);
  }, [location]);

  const handleMegaMenuEnter = (label: string) => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setActiveMegaMenu(label);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setActiveMegaMenu(null), 150);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1.5 group"
            aria-label="CHRONO STATIC Home"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              CHRONO
            </span>
            <span className="relative inline-block -rotate-6 bg-sky-500 text-black px-2 py-0.5 text-[10px] font-mono font-black rounded group-hover:rotate-0 transition-all duration-300">
              STATIC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={handleMegaMenuLeave}>
            {NAVIGATION.main.map((item) => {
              const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
              const hasColumns = 'columns' in item;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasColumns && handleMegaMenuEnter(item.label)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-all rounded-lg',
                      isActive || activeMegaMenu === item.label
                        ? 'text-sky-400 bg-sky-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {item.label}
                      {hasColumns && <ChevronDown className="w-3 h-3" />}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={openSearch}
              className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/wishlist"
              className="relative p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sky-500 text-black text-[9px] font-mono font-black rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="relative p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sky-500 text-black text-[9px] font-mono font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              to="/login"
              className="hidden sm:flex p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            onMouseEnter={() => handleMegaMenuEnter(activeMegaMenu)}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="max-w-[1440px] mx-auto px-8 py-10">
              <div className="grid grid-cols-4 gap-10">
                {NAVIGATION.main
                  .filter((item) => item.label === activeMegaMenu && 'columns' in item)
                  .flatMap((item) =>
                    'columns' in item
                      ? item.columns.map((col) => (
                          <div key={col.title}>
                            <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-sky-400 mb-4">
                              {col.title}
                            </h3>
                            <ul className="space-y-2.5">
                              {col.links.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    to={link.href}
                                    className="text-sm text-slate-400 hover:text-white transition-colors font-body"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      : []
                  )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}