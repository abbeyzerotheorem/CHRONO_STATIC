# CHRONO STATIC — Premium E-Commerce Architecture Plan

## 1. Current Design Analysis

### What Exists
- Single-page React app (Vite + TypeScript + TailwindCSS v4 + Motion)
- 6 components: Header, Hero, Catalog, ProductModal, CartDrawer, Footer
- 9 products across 3 categories (puffers, boots, gear)
- Basic cart state persisted to localStorage
- Dark/light mode toggle
- Inline SVGs from Lucide icons
- Simple gradient/text animations using Motion

### What Is Weak

| Area | Issue |
|------|-------|
| **Architecture** | Single flat file state management. No routing. No API layer. No code splitting. No lazy loading. |
| **Navigation** | Sticky header with 4 nav items that scroll to sections. No mega menu. No search overlay. No breadcrumbs. |
| **Hero** | Product-focused hero with size/color selectors, but no cinematic storytelling, no video, no full-screen impact. |
| **Catalog** | Grid of 9 cards with basic filters. No pagination. No infinite scroll. No grid/list toggle. No quick-add. |
| **Product** | Product modal only — no dedicated product detail page, no image zoom, no 360 viewer, no sticky ATC, no reviews section, no related products. |
| **Cart** | Drawer with basic qty controls. No save-for-later. No cart persistence across sessions with expiry. |
| **Checkout** | Fake modal that generates an order ID. No real checkout flow. No shipping/billing forms. No payment. |
| **Brand Story** | Zero about/technology/materials pages. No brand narrative. No "why buy from us" storytelling. |
| **Content** | No journal, no lookbook, no editorial content. No reason for users to spend time on site. |
| **Accounts** | No login, register, wishlist, order history, saved addresses, or payment methods. |
| **Animations** | Basic stagger/reveal on catalog cards. No page transitions, no scroll-triggered reveals, no parallax, no cursor effects. |
| **Typography** | Uses Inter + Space Grotesk + JetBrains Mono. Functional but not expressive or hierarchical. |
| **Spacing** | Every section has roughly the same padding/margins. No rhythmic variation. |
| **Accessibility** | No ARIA labels, no keyboard navigation, no focus management, no semantic landmarks. |
| **Performance** | No image optimization, no dynamic imports, no bundle analysis. |
| **SEO** | Single meta title/description. No structured data. No canonical URLs. No sitemap. |

### What Should Be Improved
1. **Architecture**: Router-based multi-page SPA with lazy-loaded routes, Zustand stores, React Query for data, proper API layer
2. **Design System**: Complete token system for typography, spacing, colors, shadows, radii, animations
3. **Navigation**: Transparent mega-menu with animated dropdowns, search overlay, sticky ATC, breadcrumbs
4. **Homepage**: Cinematic full-screen hero with video/image, brand philosophy, featured products, technology, testimonials, journal, stats
5. **Shop**: Advanced filtering, pagination, grid/list toggle, quick-view, wishlist, animated cards
6. **Product Page**: Gallery with zoom/360, specs, reviews, related, sticky ATC, scroll animations
7. **Checkout**: Multi-step checkout with shipping, billing, payment, order review
8. **Accounts**: Full auth flow, dashboard, orders, wishlist, addresses, payments
9. **Content**: Journal with reading progress, lookbook with editorial layout, about with timeline
10. **Animations**: Page transitions, scroll reveals, parallax, cursor effects, micro-interactions

---

## 2. Brand Identity System

### Brand DNA
```
CHRONO STATIC = Time + Stillness
┌─────────────────────────────────────────┐
│  Futuristic  •  Tactical  •  Minimal    │
│  Cold  •  Premium  •  Engineered        │
│  Cyber  •  Alpine  •  Industrial        │
│  Monochrome  •  Blue Accents            │
└─────────────────────────────────────────┘
```

### "Apple meets Moncler meets Arc'teryx meets Cyberpunk"
- **Apple**: Whitespace, typography, minimalism, premium feel
- **Moncler**: Alpine luxury, technical fashion, puffers
- **Arc'teryx**: Engineered performance, technical specs
- **Cyberpunk**: Industrial edges, monochrome, blue glow, tactical

---

## 3. Color Palette

```css
--color-white:        #FFFFFF
--color-off-white:    #F5F5F0
--color-ice-blue:     #E0F0FF
--color-electric-blue:#00B4FF
--color-sky-blue:     #38BDF8
--color-dark-navy:    #0F172A
--color-charcoal:     #1E293B
--color-slate-700:    #334155
--color-slate-400:    #94A3B8
--color-silver:       #CBD5E1
--color-black:        #0A0A0A
--color-almost-black: #111111
```

