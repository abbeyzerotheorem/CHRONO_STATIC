import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LegalPage, privacySections, termsSections, shippingSections, returnsSections } from '../pages/LegalPage';

const LazyLoad = ({ Component }: { Component: React.ComponentType }) => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-black">
        <LoadingSpinner text="Loading..." />
      </div>
    }
  >
    <Component />
  </Suspense>
);

const HomePage = lazy(() => import('../pages/HomePage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const WishlistPage = lazy(() => import('../pages/WishlistPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const CollectionsPage = lazy(() => import('../pages/CollectionsPage'));
const NewArrivalsPage = lazy(() => import('../pages/NewArrivalsPage'));
const LookbookPage = lazy(() => import('../pages/LookbookPage'));
const TechnologyPage = lazy(() => import('../pages/TechnologyPage'));
const MaterialsPage = lazy(() => import('../pages/MaterialsPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const JournalPage = lazy(() => import('../pages/JournalPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const CheckoutPage = lazy(() => import('../pages/CheckoutPage'));
const TrackOrderPage = lazy(() => import('../pages/TrackOrderPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <LazyLoad Component={HomePage} /> },

      // Shop
      { path: 'shop', element: <LazyLoad Component={ShopPage} /> },
      { path: 'shop/:category', element: <LazyLoad Component={ShopPage} /> },

      // Products
      { path: 'product/:slug', element: <LazyLoad Component={ProductDetailPage} /> },

      // Cart & Checkout
      { path: 'cart', element: <LazyLoad Component={CartPage} /> },
      { path: 'wishlist', element: <LazyLoad Component={WishlistPage} /> },
      { path: 'checkout', element: <LazyLoad Component={CheckoutPage} /> },
      { path: 'order/success', element: <LazyLoad Component={CheckoutPage} /> },

      // Collections
      { path: 'collections', element: <LazyLoad Component={CollectionsPage} /> },
      { path: 'collection/:slug', element: <LazyLoad Component={ProductDetailPage} /> },

      // Content
      { path: 'new-arrivals', element: <LazyLoad Component={NewArrivalsPage} /> },
      { path: 'lookbook', element: <LazyLoad Component={LookbookPage} /> },
      { path: 'technology', element: <LazyLoad Component={TechnologyPage} /> },
      { path: 'materials', element: <LazyLoad Component={MaterialsPage} /> },
      { path: 'journal', element: <LazyLoad Component={JournalPage} /> },
      { path: 'journal/:slug', element: <LazyLoad Component={JournalPage} /> },
      { path: 'about', element: <LazyLoad Component={AboutPage} /> },

      // Support
      { path: 'faqs', element: <LazyLoad Component={FaqPage} /> },
      { path: 'contact', element: <LazyLoad Component={ContactPage} /> },
      { path: 'support', element: <LazyLoad Component={FaqPage} /> },
      { path: 'track-order', element: <LazyLoad Component={TrackOrderPage} /> },

      // Account (placeholder — will be expanded with auth guard)
      { path: 'account', element: <LazyLoad Component={LoginPage} /> },
      { path: 'account/orders', element: <LazyLoad Component={TrackOrderPage} /> },
      { path: 'account/wishlist', element: <LazyLoad Component={WishlistPage} /> },
      { path: 'account/profile', element: <LazyLoad Component={LoginPage} /> },
      { path: 'account/addresses', element: <LazyLoad Component={LoginPage} /> },
      { path: 'account/payments', element: <LazyLoad Component={LoginPage} /> },

      // Careers
      { path: 'careers', element: <LegalPage title="Careers" label="CAREERS" breadcrumb="Careers" sections={[{ title: 'Join the Mission', content: 'CHRONO STATIC is looking for talented engineers, designers, and field testers who share our passion for extreme environment performance. We are an equal opportunity employer committed to building a diverse team.' }, { title: 'Open Positions', content: 'We are currently accepting applications for: Senior Materials Engineer, Product Designer (Technical Apparel), Field Test Coordinator, Supply Chain Manager, and Digital Experience Designer. Send your resume and portfolio to careers@chronostatic.com.' }]} /> },

      // Auth
      { path: 'login', element: <LazyLoad Component={LoginPage} /> },
      { path: 'register', element: <LazyLoad Component={RegisterPage} /> },
      { path: 'forgot-password', element: <LazyLoad Component={LoginPage} /> },

      // Legal
      { path: 'privacy', element: <LegalPage title="Privacy Policy" label="PRIVACY" breadcrumb="Privacy Policy" sections={privacySections} /> },
      { path: 'terms', element: <LegalPage title="Terms of Service" label="TERMS" breadcrumb="Terms of Service" sections={termsSections} /> },
      { path: 'shipping', element: <LegalPage title="Shipping Information" label="SHIPPING" breadcrumb="Shipping Information" sections={shippingSections} /> },
      { path: 'returns', element: <LegalPage title="Returns & Exchanges" label="RETURNS" breadcrumb="Returns" sections={returnsSections} /> },

      // 404
      { path: '*', element: <LazyLoad Component={NotFoundPage} /> },
    ],
  },
]);