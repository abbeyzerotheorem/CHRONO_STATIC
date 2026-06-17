import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';

interface SimplePageProps {
  title: string;
  label: string;
  breadcrumb: string;
  children?: React.ReactNode;
}

export function SimplePage({ title, label, breadcrumb, children }: SimplePageProps) {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: breadcrumb }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// {label}</span>
            <h1 className="text-display text-white mt-2">{title}</h1>
            <div className="mt-8 text-body text-slate-400 max-w-3xl leading-relaxed space-y-4">
              {children || (
                <p>This page is under construction. Check back soon for updated content.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}