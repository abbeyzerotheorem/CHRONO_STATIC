import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';

export function SizeGuideModal() {
  const { isSizeGuideOpen, closeSizeGuide } = useUIStore();

  const sizes = [
    { size: 'S', chest: '36-38"', waist: '28-30"', hip: '36-38"', height: '5\'6"-5\'9"' },
    { size: 'M', chest: '38-40"', waist: '30-32"', hip: '38-40"', height: '5\'9"-6\'0"' },
    { size: 'L', chest: '40-42"', waist: '32-34"', hip: '40-42"', height: '6\'0"-6\'3"' },
    { size: 'XL', chest: '42-44"', waist: '34-36"', hip: '42-44"', height: '6\'3"-6\'6"' },
  ];

  return (
    <AnimatePresence>
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={closeSizeGuide}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-white">Size Guide</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Technical Puffer Jackets</p>
                </div>
              </div>
              <button
                onClick={closeSizeGuide}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              <p className="text-sm text-slate-400 mb-6">
                All measurements are in inches. For the best fit, we recommend measuring your chest, waist, and hip, then choosing the size that matches your largest measurement.
              </p>

              {/* Size Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="px-4 py-3 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Size</th>
                      <th className="px-4 py-3 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Chest</th>
                      <th className="px-4 py-3 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Waist</th>
                      <th className="px-4 py-3 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Hip</th>
                      <th className="px-4 py-3 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((row, i) => (
                      <tr key={row.size} className={cn('border-b border-slate-800/50', i % 2 === 0 ? 'bg-white/[0.02]' : '')}>
                        <td className="px-4 py-3 text-sm font-bold text-white">{row.size}</td>
                        <td className="px-4 py-3 text-sm text-slate-300">{row.chest}</td>
                        <td className="px-4 py-3 text-sm text-slate-300">{row.waist}</td>
                        <td className="px-4 py-3 text-sm text-slate-300">{row.hip}</td>
                        <td className="px-4 py-3 text-sm text-slate-300">{row.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Fit Tips */}
              <div className="mt-6 p-4 rounded-xl bg-sky-500/5 border border-sky-500/10">
                <h3 className="text-sm font-bold text-white mb-2">Fit Tips</h3>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li>• For layering, size up for a relaxed fit</li>
                  <li>• Technical puffers are designed for a snug, athletic fit</li>
                  <li>• Check product-specific notes for unique sizing</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}