**Gradient (sparingly)**:
```
--gradient-hero: linear-gradient(135deg, #0A0A0A 0%, #1E293B 50%, #0F172A 100%)
--gradient-blue: linear-gradient(135deg, #00B4FF 0%, #38BDF8 100%)
```

---

## 4. Typography Scale

```css
/* Headings */
--text-display-xl: 7.5rem  (120px)  — Hero headlines
--text-display-lg: 5rem    (80px)   — Section titles
--text-display:    3.5rem   (56px)   — Page headings
--text-h1:         2.5rem   (40px)   — Section headings
--text-h2:         2rem     (32px)   — Sub-section headings
--text-h3:         1.5rem   (24px)   — Card titles
--text-h4:         1.25rem  (20px)   — Component titles

/* Body */
--text-body-lg:    1.125rem (18px)  — Lead text
--text-body:       1rem     (16px)  — Default body
--text-body-sm:    0.875rem (14px)  — Supporting text
--text-caption:    0.75rem  (12px)  — Captions

/* UI */
--text-mono-xs:    0.625rem (10px)  — Labels, badges
--text-mono-sm:    0.75rem  (12px)  — UI text
--text-mono:       0.875rem (14px)  — Code, technical
```

### Font Stack
```css
--font-display:   "Instrument Sans", system-ui, sans-serif  /* Premium, clean */
--font-body:      "Inter", system-ui, sans-serif            /* Readable body */
--font-mono:      "JetBrains Mono", monospace               /* Technical/code */
--font-alt:       "Space Grotesk", sans-serif               /* Alternate display */
```

---

## 5. Spacing System

```css
--space-1:  0.25rem  (4px)
--space-2:  0.5rem   (8px)
--space-3:  0.75rem  (12px)
--space-4:  1rem     (16px)
--space-5:  1.25rem  (20px)
--space-6:  1.5rem   (24px)
--space-8:  2rem     (32px)
--space-10: 2.5rem   (40px)
--space-12: 3rem     (48px)
--space-16: 4rem     (64px)
--space-20: 5rem     (80px)
--space-24: 6rem     (96px)
--space-32: 8rem     (128px)
```

### Section Rhythm
- Hero: `py-32` (128px padding)
- Content sections: `py-24` (96px padding)
- Feature sections: `py-20` (80px padding)
- Testimonials: `py-16` (64px padding)
- Footer: `pt-24 pb-8`

### Container Sizes
```css
--container-sm:   640px
--container-md:   768px
--container-lg:   1024px
--container-xl:   1280px
--container-2xl:  1440px
--container-full: 100%
```

---

## 6. Animation System

### Timing
```css
--duration-fast:    150ms   — Micro-interactions
--duration-normal:  300ms   — Standard transitions
--duration-slow:    500ms   — Page elements
--duration-xslow:   800ms   — Hero, reveals
--duration-xxslow:  1200ms  — Large reveals
```

### Easing
```css
--ease-out-expo:   cubic-bezier(0.19, 1, 0.22, 1)
--ease-in-out:     cubic-bezier(0.76, 0, 0.24, 1)
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1)
--ease-smooth:     cubic-bezier(0.16, 1, 0.3, 1)
```

### Animation Types
1. **Page Transitions**: Fade + slide (300ms ease-in-out)
2. **Element Reveals**: Fade up with scale (600ms ease-out-expo)
3. **Text Stagger**: Character-by-character reveal (50ms stagger)
4. **Image Reveal**: Clip-path mask reveal (800ms ease-out-expo)
5. **Parallax**: Scroll-driven Y offset
6. **Hover**: Scale 1.02 + shadow elevation
7. **Button Ripple**: Click ripple effect
8. **Magnetic**: Cursor-following offset on buttons
9. **Cursor Glow**: Custom cursor with trail effect
10. **Scroll Progress**: Top bar indicator
11. **Counter**: Animated number counting
12. **Loading Skeleton**: Pulse shimmer

---

