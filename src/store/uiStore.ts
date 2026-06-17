import { create } from 'zustand';

interface UIState {
  isDarkMode: boolean;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  isMegaMenuOpen: boolean;
  activeMegaMenu: string | null;

  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  openWishlist: () => void;
  closeWishlist: () => void;
  toggleWishlist: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  openMegaMenu: (label: string) => void;
  closeMegaMenu: () => void;
  toggleMegaMenu: (label: string) => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  isDarkMode: true,
  isCartOpen: false,
  isWishlistOpen: false,
  isSearchOpen: false,
  isMobileMenuOpen: false,
  isMegaMenuOpen: false,
  activeMegaMenu: null,

  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setDarkMode: (value) => set({ isDarkMode: value }),

  openCart: () => set({ isCartOpen: true, isWishlistOpen: false, isSearchOpen: false, isMobileMenuOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  openWishlist: () => set({ isWishlistOpen: true, isCartOpen: false, isSearchOpen: false }),
  closeWishlist: () => set({ isWishlistOpen: false }),
  toggleWishlist: () => set((state) => ({ isWishlistOpen: !state.isWishlistOpen })),

  openSearch: () => set({ isSearchOpen: true, isCartOpen: false, isWishlistOpen: false }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),

  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  openMegaMenu: (label) => set({ isMegaMenuOpen: true, activeMegaMenu: label }),
  closeMegaMenu: () => set({ isMegaMenuOpen: false, activeMegaMenu: null }),
  toggleMegaMenu: (label) =>
    set((state) => ({
      isMegaMenuOpen: state.activeMegaMenu === label ? false : true,
      activeMegaMenu: state.activeMegaMenu === label ? null : label,
    })),
}));