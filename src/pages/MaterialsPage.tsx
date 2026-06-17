import { motion } from 'framer-motion';
import { Layers, Shield, Thermometer, Wind, Droplets, Zap } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';

const materials = [
  { icon: Layers, name: 'Graphene Composite', desc: 'Ultra-thin, ultra-strong. Graphene-infused fibers provide thermal regulation and structural reinforcement.', specs: ['Tensile strength: 130 GPa', 'Thermal conductivity: 5000 W/mK', 'Weight reduction: 40% vs standard'] },
  { icon: Shield, name: 'Aerogel Insulation', desc: 'The lightest solid material on Earth. Used by NASA for space exploration. Now engineered for extreme cold weather gear.', specs: ['Density: 1.0 mg/cm³', 'R-value: 10.3 per inch', 'Compressible: 90%'] },
  { icon: Wind, name: '20D Nylon Ripstop', desc: 'Military-grade nylon with reinforced weave pattern that prevents tears from spreading. The gold standard for expedition gear.', specs: ['Denier: 20D', 'Tensile: 180 lbs', 'Weight: 35 g/m²'] },
  { icon: Thermometer, name: '900 FP Goose Down', desc: 'Premium Hutterite goose down with 900 fill power. Ethically sourced and RDS certified.', specs: ['Fill power: 900+', 'Loft: 3.5 inches per oz', 'Certification: RDS'] },
  { icon: Droplets, name: 'C6 DWR Treatment', desc: 'Fluorocarbon-free water repellent treatment. Beads water instantly while maintaining breathability.', specs: ['Rating: 20,000mm', 'Breathability: 15,000 g/m²', 'Eco: PFC-free'] },
  { icon: Zap, name: 'Conductive Thread', desc: 'Silver-infused conductive threading for integrated heating zones and smart textile connectivity.', specs: ['Resistance: 0.5 Ω/cm', 'Flex cycles: 100,000+', 'Washable: 50+ cycles'] },
];

export default function MaterialsPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Materials' }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// MATERIALS</span>
            <h1 className="text-display text-white mt-2">The Science of Protection</h1>
            <p className="text-body text-slate-400 mt-4 max-w-2xl">Every material used in CHRONO STATIC products is selected for its performance in extreme environments. From graphene-infused fibers to 900-fill goose down, we source only the highest-grade materials from around the world.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                  <material.icon className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{material.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{material.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {material.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1 h-1 bg-sky-500 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}