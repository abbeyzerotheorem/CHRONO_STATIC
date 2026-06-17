import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  badge?: string | number;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  variant?: 'underline' | 'pills';
}

export function Tabs({ tabs, defaultTab, className, variant = 'underline' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={className}>
      <div className={cn('flex border-b border-slate-800', variant === 'pills' && 'border-b-0 gap-2')}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative px-4 py-3 text-sm font-mono font-bold tracking-wider transition-colors whitespace-nowrap',
              variant === 'underline'
                ? activeTab === tab.id
                  ? 'text-sky-400'
                  : 'text-slate-400 hover:text-white'
                : variant === 'pills'
                ? activeTab === tab.id
                  ? 'text-white bg-sky-500/10 border border-sky-500/20 rounded-lg'
                  : 'text-slate-400 hover:text-white border border-transparent hover:border-slate-700 rounded-lg'
                : 'text-slate-400 hover:text-white'
            )}
          >
            {tab.label}
            {tab.badge && (
              <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-sky-500/10 text-sky-400 rounded-full">
                {tab.badge}
              </span>
            )}
            {variant === 'underline' && activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500"
              />
            )}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}