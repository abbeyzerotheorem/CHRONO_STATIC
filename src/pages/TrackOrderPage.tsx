import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Search, MapPin, Clock, Shield, Truck } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [tracked, setTracked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber.trim()) setTracked(true);
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Track Order' }]} className="mb-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// TRACKING</span>
            <h1 className="text-display text-white mt-2">Track Your Shipment</h1>
            <p className="text-body text-slate-400 mt-4">Enter your order number to track your shipment in real-time.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="mt-8 flex gap-3"
          >
            <div className="flex-1">
              <Input
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="e.g. CHRONO-DEP-784532-AX"
                icon={<Package className="w-4 h-4" />}
                required
              />
            </div>
            <Button type="submit" variant="primary" size="md" icon={<Search className="w-4 h-4" />}>
              Track
            </Button>
          </motion.form>

          {tracked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 space-y-6"
            >
              <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-3 text-emerald-400 mb-4">
                  <Truck className="w-6 h-6" />
                  <div>
                    <p className="font-bold text-white">In Transit</p>
                    <p className="text-xs text-slate-400">Order #{orderNumber}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { status: 'Order Placed', date: 'Jun 14, 2026', done: true },
                    { status: 'Processing', date: 'Jun 15, 2026', done: true },
                    { status: 'Shipped', date: 'Jun 16, 2026', done: true },
                    { status: 'In Transit', date: 'Jun 17, 2026', done: true },
                    { status: 'Out for Delivery', date: 'Estimated Jun 19', done: false },
                    { status: 'Delivered', date: 'Estimated Jun 19', done: false },
                  ].map((step, i) => (
                    <div key={step.status} className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${step.done ? 'bg-emerald-400' : 'bg-slate-700'}`} />
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${step.done ? 'text-white' : 'text-slate-500'}`}>{step.status}</p>
                        <p className="text-xs text-slate-500">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h3 className="font-bold text-white mb-4">Shipment Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><p className="text-slate-400">Carrier</p><p className="text-white">Arctic Priority Express</p></div>
                  <div><p className="text-slate-400">Weight</p><p className="text-white">2.4 kg</p></div>
                  <div><p className="text-slate-400">Origin</p><p className="text-white">Longyearbyen, SVAL</p></div>
                  <div><p className="text-slate-400">Destination</p><p className="text-white">New York, USA</p></div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="mt-8 flex items-center gap-2 justify-center text-[10px] text-slate-600">
            <Shield className="w-3.5 h-3.5 text-emerald-400/50" />
            <span>Real-time tracking data encrypted</span>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}