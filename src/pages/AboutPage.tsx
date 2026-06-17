import { motion } from 'framer-motion';
import { Shield, Compass, Mountain, Cpu } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { fadeUp } from '../lib/animations';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-mono-xs text-sky-400 font-bold">// ABOUT</span>
              <h1 className="text-display-lg text-white mt-4 max-w-3xl mx-auto">
                Engineered for the <span className="text-gradient-blue">Extreme</span>
              </h1>
              <p className="text-body text-slate-400 mt-4 max-w-xl mx-auto">
                Born in the High Arctic. CHRONO STATIC designs tactical performance gear for those who operate in the world's most punishing environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Mountain, title: 'Alpine Tested', desc: 'Every piece is field-tested at altitude. If it fails on the mountain, it never reaches production.' },
                { icon: Cpu, title: 'Technical Innovation', desc: 'Graphene cores, aerogel insulation, and smart thermal regulation. The future of cold weather gear.' },
                { icon: Shield, title: 'Built to Last', desc: '5-year warranty on all products. We stand behind our engineering with an ironclad guarantee.' },
                { icon: Compass, title: 'Arctic Heritage', desc: 'Our designs are forged in Longyearbyen, Svalbard — the northernmost settlement on Earth.' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
                >
                  <item.icon className="w-8 h-8 text-sky-400 mb-4" />
                  <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="text-mono-xs text-sky-400 font-bold">// OUR STORY</span>
              <h2 className="text-display text-white mt-2">From the Arctic to Your Back</h2>
              <div className="mt-8 space-y-4 text-body text-slate-400 leading-relaxed">
                <p>
                  CHRONO STATIC was founded on a simple premise: the people who push into the most extreme conditions on Earth deserve gear that is as engineered as their mission.
                </p>
                <p>
                  Our design philosophy merges military-grade durability with avant-garde minimalism. Every seam, every zipper, every material choice is subjected to the most rigorous testing protocols in the industry.
                </p>
                <p>
                  We don't follow trends. We follow the weather patterns of the Arctic, the feedback from professional alpine guides, and the exacting standards of those who rely on their gear to survive.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}