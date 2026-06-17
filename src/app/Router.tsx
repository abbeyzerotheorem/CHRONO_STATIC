import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

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
const AboutPage = lazy(() => import('../pages/AboutPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <LazyLoad Component={HomePage} /> },
      { path: 'shop', element: <LazyLoad Component={ShopPage} /> },
      { path: 'shop/:category', element: <LazyLoad Component={ShopPage} /> },
      { path: 'cart', element: <LazyLoad Component={CartPage} /> },
      { path: 'wishlist', element: <LazyLoad Component={WishlistPage} /> },
      { path: 'about', element: <LazyLoad Component={AboutPage} /> },
      { path: '*', element: <LazyLoad Component={NotFoundPage} /> },
    ],
  },
]);