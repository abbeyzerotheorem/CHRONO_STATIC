import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight, Shield } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const updateField = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black pointer-events-none" />
        <div className="relative w-full max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-1.5 mb-6">
              <span className="font-display text-2xl font-bold text-white">CHRONO</span>
              <span className="bg-sky-500 text-black px-1.5 py-0.5 text-[9px] font-mono font-black rounded">STATIC</span>
            </div>
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// ENLISTMENT</span>
            <h1 className="text-h1 text-white mt-2">Create Account</h1>
            <p className="text-sm text-slate-400 mt-2">Join the fleet and get early access to new drops.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" value={form.firstName} onChange={updateField('firstName')} placeholder="John" required />
              <Input label="Last Name" value={form.lastName} onChange={updateField('lastName')} placeholder="Doe" required />
            </div>

            <Input label="Email Address" type="email" value={form.email} onChange={updateField('email')} placeholder="command@chronostatic.com" required />

            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={updateField('password')}
              placeholder="••••••••"
              icon={
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-white">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              iconPosition="right"
              required
            />

            <p className="text-[10px] text-slate-500 leading-relaxed">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-sky-400 hover:text-sky-300">Terms of Service</Link> and{' '}
              <Link to="/privacy" className="text-sky-400 hover:text-sky-300">Privacy Policy</Link>.
            </p>

            <Button type="submit" variant="primary" size="lg" fullWidth icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Create Account
            </Button>

            <div className="text-center">
              <p className="text-xs text-slate-400">
                Already registered?{' '}
                <Link to="/login" className="text-sky-400 hover:text-sky-300 font-mono font-bold">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-2 justify-center text-[10px] text-slate-600 pt-4">
              <Shield className="w-3.5 h-3.5 text-emerald-400/50" />
              <span>256-bit encrypted connection</span>
            </div>
          </motion.form>
        </div>
      </div>
    </PageTransition>
  );
}