import { motion } from 'framer-motion';
import { Shield, Thermometer, Wind, Zap, Droplets, Snowflake, Layers, Cpu } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { fadeUp } from '../lib/animations';

const technologies = [
  {
    icon: Thermometer,
    title: 'Graphene Thermal Core',
    desc: 'Active heat regulation using graphene-infused fibers. Conducts body heat efficiently while blocking external cold. Tested to -40°C.',
    specs: ['Thermal conductivity: 5000 W/mK', 'Weight reduction: 40%', 'Lifetime: 5+ years'],
  },
  {
    icon: Shield,
    title: 'DWR Hydrophobic Shield',
    desc: '20,000mm water column pressure rating with sealed seams. Water beads and rolls off instantly.',
    specs: ['Rating: 20,000mm', 'Breathability: 15,000 g/m²', 'Repellent: C6 DWR'],
  },
  {
    icon: Wind,
    title: 'Windproof Barrier',
    desc: 'Full barrier against arctic wind chill. Multi-layer construction stops wind penetration completely.',
    specs: ['Windproof: 100%', 'Tested at: 120 km/h', 'Layer count: 3'],
  },
  {
    icon: Droplets,
    title: 'Moisture Management',
    desc: 'Advanced moisture wicking that pulls sweat away from the body while maintaining thermal core temperature.',
    specs: ['Wicking rate: 4.0', 'Drying time: 2hrs', 'Anti-microbial'],
  },
  {
    icon: Snowflake,
    title: 'Cryo-Adjust Insulation',
    desc: 'Phase-change materials that adapt to temperature. Warmer when cold, cooler when active.',
    specs: ['Active range: -40°C to +10°C', 'PCM rating: 84 J/g', '900 FP down fill'],
  },
  {
    icon: Layers,
    title: 'Multi-Layer Construction',
    desc: '3-layer bonded system: outer shell, insulation core, and thermal lining. Each layer optimized for specific performance.',
    specs: ['Shell: 20D Nylon Ripstop', 'Core: Graphene Aerogel', 'Lining: Brushed Fleece'],
  },
];

export default function TechnologyPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Technology' }]} className="mb-8" />

          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
            <span className="text-mono-xs text-sky-400 font-bold">// TECHNOLOGY</span>
            <h1 className="text-display text-white mt-2">Engineered Performance</h1>
            <p className="text-body text-slate-400 mt-4 max-w-2xl">
              Every CHRONO STATIC product is built with proprietary technology developed in our Svalbard research lab. 
              We don't use off-the-shelf materials — we engineer our own.
            </p>
          </motion.div>

          <div className="space-y-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6">
                    <tech.icon className="w-7 h-7 text-sky-400" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">{tech.title}</h2>
                  <p className="text-body text-slate-400 mb-6">{tech.desc}</p>
                  <div className="space-y-3">
                    {tech.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                        <span className="text-slate-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <tech.icon className="w-20 h-20 text-sky-400/30 mx-auto mb-4" />
                      <div className="flex gap-2 justify-center">
                        {[40, 60, 80, 60, 40].map((h, i) => (
                          <div
                            key={i}
                            className="w-4 bg-gradient-to-t from-sky-500/20 to-sky-400/30 rounded-sm"
                            style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}