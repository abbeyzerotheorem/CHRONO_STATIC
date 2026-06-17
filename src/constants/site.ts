export const SITE = {
  name: 'CHRONO STATIC',
  tagline: 'Cold Engineered. Cyber Forged.',
  description: 'Premium technical fashion engineered for extreme environments. Where alpine performance meets cybernetic aesthetics.',
  url: 'https://chronostatic.com',
  email: 'command@chronostatic.com',
  phone: '+1 (800) CHRONO-01',
  hq: 'Longyearbyen, Svalbard Arctic Outpost',
  coordinates: '78.2232° N, 15.6469° E',
  social: {
    instagram: '@chronostatic',
    twitter: '@chronostatic',
    youtube: '@chronostatic',
    tiktok: '@chronostatic',
  },
} as const;

export const NAVIGATION = {
  main: [
    {
      label: 'Shop',
      href: '/shop',
      columns: [
        {
          title: 'Categories',
          links: [
            { label: 'All Products', href: '/shop' },
            { label: 'Puffers', href: '/shop/puffers' },
            { label: 'Boots', href: '/shop/boots' },
            { label: 'Gear', href: '/shop/gear' },
            { label: 'Accessories', href: '/shop/accessories' },
          ],
        },
        {
          title: 'Collections',
          links: [
            { label: 'Arctic 01', href: '/collection/arctic-01' },
            { label: 'Aurora Series', href: '/collection/aurora-series' },
            { label: 'Stealth Line', href: '/collection/stealth-line' },
            { label: 'Glacier Pro', href: '/collection/glacier-pro' },
          ],
        },
        {
          title: 'Featured',
          links: [
            { label: 'New Arrivals', href: '/new-arrivals' },
            { label: 'Best Sellers', href: '/shop?sort=best-sellers' },
            { label: 'Limited Edition', href: '/shop?filter=limited' },
            { label: 'Sale', href: '/shop?filter=sale' },
          ],
        },
      ],
    },
    { label: 'Collections', href: '/collections' },
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'Technology', href: '/technology' },
    { label: 'Journal', href: '/journal' },
    { label: 'About', href: '/about' },
  ],
  account: [
    { label: 'Dashboard', href: '/account' },
    { label: 'Orders', href: '/account/orders' },
    { label: 'Wishlist', href: '/account/wishlist' },
    { label: 'Profile', href: '/account/profile' },
    { label: 'Addresses', href: '/account/addresses' },
    { label: 'Payments', href: '/account/payments' },
  ],
  footer: {
    products: {
      title: 'Products',
      links: [
        { label: 'All Products', href: '/shop' },
        { label: 'Puffers', href: '/shop/puffers' },
        { label: 'Boots', href: '/shop/boots' },
        { label: 'Gear', href: '/shop/gear' },
        { label: 'New Arrivals', href: '/new-arrivals' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Technology', href: '/technology' },
        { label: 'Materials', href: '/materials' },
        { label: 'Journal', href: '/journal' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { label: 'FAQs', href: '/faqs' },
        { label: 'Contact', href: '/contact' },
        { label: 'Shipping', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'Track Order', href: '/track-order' },
        { label: 'Size Guide', href: '/support' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/privacy' },
      ],
    },
  },
} as const;

export const FILTER_OPTIONS = {
  sortBy: [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ],
  priceRange: {
    min: 0,
    max: 5000,
    step: 50,
  },
  materials: [
    'Graphene',
    'Goose Down',
    'Nylon Ripstop',
    'Carbon Fiber',
    'Merino Wool',
    'Vibram Rubber',
    'Aerogel',
    'Polartec',
  ],
  temperature: [
    '-40°C and below',
    '-30°C to -20°C',
    '-20°C to -10°C',
    '-10°C to 0°C',
    '0°C to 10°C',
  ],
  weather: [
    'Extreme Cold',
    'Blizzard',
    'Rain',
    'Snow',
    'Wind',
    'Mixed',
  ],
} as const;