import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight, Shield } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
  };

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
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// AUTHENTICATION</span>
            <h1 className="text-h1 text-white mt-2">Sign In</h1>
            <p className="text-sm text-slate-400 mt-2">Access your tactical command center.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="command@chronostatic.com"
              required
            />

            <div className="space-y-1.5">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                icon={
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-white">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
                iconPosition="right"
                required
              />
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-[10px] font-mono text-sky-400 hover:text-sky-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Sign In
            </Button>

            <div className="text-center">
              <p className="text-xs text-slate-400">
                Don't have an account?{' '}
                <Link to="/register" className="text-sky-400 hover:text-sky-300 font-mono font-bold">
                  Register
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