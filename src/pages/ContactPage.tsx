import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Clock, Shield } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const updateField = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact' }]} className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// CONTACT</span>
              <h1 className="text-display text-white mt-2">Get in Touch</h1>
              <p className="text-body text-slate-400 mt-4 max-w-md">
                For order inquiries, please include your order number. For field test applications, attach your experience summary.
              </p>

              <div className="space-y-6 mt-10">
                {[
                  { icon: Mail, label: 'Email', value: 'command@chronostatic.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (800) CHRONO-01' },
                  { icon: MapPin, label: 'Headquarters', value: 'Longyearbyen, Svalbard, Norway' },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-mono-xs text-sky-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-white mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p className="text-xs text-slate-400">All communications are encrypted. Your data is protected under our privacy policy.</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {sent ? (
                <div className="h-full flex items-center justify-center p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-center">
                  <div>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Send className="w-8 h-8 text-emerald-400" />
                    </div>
                    <p className="text-lg font-display font-bold text-white">Message Sent</p>
                    <p className="text-sm text-slate-400 mt-2">Our team will respond within 24 hours.</p>
                    <Button variant="outline" size="sm" className="mt-6" onClick={() => setSent(false)}>
                      Send Another
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Full Name" value={form.name} onChange={updateField('name')} placeholder="John Doe" required />
                    <Input label="Email" type="email" value={form.email} onChange={updateField('email')} placeholder="john@example.com" required />
                  </div>
                  <Input label="Subject" value={form.subject} onChange={updateField('subject')} placeholder="Order inquiry, field test, etc." required />
                  <div className="space-y-1.5">
                    <label className="block text-mono-xs text-slate-400 uppercase tracking-widest font-bold">Message</label>
                    <textarea
                      value={form.message}
                      onChange={updateField('message')}
                      rows={5}
                      placeholder="Describe your inquiry in detail..."
                      className="w-full bg-black/40 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 font-body focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 hover:border-slate-700 resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" fullWidth icon={<Send className="w-4 h-4" />}>
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}