## 7. Site Map (30+ Pages)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CHRONO STATIC                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  PUBLIC                                                                  │
│  ├── /                     → Homepage (Cinematic hero, features, etc.)   │
│  ├── /shop                 → Shop (All products, filters, grid)         │
│  ├── /shop?category=...    → Category filter                            │
│  ├── /collection/[slug]    → Collection page (Editorial)                │
│  ├── /new-arrivals         → New arrivals                               │
│  ├── /product/[slug]       → Product detail page                        │
│  ├── /search               → Search results overlay                     │
│  ├── /wishlist             → Wishlist page                              │
│  ├── /cart                 → Cart page                                  │
│  ├── /checkout             → Checkout flow (multi-step)                 │
│  ├── /order/success        → Order confirmation                         │
│  ├── /about                → About (History, mission, timeline)         │
│  ├── /technology           → Technology page                            │
│  ├── /materials            → Materials page                             │
│  ├── /lookbook             → Lookbook editorial gallery                 │
│  ├── /journal              → Journal index                              │
│  ├── /journal/[slug]       → Journal article                            │
│  ├── /faqs                 → FAQ page                                   │
│  ├── /support              → Support hub                                │
│  ├── /track-order          → Order tracking                             │
│  ├── /contact              → Contact form                               │
│  ├── /404                  → 404 page                                   │
│  ├── /privacy              → Privacy policy                             │
│  ├── /terms                → Terms of service                           │
│  ├── /shipping             → Shipping info                              │
│  └── /returns              → Returns & exchanges                        │
│                                                                          │
│  AUTH                                                                     │
│  ├── /login                → Login page                                 │
│  ├── /register             → Register page                              │
│  └── /forgot-password      → Password reset                             │
│                                                                          │
│  ACCOUNT (Protected)                                                      │
│  ├── /account              → Dashboard                                  │
│  ├── /account/orders       → Order history                              │
│  ├── /account/wishlist     → Saved wishlist                             │
│  ├── /account/profile      → Profile settings                           │
│  ├── /account/addresses    → Saved addresses                            │
│  ├── /account/payments     → Saved payment methods                      │
│  └── /account/newsletter   → Newsletter preferences                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Component Hierarchy

### Layout Components
```
<App>
  <SmoothScrollProvider>      ← Lenis smooth scrolling
    <CursorEffect />          ← Custom cursor
    <ScrollProgressBar />     ← Top reading indicator
    <PageTransition>          ← Framer AnimatePresence
      <NavigationBar>
        <Logo />
        <MegaMenu>
          <MegaMenuColumn>
            <MegaMenuItem />
          </MegaMenuColumn>
        </MegaMenu>
        <NavActions>
          <SearchTrigger />
          <WishlistTrigger />
          <CartTrigger />
          <MobileMenuTrigger />
        </NavActions>
      </NavigationBar>

      <SearchOverlay>
        <SearchInput />
        <SearchSuggestions />
        <SearchResults />
      </SearchOverlay>

      <CartDrawer>
        <CartItem />
        <CartSummary />
        <CheckoutButton />
      </CartDrawer>

      <WishlistDrawer>
        <WishlistItem />
      </WishlistDrawer>

      <Breadcrumbs />

      <RouteHandler />        ← React Router pages

      <Footer>
        <FooterColumn />
        <NewsletterForm />
        <FooterBottom />
      </Footer>

      <ToastNotifications />
    </PageTransition>
  </SmoothScrollProvider>
</App>
```

### Page Components
```
HomePage
├── HeroSection (video/image, animated headline, CTA)
├── FeaturedProductsCarousel
├── CollectionsShowcase
├── BrandPhilosophySection
├── TechnologyShowcase
├── ProductComparison
├── InteractiveHotspots
├── CustomerTestimonials
├── InstagramFeed
├── NewsletterSection
├── LatestJournalArticles
└── InteractiveStats

ShopPage
├── ShopHeader (title, results count, sort, view toggle)
├── FilterSidebar
│   ├── CategoryFilter
│   ├── PriceSlider
│   ├── ColorFilter
│   ├── SizeFilter
│   ├── MaterialFilter
│   ├── WeatherFilter
│   └── TemperatureRatingFilter
├── ProductGrid
│   └── ProductCard
│       ├── ProductImage
│       ├── ProductBadge
│       ├── QuickAddButton
│       ├── WishlistButton
│       └── ProductInfo
├── Pagination
└── EmptyState

ProductDetailPage
├── ImageGallery
│   ├── MainImage (with zoom)
│   ├── ThumbnailList
│   └── View360Button
├── ProductInfo
│   ├── ProductTitle
│   ├── ProductRating
│   ├── ProductPrice
│   ├── ColorSelector
│   ├── SizeSelector
│   ├── StockIndicator
│   ├── Description
│   ├── Accordion (Specs, Tech, Materials, Shipping, Returns)
│   └── StickyAddToCart
├── ReviewsSection
├── RelatedProducts
└── RecentlyViewed

CollectionPage
├── CollectionHero (editorial image, story)
├── CollectionGallery (parallax)
├── FeaturedProducts
└── CollectionStory (magazine layout)

AboutPage
├── BrandHero
├── HistoryTimeline
├── MissionSection
├── ManufacturingPhilosophy
├── SustainabilityShowcase
├── InnovationSection
├── FactoryGallery
└── AwardsSection

JournalPage
├── FeaturedArticle
├── ArticleGrid
│   └── ArticleCard
│       ├── ArticleImage
│       ├── ArticleCategory
│       ├── ArticleTitle
│       ├── ArticleExcerpt
│       ├── ArticleAuthor
│       └── ArticleDate
└── CategoryFilter

ArticleDetailPage
├── ArticleHero
├── ReadingProgressBar
├── ArticleContent
├── AuthorBio
├── ShareButtons
├── RelatedArticles
└── CommentsSection

CheckoutPage (Multi-step)
├── StepIndicator
├── ShippingForm
├── BillingForm
├── PaymentForm
├── OrderReview
└── OrderConfirmation

AccountDashboard
├── WelcomeCard
├── OrderSummary
├── WishlistSummary
├── ProfileCard
└── QuickActions
```

