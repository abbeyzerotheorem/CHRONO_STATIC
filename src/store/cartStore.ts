import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, size: string, color: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getTax: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, size, color, quantity = 1) => {
        const itemId = `${product.id}-${size.replace(/\s/g, '')}-${color.toLowerCase()}`;

        set((state) => {
          const existing = state.items.find((item) => item.id === itemId);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { id: itemId, product, selectedSize: size, selectedColor: color, quantity }],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
          return;
        }
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        }));
      },

      clearCart: () => set({ items: [] }),

      getItemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),

      getSubtotal: () => get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),

      getShipping: () => {
        const subtotal = get().getSubtotal();
        return subtotal > 500 ? 0 : 45;
      },

      getTax: () => get().getSubtotal() * 0.08,

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const shipping = get().getShipping();
        const tax = get().getTax();
        return subtotal + shipping + tax;
      },
    }),
    {
      name: 'chrono-cart',
      skipHydration: false,
    }
  )
);