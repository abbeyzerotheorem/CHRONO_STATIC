import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { SimplePage } from '../pages/SimplePage';

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

// Lazy loaded pages
const HomePage = lazy(() => import('../pages/HomePage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const WishlistPage = lazy(() => import('../pages/WishlistPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const CollectionsPage = lazy(() => import('../pages/CollectionsPage'));

const NewArrivalsPage = lazy(() => import('../pages/NewArrivalsPage'));
const LookbookPage = lazy(() => import('../pages/LookbookPage'));
const TechnologyPage = lazy(() => import('../pages/TechnologyPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <LazyLoad Component={HomePage} /> },

      // Shop
      { path: 'shop', element: <LazyLoad Component={ShopPage} /> },
      { path: 'shop/:category', element: <LazyLoad Component={ShopPage} /> },

      // Products
      { path: 'product/:slug', element: <LazyLoad Component={ProductDetailPage} /> },

      // Cart & Wishlist
      { path: 'cart', element: <LazyLoad Component={CartPage} /> },
      { path: 'wishlist', element: <LazyLoad Component={WishlistPage} /> },
      { path: 'checkout', element: <SimplePage title="Checkout" label="CHECKOUT" breadcrumb="Checkout" /> },
      { path: 'order/success', element: <SimplePage title="Order Confirmed" label="ORDER_SUCCESS" breadcrumb="Order Success"><p>Your order has been confirmed. You will receive a confirmation email shortly with tracking information.</p></SimplePage> },

      // Collections
      { path: 'collections', element: <LazyLoad Component={CollectionsPage} /> },
      { path: 'collection/:slug', element: <LazyLoad Component={ProductDetailPage} /> },

      // Content
      { path: 'new-arrivals', element: <LazyLoad Component={NewArrivalsPage} /> },
      { path: 'lookbook', element: <LazyLoad Component={LookbookPage} /> },
      { path: 'technology', element: <LazyLoad Component={TechnologyPage} /> },
      { path: 'materials', element: <SimplePage title="Materials" label="MATERIALS" breadcrumb="Materials"><p>Every material used in CHRONO STATIC products is selected for its performance in extreme environments. From graphene-infused fibers to 900-fill goose down, we source only the highest-grade materials from around the world.</p><p>Our materials lab in Svalbard continuously tests new fabrics and composites to push the boundaries of what's possible in cold-weather gear.</p></SimplePage> },
      { path: 'journal', element: <SimplePage title="Journal" label="JOURNAL" breadcrumb="Journal"><p>Field reports, technical deep dives, and stories from the edge of the world.</p></SimplePage> },
      { path: 'journal/:slug', element: <SimplePage title="Article" label="ARTICLE" breadcrumb="Journal" /> },
      { path: 'about', element: <LazyLoad Component={AboutPage} /> },

      // Support
      { path: 'faqs', element: <SimplePage title="Frequently Asked Questions" label="FAQS" breadcrumb="FAQs"><p>Find answers to common questions about our products, ordering, shipping, and returns.</p></SimplePage> },
      { path: 'contact', element: <SimplePage title="Contact" label="CONTACT" breadcrumb="Contact"><p>Get in touch with our team. For order inquiries, please include your order number.</p></SimplePage> },
      { path: 'support', element: <SimplePage title="Support Center" label="SUPPORT" breadcrumb="Support" /> },
      { path: 'track-order', element: <SimplePage title="Track Order" label="TRACK_ORDER" breadcrumb="Track Order"><p>Enter your order number to track your shipment in real-time.</p></SimplePage> },

      // Account (will be expanded with auth guard later)
      { path: 'account', element: <SimplePage title="Dashboard" label="ACCOUNT_DASHBOARD" breadcrumb="Account" /> },
      { path: 'account/orders', element: <SimplePage title="Order History" label="ORDERS" breadcrumb="Orders" /> },
      { path: 'account/wishlist', element: <LazyLoad Component={WishlistPage} /> },
      { path: 'account/profile', element: <SimplePage title="Profile Settings" label="PROFILE" breadcrumb="Profile" /> },
      { path: 'account/addresses', element: <SimplePage title="Saved Addresses" label="ADDRESSES" breadcrumb="Addresses" /> },
      { path: 'account/payments', element: <SimplePage title="Payment Methods" label="PAYMENTS" breadcrumb="Payments" /> },

      // Careers
      { path: 'careers', element: <SimplePage title="Careers" label="CAREERS" breadcrumb="Careers"><p>Join the team at CHRONO STATIC. We're always looking for talented engineers, designers, and field testers who share our passion for extreme environment performance.</p></SimplePage> },

      // Auth
      { path: 'login', element: <SimplePage title="Sign In" label="LOGIN" breadcrumb="Login" /> },
      { path: 'register', element: <SimplePage title="Create Account" label="REGISTER" breadcrumb="Register" /> },
      { path: 'forgot-password', element: <SimplePage title="Reset Password" label="RESET_PASSWORD" breadcrumb="Reset Password" /> },

      // Legal
      { path: 'privacy', element: <SimplePage title="Privacy Policy" label="PRIVACY" breadcrumb="Privacy Policy" /> },
      { path: 'terms', element: <SimplePage title="Terms of Service" label="TERMS" breadcrumb="Terms of Service" /> },
      { path: 'shipping', element: <SimplePage title="Shipping Information" label="SHIPPING" breadcrumb="Shipping Information" /> },
      { path: 'returns', element: <SimplePage title="Returns & Exchanges" label="RETURNS" breadcrumb="Returns" /> },

      // 404
      { path: '*', element: <LazyLoad Component={NotFoundPage} /> },
    ],
  },
]);