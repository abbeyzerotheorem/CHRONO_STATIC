import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { COLLECTIONS } from '../constants/products';
import { cn } from '../lib/utils';

const editorialImages = [
  {
    id: 'arctic-expedition',
    src: '/assets/images/puffer_mountain_1780990327549.png',
    title: 'Arctic Expedition',
    subtitle: 'Svalbard, Norway — Field Test Unit Alpha',
    collection: 'Arctic 01',
    aspect: 'wide',
  },
  {
    id: 'aurora-borealis',
    src: '/assets/images/puffer_aurora_1780990270336.png',
    title: 'Aurora Borealis',
    subtitle: 'Tromsø, Norway — Night Operations',
    collection: 'Aurora Series',
    aspect: 'portrait',
  },
  {
    id: 'stealth-ops',
    src: '/assets/images/puffer_stealth_1780990299665.png',
    title: 'Stealth Operations',
    subtitle: 'Classified Location — Low Signature Protocol',
    collection: 'Stealth Line',
    aspect: 'square',
  },
  {
    id: 'glacier-pro',
    src: '/assets/images/puffer_glacier_1780990314070.png',
    title: 'Glacier Pro',
    subtitle: 'Jostedalsbreen, Norway — Altitude 1,800m',
    collection: 'Glacier Pro',
    aspect: 'wide',
  },
  {
    id: 'hero-shot',
    src: '/assets/images/puffer_hero_1780990255920.png',
    title: 'Collection Arctic 01',
    subtitle: 'Longyearbyen, Svalbard — HQ Deployment',
    collection: 'Arctic 01',
    aspect: 'portrait',
  },
  {
    id: 'orbit-gloss',
    src: '/assets/images/puffer_orbit_1780990285645.png',
    title: 'Orbit Gloss Shield',
    subtitle: 'Reflective Surface Analysis — Lab 7',
    collection: 'Orbit Series',
    aspect: 'square',
  },
];

export default function LookbookPage() {
  const [selectedImage, setSelectedImage] = useState<typeof editorialImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(editorialImages[index]);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + editorialImages.length) % editorialImages.length
      : (currentIndex + 1) % editorialImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(editorialImages[newIndex]);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">
              // CLASSIFIED ARCHIVE
            </span>
            <h1 className="text-display-lg text-white mt-2 max-w-3xl">
              Tactical Field <span className="text-gradient-blue">Report</span>
            </h1>
            <p className="text-body text-slate-400 mt-4 max-w-xl">
              Visual documentation of CHRONO STATIC equipment deployed in extreme environments. Each image captured under real operational conditions.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-2xl font-display font-bold text-white">{editorialImages.length}</p>
                <p className="text-xs font-mono text-slate-500">Field Reports</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-white">6</p>
                <p className="text-xs font-mono text-slate-500">Locations</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-white">-40°C</p>
                <p className="text-xs font-mono text-slate-500">Min Temp</p>
              </div>
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorialImages.map((image, index) => (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                onClick={() => openImage(index)}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900 cursor-pointer text-left',
                  image.aspect === 'wide' ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'
                )}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-mono-xs text-sky-400 font-bold tracking-wider uppercase mb-1">
                    {image.collection}
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-slate-300 mt-1">{image.subtitle}</p>
                </div>

                {/* Classification badge */}
                <div className="absolute top-4 left-4 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[9px] font-mono text-red-400 font-bold tracking-widest uppercase">
                  CLASSIFIED
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Fullscreen Viewer ── */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            >
              {/* Toolbar */}
              <div className="absolute top-0 left-0 right-0 z-20 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-mono-xs text-sky-400 font-bold tracking-wider">
                    {currentIndex + 1} / {editorialImages.length}
                  </span>
                  <span className="text-mono-xs text-slate-400">{selectedImage.collection}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsFullscreen(!isFullscreen); }}
                    className="p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                    className="p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center p-20"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              {/* Image info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-mono-xs text-sky-400 font-bold tracking-wider uppercase">{selectedImage.collection}</p>
                <h2 className="text-2xl font-display font-bold text-white mt-1">{selectedImage.title}</h2>
                <p className="text-sm text-slate-300 mt-1">{selectedImage.subtitle}</p>
              </div>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/5 text-white hover:bg-sky-500/20 hover:border-sky-500/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/5 text-white hover:bg-sky-500/20 hover:border-sky-500/30 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}