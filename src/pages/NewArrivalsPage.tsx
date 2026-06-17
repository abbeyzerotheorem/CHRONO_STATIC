import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { ProductCard } from '../components/shop/ProductCard';
import { PRODUCTS } from '../constants/products';
import { staggerContainer } from '../lib/animations';

export default function NewArrivalsPage() {
  const newProducts = PRODUCTS.filter((p) => p.new);

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'New Arrivals' }]} className="mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Badge variant="primary" dot>NEW</Badge>
            <h1 className="text-display text-white mt-2">New Arrivals</h1>
            <p className="text-body text-slate-400 mt-2">The latest additions to our tactical lineup.</p>
          </motion.div>

          {newProducts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-slate-800 rounded-2xl">
              <p className="text-lg font-display font-bold text-white">No new arrivals yet</p>
              <p className="text-sm text-slate-400 mt-2">Check back soon for new drops.</p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}