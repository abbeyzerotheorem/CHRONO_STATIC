import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Accordion } from '../components/ui/Accordion';

const faqItems = [
  {
    id: 'shipping-1',
    title: 'What shipping methods do you use?',
    content: 'All orders are shipped via Arctic Priority (express) or Standard Tactical Delivery. Express shipping takes 2-3 business days, standard takes 5-7 business days. Free express shipping on orders over $500.',
  },
  {
    id: 'shipping-2',
    title: 'Do you ship internationally?',
    content: 'Yes, we ship to all countries. International delivery typically takes 7-14 business days. Customs duties and taxes may apply depending on your location.',
  },
  {
    id: 'returns-1',
    title: 'What is your return policy?',
    content: 'We offer a 30-day no-questions-asked return policy. Items must be unused and in original packaging. We provide a prepaid return label. Refunds are processed within 5-7 business days of receiving the return.',
  },
  {
    id: 'returns-2',
    title: 'How does the 5-year warranty work?',
    content: 'All CHRONO STATIC products come with a 5-year tactical warranty covering manufacturing defects and material failures. This does not cover damage from misuse, modification, or normal wear and tear. File a warranty claim through your account dashboard.',
  },
  {
    id: 'sizing-1',
    title: 'How do I find my size?',
    content: 'Refer to our Size Guide page for detailed measurements. We recommend taking your chest, waist, and inseam measurements and comparing them to our size chart. If you\'re between sizes, we suggest sizing up for optimal layering.',
  },
  {
    id: 'products-1',
    title: 'What temperature ratings do your products have?',
    content: 'Each product is tested and rated for specific temperature ranges. Our Arctic 01 line is rated down to -40°C, while the Glacier Pro series is optimized for -20°C to -10°C conditions. Temperature ratings are clearly listed on each product page.',
  },
  {
    id: 'products-2',
    title: 'Are your products truly waterproof?',
    content: 'Yes. Our DWR Hydrophobic Shield technology provides a 20,000mm water column pressure rating with fully sealed seams. All products undergo rigorous waterproof testing before leaving our facility.',
  },
  {
    id: 'orders-1',
    title: 'Can I modify or cancel my order?',
    content: 'Orders can be modified or cancelled within 1 hour of placement. After that, the order enters our processing queue and cannot be changed. Contact our support team immediately if you need to make changes.',
  },
  {
    id: 'orders-2',
    title: 'How do I track my order?',
    content: 'Once your order ships, you will receive a tracking number via email. You can also track your order in real-time through your account dashboard or our Track Order page.',
  },
  {
    id: 'sustainability-1',
    title: 'What sustainability practices do you follow?',
    content: 'We are committed to carbon-neutral production. Our Svalbard facility runs on 100% renewable energy. We use recycled packaging materials and offset all shipping emissions. Our graphene core technology reduces material waste by 40% compared to traditional insulation methods.',
  },
];

export default function FaqPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQs' }]} className="mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// SUPPORT</span>
            <h1 className="text-display text-white mt-2">Frequently Asked Questions</h1>
            <p className="text-body text-slate-400 mt-4 max-w-2xl">
              Find answers to common questions about our products, ordering, shipping, and returns.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {['Shipping', 'Returns', 'Sizing', 'Products', 'Orders', 'Sustainability'].map((cat) => (
                <span key={cat} className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase rounded-full bg-white/5 border border-white/5 text-slate-400">
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8"
          >
            <Accordion items={faqItems} allowMultiple />
          </motion.div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-sky-500/5 to-transparent border border-sky-500/10 text-center">
            <p className="text-sm text-slate-300">Still have questions?</p>
            <p className="text-xs text-slate-400 mt-1">Our support team is standing by.</p>
            <a
              href="mailto:support@chronostatic.com"
              className="inline-block mt-4 text-sm font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors"
            >
              support@chronostatic.com
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}