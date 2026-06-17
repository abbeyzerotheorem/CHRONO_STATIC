export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[];
  category: 'puffers' | 'boots' | 'gear' | 'accessories';
  colors: string[];
  sizes: string[];
  description: string;
  specifications: string[];
  rating: number;
  reviewsCount: number;
  badge?: string;
  details?: string;
  stock: number;
  material?: string;
  temperature?: string;
  weather?: string;
  featured?: boolean;
  new?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productIds: string[];
  featured: boolean;
  season?: string;
  year?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  dateJoined: string;
}

export interface Address {
  id: string;
  label: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'apple_pay';
  lastFour?: string;
  brand?: string;
  expMonth?: number;
  expYear?: number;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  estimatedDelivery: string;
  trackingNumber?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export interface FilterState {
  category: string;
  color: string[];
  size: string[];
  priceRange: [number, number];
  material: string[];
  temperature: string[];
  weather: string[];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';
  searchQuery: string;
  page: number;
  viewMode: 'grid' | 'list';
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
  verified: boolean;
  size?: string;
  color?: string;
  helpful: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}