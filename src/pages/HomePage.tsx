import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Thermometer, Wind, Zap } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/shop/ProductCard';
import { PRODUCTS, COLLECTIONS } from '../constants/products';

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 3);
  const featuredCollections = COLLECTIONS.filter((c) => c.featured).slice(0, 3);

  return (
    <div>
      {/* ── Cinematic Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 blur-3xl rounded-full" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="inline-block text-[10px] font-mono font-bold tracking-[0.3em] text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-4 py-2 rounded-full">
              Winter 2026 Collection
            </span>

            <h1 className="text-display-xl text-white max-w-4xl mx-auto">
              Engineered for the{' '}
              <span className="text-gradient-blue">Extreme</span>
            </h1>

            <p className="text-body text-slate-400 max-w-xl mx-auto">
              Premium technical fashion built for the most punishing environments on Earth. 
              Where alpine performance meets cybernetic precision.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link to="/shop">
                <Button variant="primary" size="xl" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Explore Collection
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '-40°C', label: 'Rated Temperature' },
              { value: '20K mm', label: 'Waterproof Rating' },
              { value: '900 FP', label: 'Down Fill Power' },
              { value: '5 Yr', label: 'Warranty' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                <p className="text-xs font-mono text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border border-slate-700 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-sky-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div className="space-y-2">
              <span className="text-mono-xs text-sky-400 font-bold">// FEATURED</span>
              <h2 className="text-display text-white">New Essentials</h2>
            </div>
            <Link
              to="/shop"
              className="text-sm font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Collections ── */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-mono-xs text-sky-400 font-bold">// COLLECTIONS</span>
            <h2 className="text-display text-white mt-2">Curated for the Cold</h2>
            <p className="text-body-sm text-slate-400 mt-4 max-w-lg mx-auto">
              Each collection is engineered for specific environments and missions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-sky-400 uppercase">{collection.season}</p>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">{collection.name}</h3>
                  <p className="text-sm text-slate-400 mt-2 max-w-xs">{collection.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-mono-xs text-sky-400 font-bold">// TECHNOLOGY</span>
            <h2 className="text-display text-white mt-2">Built Different</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Thermometer, title: 'Graphene Core', desc: 'Active thermal regulation down to -40°C' },
              { icon: Shield, title: 'DWR Shield', desc: '20,000mm waterproof rating with sealed seams' },
              { icon: Wind, title: 'Windproof', desc: 'Full barrier against arctic wind chill' },
              { icon: Zap, title: 'Smart Tech', desc: 'Heated zones with rechargeable cells' },
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white">{tech.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-mono-xs text-sky-400 font-bold">// JOIN THE FLEET</span>
            <h2 className="text-display-lg text-white mt-4 max-w-3xl mx-auto">
              Ready for the <span className="text-gradient-blue">Extreme</span>?
            </h2>
            <p className="text-body text-slate-400 mt-4 max-w-lg mx-auto">
              Sign up for early access to new drops, field test reports, and exclusive gear.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/40 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 font-body focus:outline-none focus:border-sky-500/50"
              />
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}