### UI Primitives
```
Button (variants: primary, secondary, outline, ghost, danger)
├── sizes: sm, md, lg, xl
├── loading state
├── icon support
└── magnetic variant

Input
├── text, email, password, search, tel, number
├── error state
├── label support
├── helper text
└── icon support

Select
├── native select
├── custom dropdown
└── multi-select

Modal / Dialog
├── sizes: sm, md, lg, fullscreen
├── close button
└── backdrop click

Drawer
├── side: left, right
├── sizes: sm, md, lg
└── backdrop

Accordion
├── single / multi
└── animated

Tabs
├── underline
├── pill
└── icon + text

Carousel (Embla)
├── autoplay
├── draggable
├── arrows
├── dots
└── responsive

Pagination
├── page numbers
├── prev/next
└── ellipsis

Breadcrumb
├── separator style
└── collapse on mobile

Toast
├── success, error, warning, info
├── auto-dismiss
└── stack

Skeleton
├── text, image, card, list variants
└── shimmer animation

Badge
├── colors
├── dot variant
└── icon variant

Tooltip
├── positions
└── delay

Rating
├── stars
└── display or interactive

Price
├── current
├── original (strikethrough)
└── discount badge
```

---

## 9. Folder Structure

```
src/
├── app/
│   ├── App.tsx                    ← Root app with providers
│   ├── Router.tsx                 ← Route definitions
│   └── Providers.tsx              ← Context providers
│
├── pages/
│   ├── HomePage.tsx
│   ├── ShopPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CollectionPage.tsx
│   ├── NewArrivalsPage.tsx
│   ├── SearchPage.tsx
│   ├── WishlistPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── OrderSuccessPage.tsx
│   ├── AboutPage.tsx
│   ├── TechnologyPage.tsx
│   ├── MaterialsPage.tsx
│   ├── LookbookPage.tsx
│   ├── JournalPage.tsx
│   ├── ArticlePage.tsx
│   ├── FaqPage.tsx
│   ├── SupportPage.tsx
│   ├── TrackOrderPage.tsx
│   ├── ContactPage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── ForgotPasswordPage.tsx
│   ├── NotFoundPage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   ├── ShippingPage.tsx
│   ├── ReturnsPage.tsx
│   └── account/
│       ├── DashboardPage.tsx
│       ├── OrdersPage.tsx
│       ├── WishlistPage.tsx
│       ├── ProfilePage.tsx
│       ├── AddressesPage.tsx
│       ├── PaymentsPage.tsx
│       └── NewsletterPrefsPage.tsx
│
├── components/
│   ├── ui/                         ← Primitive UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── Drawer.tsx
│   │   ├── Accordion.tsx
│   │   ├── Tabs.tsx
│   │   ├── Carousel.tsx
│   │   ├── Pagination.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── Toast.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Badge.tsx
│   │   ├── Tooltip.tsx
│   │   ├── Rating.tsx
│   │   ├── Price.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   └── index.ts
│   │
│   ├── layout/                     ← Layout components
│   │   ├── NavigationBar.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchOverlay.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── WishlistDrawer.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── CursorEffect.tsx
│   │   └── PageTransition.tsx
│   │
│   ├── home/                       ← Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CollectionsShowcase.tsx
│   │   ├── BrandPhilosophy.tsx
│   │   ├── TechnologyShowcase.tsx
│   │   ├── ProductComparison.tsx
│   │   ├── InteractiveHotspots.tsx
│   │   ├── Testimonials.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── NewsletterSection.tsx
│   │   ├── LatestJournal.tsx
│   │   └── InteractiveStats.tsx
│   │
│   ├── shop/                       ← Shop components
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductImage.tsx
│   │   ├── QuickView.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── FilterChips.tsx
│   │   ├── SortSelect.tsx
│   │   ├── PriceSlider.tsx
│   │   ├── ColorFilter.tsx
│   │   ├── SizeFilter.tsx
│   │   └── ViewToggle.tsx
│   │
│   ├── product/                    ← Product detail components
│   │   ├── ImageGallery.tsx
│   │   ├── ImageZoom.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── ColorSelector.tsx
│   │   ├── SizeSelector.tsx
│   │   ├── StockIndicator.tsx
│   │   ├── StickyAddToCart.tsx
│   │   ├── Specifications.tsx
│   │   ├── Reviews.tsx
│   │   ├── ReviewCard.tsx
│   │   ├── RelatedProducts.tsx
│   │   └── RecentlyViewed.tsx
│   │
│   ├── collection/                 ← Collection components
│   │   ├── CollectionHero.tsx
│   │   ├── CollectionGallery.tsx
│   │   └── CollectionStory.tsx
│   │
│   ├── journal/                    ← Journal components
│   │   ├── ArticleCard.tsx
│   │   ├── FeaturedArticle.tsx
│   │   ├── ArticleContent.tsx
│   │   ├── ReadingProgressBar.tsx
│   │   ├── AuthorBio.tsx
│   │   └── ShareButtons.tsx
│   │
│   ├── checkout/                   ← Checkout components
│   │   ├── CheckoutForm.tsx
│   │   ├── ShippingForm.tsx
│   │   ├── BillingForm.tsx
│   │   ├── PaymentForm.tsx
│   │   ├── OrderReview.tsx
│   │   ├── StepIndicator.tsx
│   │   └── OrderConfirmation.tsx
│   │
│   ├── account/                    ← Account components
│   │   ├── AccountSidebar.tsx
│   │   ├── OrderCard.tsx
│   │   ├── AddressCard.tsx
│   │   ├── PaymentCard.tsx
│   │   └── ProfileForm.tsx
│   │
│   └── shared/                     ← Shared components
│       ├── NewsletterForm.tsx
│       ├── VideoSection.tsx
│       ├── Timeline.tsx
│       ├── TestimonialCard.tsx
│       ├── StatCounter.tsx
│       ├── ParallaxImage.tsx
│       ├── AnimatedText.tsx
│       ├── SectionReveal.tsx
│       └── MagneticButton.tsx
│
├── features/
│   ├── auth/                       ← Authentication feature
│   │   ├── useAuth.ts
│   │   ├── AuthGuard.tsx
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   │
│   ├── cart/                       ← Cart feature
│   │   ├── useCart.ts
│   │   ├── cartStore.ts
│   │   └── CartItemCard.tsx
│   │
│   ├── wishlist/                   ← Wishlist feature
│   │   ├── useWishlist.ts
│   │   └── wishlistStore.ts
│   │
│   ├── search/                     ← Search feature
│   │   ├── useSearch.ts
│   │   └── searchStore.ts
│   │
│   └── checkout/                   ← Checkout feature
│       ├── useCheckout.ts
│       └── checkoutStore.ts
│
├── hooks/                          ← Shared hooks
│   ├── useMediaQuery.ts
│   ├── useScrollProgress.ts
│   ├── useIntersectionObserver.ts
│   ├── useMousePosition.ts
│   ├── useLockedBody.ts
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── useReducedMotion.ts
│
├── lib/                            ← Utility libraries
│   ├── utils.ts                    ← cn(), formatPrice(), etc.
│   ├── animations.ts               ← Framer Motion variants
│   ├── constants.ts                ← App-wide constants
│   └── validators.ts               ← Form validation schemas
│
├── services/                       ← API services
│   ├── api.ts                      ← Axios/fetch instance
│   ├── products.ts                 ← Product endpoints
│   ├── collections.ts              ← Collection endpoints
│   ├── auth.ts                     ← Auth endpoints
│   ├── orders.ts                   ← Order endpoints
│   ├── journal.ts                  ← Journal endpoints
│   └── newsletter.ts              ← Newsletter endpoints
│
├── store/                          ← Zustand stores
│   ├── uiStore.ts                  ← UI state (drawers, modals, theme)
│   ├── cartStore.ts                ← Cart state
│   ├── wishlistStore.ts            ← Wishlist state
│   ├── filterStore.ts              ← Shop filter state
│   └── authStore.ts                ← Auth state
│
├── types/                          ← TypeScript types
│   ├── product.ts
│   ├── collection.ts
│   ├── cart.ts
│   ├── user.ts
│   ├── order.ts
│   ├── journal.ts
│   ├── filter.ts
│   ├── api.ts
│   └── index.ts
│
├── constants/                      ← Static data and constants
│   ├── products.ts                 ← Product data
│   ├── collections.ts             ← Collection data
│   ├── journal.ts                  ← Journal data
│   ├── navigation.ts              ← Nav structure
│   ├── filters.ts                  ← Filter options
│   └── site.ts                     ← Site-wide config
│
├── styles/                         ← Global styles
│   ├── globals.css                 ← Tailwind imports + custom CSS
│   ├── typography.css              ← Typography classes
│   └── animations.css              ← Keyframe animations
│
└── utils/                          ← Pure utility functions
    ├── formatting.ts               ← Price, date, string formatting
    ├── validation.ts               ← Validation helpers
    ├── seo.ts                      ← SEO helpers
    └── analytics.ts                ← Analytics helpers
```

