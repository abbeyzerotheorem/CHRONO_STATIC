# CHRONO STATIC

> Premium technical fashion engineered for extreme environments. Where alpine performance meets cybernetic aesthetics.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)

---

## What is this?

CHRONO STATIC is a high-end technical apparel e-commerce experience. Think of it as the digital home for a fictional brand that makes gear for people who operate in genuinely cold, hostile environments Svalbard research stations, Himalayan expeditions, Arctic convoys.

The site itself is built to feel like the products: precise, minimal, and a little bit intimidating. Dark mode only. Lots of motion. No fluff.

---

## Getting started

### Prerequisites

- Node.js 18+
- npm (comes with Node)

### Install and run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Then open `http://localhost:5173` in your browser.

---

## Project structure

```
src/
├── app/                    # App shell, routing, providers
│   ├── App.tsx
│   ├── AppLayout.tsx       # Main layout (nav, footer, overlays)
│   ├── Providers.tsx       # React Query + Router wrapper
│   └── Router.tsx          # All routes with lazy loading
├── components/
│   ├── layout/             # Structural components
│   │   ├── NavigationBar.tsx
│   │   ├── Footer.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── SearchOverlay.tsx
│   │   └── ...
│   └── ui/                 # Reusable UI primitives
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Accordion.tsx
│       ├── Rating.tsx
│       ├── Price.tsx
│       ├── SizeGuideModal.tsx
│       └── BackToTop.tsx
├── constants/
│   ├── products.ts         # Product catalog + collections
│   └── site.ts             # Navigation, footer links, site config
├── features/               # Feature-specific logic (future expansion)
├── hooks/                  # Custom React hooks
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   └── utils.ts            # cn() helper, formatPrice, etc.
├── pages/                  # Route-level page components
│   ├── HomePage.tsx
│   ├── ShopPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── CollectionsPage.tsx
│   ├── JournalPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── NotFoundPage.tsx
│   └── ...
├── store/                  # Zustand state management
│   ├── cartStore.ts
│   ├── wishlistStore.ts
│   └── uiStore.ts
├── styles/
│   └── index.css           # Global styles + Tailwind directives
├── types/
│   └── index.ts            # TypeScript interfaces
└── utils/
    └── api.ts              # API client (placeholder)
```

---

## Tech stack

| Layer | What we're using |
|-------|-----------------|
| **Framework** | React 18 + TypeScript |
| **Build tool** | Vite 6 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion |
| **State** | Zustand (cart, wishlist, UI) |
| **Data fetching** | TanStack Query |
| **Routing** | React Router v6 |
| **Icons** | Lucide React |
| **Smooth scroll** | Lenis |
| **Lottie** | lottie-react |

---

## Key features

- **Lazy-loaded routes** — every page is code-split for fast initial load
- **Smooth scrolling** — Lenis handles inertial scroll with custom easing
- **Animated page transitions** — Framer Motion `AnimatePresence` on route changes
- **Product colorway switching** — selecting a color updates the hero image and gallery
- **Cart & wishlist drawers** — slide-out panels with quantity controls
- **Size guide modal** — animated modal with sizing chart
- **Image zoom** — hover-to-zoom on product images
- **Search overlay** — debounced product search with instant results
- **Error boundary** — branded fallback for unexpected errors
- **Back-to-top button** — appears after scrolling, animated entrance
- **Newsletter signup** — email validation with success state
- **Lottie 404 animation** — animated illustration on not-found pages

---

## Design system

The site uses a custom design language built on Tailwind:

- **Colors:** Near-black backgrounds (`#0B0C10`), sky-blue accents (`#38BDF8`), slate neutrals
- **Typography:** System font stack for body, custom `font-display` for headings
- **Spacing:** Consistent 4px grid via Tailwind utilities
- **Motion:** Custom easing curve `[0.16, 1, 0.3, 1]` for snappy, premium feel
- **Borders:** Subtle `white/5` to `white/10` opacity borders for depth without noise

---

## Current state

This is a frontend implementation. Product images are placeholder assets. Cart and wishlist use local Zustand stores (no backend). The checkout flow is a UI shell. Account pages are placeholders.

The product catalog lives in `src/constants/products.ts` — add or edit products there.

---

## Contributing

This is a portfolio/experimental project. Feel free to fork it, break it, or use it as a reference for your own React + Tailwind e-commerce builds.

If you find a bug, the error boundary will catch it and show you a friendly message. If you want to fix it, the code is all here.

---

## License

MIT — do whatever you want with it.
