import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { COLLECTIONS } from '../constants/products';
import { fadeUp } from '../lib/animations';

export default function CollectionsPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Collections' }]} className="mb-8" />

          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
            <span className="text-mono-xs text-sky-400 font-bold">// COLLECTIONS</span>
            <h1 className="text-display text-white mt-2">Curated for the Cold</h1>
            <p className="text-body text-slate-400 mt-4 max-w-xl">
              Each collection is engineered for specific environments and missions. Browse our complete lineup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COLLECTIONS.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  to={`/collection/${collection.slug}`}
                  className="group block relative h-[500px] rounded-2xl overflow-hidden border border-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <p className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">{collection.season}</p>
                    <h3 className="text-2xl font-display font-bold text-white mt-1">{collection.name}</h3>
                    <p className="text-sm text-slate-400 mt-2">{collection.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-mono font-bold text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Collection <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}