---

## 10. Routing Structure

```tsx
// src/app/Router.tsx
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'shop/:category', element: <ShopPage /> },
      { path: 'collection/:slug', element: <CollectionPage /> },
      { path: 'new-arrivals', element: <NewArrivalsPage /> },
      { path: 'product/:slug', element: <ProductDetailPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'order/success', element: <OrderSuccessPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'technology', element: <TechnologyPage /> },
      { path: 'materials', element: <MaterialsPage /> },
      { path: 'lookbook', element: <LookbookPage /> },
      { path: 'journal', element: <JournalPage /> },
      { path: 'journal/:slug', element: <ArticlePage /> },
      { path: 'faqs', element: <FaqPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: 'track-order', element: <TrackOrderPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'shipping', element: <ShippingPage /> },
      { path: 'returns', element: <ReturnsPage /> },
      {
        path: 'account',
        element: <AuthGuard><AccountLayout /></AuthGuard>,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'orders', element: <OrdersPage /> },
          { path: 'wishlist', element: <WishlistPage /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'addresses', element: <AddressesPage /> },
          { path: 'payments', element: <PaymentsPage /> },
          { path: 'newsletter', element: <NewsletterPrefsPage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
```

### Lazy Loading Strategy
```tsx
// All pages lazy loaded
const HomePage = lazy(() => import('@/pages/HomePage'));
const ShopPage = lazy(() => import('@/pages/ShopPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
// ... etc
```

