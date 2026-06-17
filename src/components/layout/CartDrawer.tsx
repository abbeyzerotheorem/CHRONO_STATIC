import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ShieldCheck } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../lib/utils';

export function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore();
  const { items, removeItem, updateQuantity, getSubtotal, getShipping, getTax, getTotal } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-black/90 border-l border-slate-800 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-sky-500" />
                <h2 className="font-display text-lg font-bold text-white">Your Cart</h2>
                <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">
                  {items.reduce((a, i) => a + i.quantity, 0)}
                </span>
              </div>
              <button onClick={closeCart} className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-slate-800 text-slate-500">
                    <ShoppingBag className="w-12 h-12 stroke-1" />
                  </div>
                  <p className="font-semibold text-sm text-white">Your cart is empty</p>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Add some technical gear to your arsenal.
                  </p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="text-xs font-mono font-bold tracking-wider uppercase border border-slate-700 text-slate-300 hover:text-sky-400 px-4 py-2 rounded-lg hover:border-sky-500/30 transition-all"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-slate-800/60 hover:border-slate-700/60 transition-all"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0 border border-slate-700/30">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-sm font-semibold text-white truncate">{item.product.name}</h4>
                        <span className="text-sm font-mono font-bold text-sky-400 flex-shrink-0">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {item.selectedSize}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {item.selectedColor}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-slate-700 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-mono font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 rounded text-red-400 hover:text-red-500 hover:bg-red-500/10 transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-slate-800 space-y-4">
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">{formatPrice(getSubtotal())}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className={getShipping() === 0 ? 'text-emerald-400' : 'text-white'}>
                      {getShipping() === 0 ? 'FREE' : formatPrice(getShipping())}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Tax (8%)</span>
                    <span className="text-white">{formatPrice(getTax())}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-800 pt-2 text-sm font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-sky-400">{formatPrice(getTotal())}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Secure checkout</span>
                </div>

                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="block w-full bg-sky-500 hover:bg-sky-400 text-black font-mono text-xs font-bold py-3.5 rounded-lg tracking-widest text-center transition-all hover:shadow-lg hover:shadow-sky-500/20"
                >
                  CHECKOUT
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}