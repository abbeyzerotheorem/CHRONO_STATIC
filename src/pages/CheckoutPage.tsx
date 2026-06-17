import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Truck, CreditCard, CheckCircle } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../lib/utils';

type CheckoutStep = 'shipping' | 'payment' | 'review' | 'confirmation';

export default function CheckoutPage() {
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const { items, getSubtotal, getShipping, getTax, getTotal, clearCart } = useCartStore();

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    street: '', city: '', state: '', zip: '', country: 'US',
    cardNumber: '', expDate: '', cvv: '', cardName: '',
  });

  const updateField = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handlePlaceOrder = () => {
    clearCart();
    setStep('confirmation');
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <PageTransition>
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-white">Your cart is empty</h1>
            <p className="text-slate-400 mt-2 mb-6">Add items before checking out.</p>
            <Link to="/shop"><Button variant="primary">Continue Shopping</Button></Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Checkout' }]} className="mb-8" />

          {/* Step Indicator */}
          <div className="flex items-center gap-2 mb-10 justify-center">
            {(['shipping', 'payment', 'review'] as const).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                  step === s || step === 'confirmation' ? 'bg-sky-500 text-black' :
                  ['payment', 'review', 'confirmation'].includes(step) && ['payment', 'review', 'confirmation'].indexOf(step) >= i ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-800 text-slate-500'
                }`}>{i + 1}</div>
                <span className="text-[10px] font-mono uppercase text-slate-400 hidden sm:block">{s}</span>
                {i < 2 && <div className="w-8 h-px bg-slate-800" />}
              </div>
            ))}
          </div>

          {step === 'shipping' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="max-w-lg mx-auto">
                <h2 className="text-h2 text-white mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="First Name" value={form.firstName} onChange={updateField('firstName')} required />
                    <Input label="Last Name" value={form.lastName} onChange={updateField('lastName')} required />
                  </div>
                  <Input label="Email" type="email" value={form.email} onChange={updateField('email')} required />
                  <Input label="Phone" type="tel" value={form.phone} onChange={updateField('phone')} required />
                  <Input label="Street Address" value={form.street} onChange={updateField('street')} required />
                  <div className="grid grid-cols-3 gap-4">
                    <Input label="City" value={form.city} onChange={updateField('city')} required />
                    <Input label="State" value={form.state} onChange={updateField('state')} required />
                    <Input label="ZIP" value={form.zip} onChange={updateField('zip')} required />
                  </div>
                  <Button variant="primary" size="lg" fullWidth className="mt-4" onClick={() => setStep('payment')} icon={<ArrowLeft className="w-4 h-4 rotate-180" />} iconPosition="right">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'payment' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="max-w-lg mx-auto">
                <h2 className="text-h2 text-white mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <Input label="Cardholder Name" value={form.cardName} onChange={updateField('cardName')} icon={<CreditCard className="w-4 h-4" />} required />
                  <Input label="Card Number" value={form.cardNumber} onChange={updateField('cardNumber')} placeholder="4242 4242 4242 4242" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Expiry Date" value={form.expDate} onChange={updateField('expDate')} placeholder="MM/YY" required />
                    <Input label="CVC" value={form.cvv} onChange={updateField('cvv')} placeholder="123" required />
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="md" onClick={() => setStep('shipping')}>Back</Button>
                    <Button variant="primary" size="lg" fullWidth onClick={() => setStep('review')} icon={<ArrowLeft className="w-4 h-4 rotate-180" />} iconPosition="right">
                      Review Order
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'review' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="max-w-lg mx-auto">
                <h2 className="text-h2 text-white mb-6">Review Your Order</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-mono-xs text-sky-400 font-bold uppercase mb-2">Shipping To</p>
                    <p className="text-sm text-white">{form.firstName} {form.lastName}</p>
                    <p className="text-sm text-slate-400">{form.street}, {form.city}, {form.state} {form.zip}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-mono-xs text-sky-400 font-bold uppercase mb-2">Payment</p>
                    <p className="text-sm text-white">•••• {form.cardNumber.slice(-4)}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-slate-400"><span>Subtotal ({items.length} items)</span><span className="text-white">{formatPrice(getSubtotal())}</span></div>
                      <div className="flex justify-between text-slate-400"><span>Shipping</span><span className={getShipping() === 0 ? 'text-emerald-400' : 'text-white'}>{getShipping() === 0 ? 'FREE' : formatPrice(getShipping())}</span></div>
                      <div className="flex justify-between text-slate-400"><span>Tax</span><span className="text-white">{formatPrice(getTax())}</span></div>
                      <div className="border-t border-white/5 pt-2 flex justify-between font-bold"><span className="text-white">Total</span><span className="text-sky-400">{formatPrice(getTotal())}</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 justify-center">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="md" onClick={() => setStep('payment')}>Back</Button>
                    <Button variant="primary" size="lg" fullWidth onClick={handlePlaceOrder} icon={<CheckCircle className="w-4 h-4" />}>
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'confirmation' && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
              <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// ORDER CONFIRMED</span>
              <h1 className="text-display text-white mt-2">Thank You for Your Order</h1>
              <p className="text-body text-slate-400 mt-4 max-w-md mx-auto">Your order has been confirmed and is being processed. You will receive a confirmation email shortly.</p>
              <div className="mt-8">
                <Link to="/shop">
                  <Button variant="primary" size="lg">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}