---

## 11. Design System Implementation

### TailwindCSS Config Extension
```ts
// tailwind.config.ts (or CSS @theme)
@theme {
  /* Typography */
  --font-display: "Instrument Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  
  /* Colors */
  --color-ice-blue: #E0F0FF;
  --color-electric-blue: #00B4FF;
  --color-sky: #38BDF8;
  --color-dark-navy: #0F172A;
  --color-charcoal: #1E293B;
  --color-silver: #CBD5E1;
  --color-off-white: #F5F5F0;
  --color-almost-black: #111111;
  
  /* Spacing */
  --spacing-section: 6rem;
  --spacing-section-sm: 4rem;
  --spacing-section-lg: 8rem;
  
  /* Animation */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-expo: cubic-bezier(0.19, 1, 0.22, 1);
}
```

---

## 12. Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Zustand Stores                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │ uiStore  │  │cartStore │  │wishStore │  │authStore│ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬────┘ │
│       │             │             │             │       │
│  ┌────┴─────┐  ┌────┴─────┐  ┌────┴─────┐  ┌────┴────┐ │
│  │Drawers   │  │Cart      │  │Wishlist  │  │User     │ │
│  │Theme     │  │Items     │  │Items     │  │Tokens   │ │
│  │Modals    │  │Totals    │  │          │  │Session  │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
└─────────────────────────────────────────────────────────┘
           ▲              ▲              ▲              ▲
           │              │              │              │
┌──────────┴──────────────┴──────────────┴──────────────┴──────────┐
│                      React Query (Server State)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │Products  │  │Collections│ │  Orders  │  │ Journal  │          │
│  │  Query   │  │   Query   │  │  Query   │  │  Query   │          │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘          │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                          Services Layer                            │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                    API Client (fetch/axios)                   │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────────┐  │ │
│  │  │Products  │ │ Auth     │ │ Orders   │ │ Newsletter     │  │ │
│  │  │Service   │ │ Service  │ │ Service  │ │ Service        │  │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └────────────────┘  │ │
│  └──────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

---

## 13. Phased Implementation Plan

### Phase 1: Foundation (Days 1-2)
- [ ] Install all dependencies (react-router, zustand, @tanstack/react-query, framer-motion, lenis, react-hook-form, zod, embla-carousel, shadcn/ui)
- [ ] Create folder structure
- [ ] Set up design system tokens in TailwindCSS
- [ ] Create global CSS with typography, animations
- [ ] Build all UI primitives (Button, Input, Modal, Drawer, etc.)
- [ ] Create utility functions (cn, formatPrice, etc.)
- [ ] Create animation variants library
- [ ] Set up App Providers (Theme, SmoothScroll, QueryClient, Router)

