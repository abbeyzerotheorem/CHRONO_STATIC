import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { PageTransition } from '../components/layout/PageTransition';
import { formatPrice } from '../lib/utils';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal, getShipping, getTax, getTotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto mb-6" />
            <h1 className="text-2xl font-display font-bold text-white">Your cart is empty</h1>
            <p className="text-slate-400 mt-2 mb-6">Add some technical gear to your arsenal.</p>
            <Link to="/shop">
              <Button variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Cart' }]} className="mb-8" />

          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-mono-xs text-sky-400 font-bold">// CART</span>
              <h1 className="text-display text-white mt-1">Shopping Cart</h1>
              <p className="text-sm text-slate-400 mt-2">{items.reduce((a, i) => a + i.quantity, 0)} items</p>
            </div>
            <button
              onClick={clearCart}
              className="text-xs font-mono text-red-400 hover:text-red-300 transition-colors"
            >
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sky-500/10 transition-all"
                >
                  <Link to={`/product/${item.product.slug}`} className="w-24 h-24 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link to={`/product/${item.product.slug}`} className="hover:text-sky-400 transition-colors">
                          <h3 className="font-bold text-white">{item.product.name}</h3>
                        </Link>
                        <div className="flex gap-2 mt-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{item.selectedSize}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{item.selectedColor}</span>
                        </div>
                      </div>
                      <span className="text-lg font-mono font-bold text-sky-400">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-slate-700 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-4 text-sm font-mono font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 sticky top-28">
                <h2 className="font-display font-bold text-white text-lg mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white">{formatPrice(getSubtotal())}</span>
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
                  <div className="border-t border-white/5 pt-3 flex justify-between font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-sky-400 text-lg">{formatPrice(getTotal())}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 justify-center mt-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Secure checkout</span>
                </div>
                <Link to="/checkout" className="block mt-6">
                  <Button variant="primary" size="lg" fullWidth>
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}