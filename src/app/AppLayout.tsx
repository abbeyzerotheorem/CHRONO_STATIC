import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { NavigationBar } from '../components/layout/NavigationBar';
import { Footer } from '../components/layout/Footer';
import { MobileMenu } from '../components/layout/MobileMenu';
import { SearchOverlay } from '../components/layout/SearchOverlay';
import { CartDrawer } from '../components/layout/CartDrawer';
import { ScrollProgressBar } from '../components/layout/ScrollProgressBar';
import { CursorEffect } from '../components/layout/CursorEffect';
import { SizeGuideModal } from '../components/ui/SizeGuideModal';
import { BackToTop } from '../components/ui/BackToTop';

export function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-sky-500/30 selection:text-black">
      <ScrollProgressBar />
      <CursorEffect />
      <NavigationBar />
      <MobileMenu />
      <SearchOverlay />
      <CartDrawer />
      <SizeGuideModal />
      <BackToTop />

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}