### Phase 2: Layout & Navigation (Days 3-4)
- [ ] Build NavigationBar with transparent/sticky states
- [ ] Build MegaMenu with animated dropdown
- [ ] Build MobileMenu with slide-in drawer
- [ ] Build SearchOverlay with animated input
- [ ] Build CartDrawer with animations
- [ ] Build WishlistDrawer
- [ ] Build Footer with columns and newsletter
- [ ] Build Breadcrumbs component
- [ ] Build ScrollProgressBar
- [ ] Build CursorEffect (subtle glow)
- [ ] Build PageTransition wrapper
- [ ] Set up Zustand uiStore for global UI state

### Phase 3: Homepage (Days 5-7)
- [ ] Build HeroSection (full-screen video/image, animated headline, dual CTA)
- [ ] Build FeaturedProducts carousel (Embla)
- [ ] Build CollectionsShowcase (parallax cards)
- [ ] Build BrandPhilosophy section (animated text reveal)
- [ ] Build TechnologyShowcase (icon grid with hover effects)
- [ ] Build ProductComparison (side-by-side table)
- [ ] Build InteractiveHotspots (image with clickable dots)
- [ ] Build Testimonials carousel
- [ ] Build InstagramFeed (grid with hover overlay)
- [ ] Build NewsletterSection
- [ ] Build LatestJournal article cards
- [ ] Build InteractiveStats (animated counters)
- [ ] Assemble HomePage

### Phase 4: Shop & Product (Days 8-11)
- [ ] Build ProductCard with all states (default, hover, loading)
- [ ] Build ProductGrid with animated layout
- [ ] Build FilterSidebar with all filters
- [ ] Build PriceSlider (custom range input)
- [ ] Build ColorFilter with swatches
- [ ] Build SizeFilter with buttons
- [ ] Build SortSelect
- [ ] Build ViewToggle (grid/list)
- [ ] Build FilterChips (active filter display)
- [ ] Build Pagination
- [ ] Build empty state
- [ ] Assemble ShopPage
- [ ] Build ImageGallery with zoom
- [ ] Build 360 viewer placeholder
- [ ] Build ColorSelector
- [ ] Build SizeSelector with stock indicator
- [ ] Build ProductInfo panel
- [ ] Build Specifications accordion
- [ ] Build Reviews section with star rating
- [ ] Build RelatedProducts carousel
- [ ] Build RecentlyViewed
- [ ] Build StickyAddToCart
- [ ] Assemble ProductDetailPage

### Phase 5: Cart, Checkout & Orders (Days 12-14)
- [ ] Build CartPage with full layout
- [ ] Build Checkout multi-step form
- [ ] Build ShippingForm (react-hook-form + zod)
- [ ] Build BillingForm
- [ ] Build PaymentForm (card input with validation)
- [ ] Build OrderReview
- [ ] Build StepIndicator
- [ ] Build OrderSuccessPage
- [ ] Build Order tracking page
- [ ] Build Zustand cartStore with persistence
- [ ] Build Zustand checkoutStore
- [ ] Wire up cart/checkout flow end-to-end

### Phase 6: Auth & Account (Days 15-16)
- [ ] Build LoginPage with form validation
- [ ] Build RegisterPage
- [ ] Build ForgotPasswordPage
- [ ] Build AuthGuard component
- [ ] Build AccountLayout with sidebar navigation
- [ ] Build DashboardPage
- [ ] Build OrdersPage with order cards
- [ ] Build WishlistPage
- [ ] Build ProfilePage with edit form
- [ ] Build AddressesPage with CRUD
- [ ] Build PaymentsPage
- [ ] Build NewsletterPrefsPage
- [ ] Build Zustand authStore

### Phase 7: Content Pages (Days 17-19)
- [ ] Build AboutPage with brand timeline
- [ ] Build TechnologyPage
- [ ] Build MaterialsPage
- [ ] Build LookbookPage (full-screen editorial gallery)
- [ ] Build JournalPage with article grid
- [ ] Build ArticleCard
- [ ] Build FeaturedArticle
- [ ] Build ArticleDetailPage with reading progress
- [ ] Build AuthorBio
- [ ] Build ShareButtons
- [ ] Build CollectionPage with editorial layout
- [ ] Build NewArrivalsPage

### Phase 8: Utility Pages & Polish (Days 20-21)
- [ ] Build FAQ page with accordion
- [ ] Build SupportPage
- [ ] Build ContactPage with form
- [ ] Build 404 page with animated illustration
- [ ] Build Privacy, Terms, Shipping, Returns pages
- [ ] Build Toast notification system
- [ ] Build Loading/skeleton states for all pages
- [ ] Implement responsive design for all pages
- [ ] Add ARIA labels and keyboard navigation
- [ ] Add SEO meta tags to all pages
- [ ] Add structured data (JSON-LD)
- [ ] Performance audit and optimization

### Phase 9: Animation & Polish (Days 22-23)
- [ ] Add page transitions (AnimatePresence)
- [ ] Add scroll-triggered reveals to all sections
- [ ] Add parallax effects to hero and collections
- [ ] Add text stagger animations
- [ ] Add image reveal animations
- [ ] Add magnetic button effects
- [ ] Add button ripple effects
- [ ] Fine-tune all micro-interactions
- [ ] Test animations on reduced motion
- [ ] Cross-browser testing
- [ ] Lighthouse audit

---

## 14. Dependencies to Install

```json
{
  "dependencies": {
    // Existing
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    
    // NEW - Routing
    "react-router-dom": "^7.x",
    
    // NEW - State Management
    "zustand": "^5.x",
    
    // NEW - Server State
    "@tanstack/react-query": "^5.x",
    
    // NEW - Forms
    "react-hook-form": "^7.x",
    "@hookform/resolvers": "^4.x",
    "zod": "^3.x",
    
    // NEW - Animation
    "framer-motion": "^12.x",
    "gsap": "^3.x",
    "lenis": "^1.x",
    
    // NEW - Carousel
    "embla-carousel-react": "^8.x",
    "embla-carousel-autoplay": "^8.x",
    
    // NEW - Utilities
    "clsx": "^2.x",
    "tailwind-merge": "^3.x",
    "date-fns": "^4.x",
    
    // NEW - Image
    "react-image-magnifiers": "^1.x",
    
    // NEW - Icons (already have lucide-react)
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

---

## 15. Key Architectural Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Router** | React Router v7 | Industry standard, lazy loading support, nested routes |
| **State (client)** | Zustand | Simple, performant, no boilerplate, persistence middleware |
| **State (server)** | TanStack Query | Caching, refetching, loading states, pagination |
| **Animation** | Framer Motion + GSAP | FM for simple UI, GSAP for complex scroll/parallax |
| **Smooth Scroll** | Lenis | Best smooth scroll with GSAP integration |
| **Forms** | React Hook Form + Zod | Performant forms with schema validation |
| **Carousel** | Embla | Lightweight, customizable, accessible |
| **Styling** | TailwindCSS v4 | Utility-first, design tokens, no runtime |
| **CSS Utils** | clsx + tailwind-merge | Clean conditional classes, conflict resolution |
| **Forms** | React Hook Form | Uncontrolled inputs, no re-renders |
| **Image Optimization** | Vite built-in + lazy loading | No need for Next.js Image in SPA |
| **Code Splitting** | React.lazy + Suspense | Route-level code splitting |

---

## 16. Accessibility Requirements

- All interactive elements must have focus styles
- All images must have alt text
- All forms must have labels
- All modals must trap focus
- All drawers must be dismissible with Escape key
- Color contrast must meet WCAG AA standards
- Semantic HTML landmarks (header, main, nav, footer)
- ARIA labels on all icon-only buttons
- Skip-to-content link
- Reduced motion media query respect
- Keyboard navigation for all interactive components
- Screen reader announcements for dynamic content

---

## 17. SEO Requirements

- Unique meta title and description per page
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Structured data (Product, Organization, Article, BreadcrumbList)
- Canonical URLs
- Sitemap.xml generation
- Semantic heading hierarchy (h1 → h6)
- Image alt attributes
- Descriptive link text
- robots.txt

---

## 18. Performance Targets

- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms
- Time to Interactive: <3.5s
- Bundle size: <200KB initial JS
- Image optimization: WebP format, responsive sizes, lazy loading
- Code splitting: Route-level + component-level

---

## 19. Responsive Breakpoints

```css
sm:  640px   → Mobile landscape
md:  768px   → Tablet portrait
lg:  1024px  → Tablet landscape / Small desktop
xl:  1280px  → Desktop
2xl: 1536px  → Large desktop
```

**Mobile First** — All designs start at mobile and scale up.

---

## 20. Request for Approval

This architecture plan covers:

1. ✅ Complete website architecture (30+ pages)
2. ✅ Component hierarchy with 100+ components
3. ✅ Design system with typography, colors, spacing, animations
4. ✅ Folder structure with scalable organization
5. ✅ Routing structure with lazy loading
6. ✅ Data flow with Zustand + React Query
7. ✅ 9-phase implementation plan
8. ✅ Dependencies list
9. ✅ Accessibility, SEO, and performance requirements
10. ✅ Responsive design strategy

---

**Next Step**: Please review this plan and approve it so I can begin implementation Phase 1 (Foundation).