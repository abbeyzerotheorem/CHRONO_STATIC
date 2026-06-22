import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Thermometer, Wind, Shield, Eye, Maximize2, Heart, ShoppingCart, Star, Clock, Ruler, Droplets, Snowflake } from 'lucide-react';
import { PRODUCTS } from '../constants/products';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { Rating } from '../components/ui/Rating';
import { Price } from '../components/ui/Price';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { cn } from '../lib/utils';

const weatherIcons: Record<string, React.ReactNode> = {
  'Extreme Cold': <Snowflake className="w-4 h-4" />,
  'Blizzard': <Wind className="w-4 h-4" />,
  'Snow': <Droplets className="w-4 h-4" />,
  'Wind': <Wind className="w-4 h-4" />,
  'Mixed': <Thermometer className="w-4 h-4" />,
  'Cold': <Thermometer className="w-4 h-4" />,
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [is3dViewerOpen, setIs3dViewerOpen] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

  if (!product) {
    return (
      <PageTransition>
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-white">Product Not Found</h1>
            <p className="text-slate-400 mt-2 mb-6">This tactical asset is not in our database.</p>
            <Link to="/shop">
              <Button variant="primary">Return to Catalog</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Resolve images based on selected colorway
  const getActiveImages = () => {
    const colorImg = product.colorImages?.[selectedColor];
    if (colorImg && product.gallery) {
      // If we have a color-specific image, use it as primary
      const rest = product.gallery.filter((img) => img !== colorImg);
      return [colorImg, ...rest];
    }
    return product.gallery?.length ? product.gallery : [product.image];
  };
  const images = getActiveImages();
  const wishlisted = isInWishlist(product.id);

  const colorMap: Record<string, string> = {
    Silver: 'bg-slate-300',
    White: 'bg-white border border-slate-600',
    Black: 'bg-slate-950 border border-slate-700',
    Blue: 'bg-blue-400',
    Navy: 'bg-slate-800',
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Shop', href: '/shop' },
              { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/shop/${product.category}` },
              { label: product.name },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ── Cinematic Gallery ── */}
            <div className="space-y-4">
              {/* Main Image with Zoom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/5 group cursor-crosshair"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
              >
                <img
                  src={images[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Cinematic overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Badge overlay */}
                {product.badge && (
                  <div className="absolute top-6 left-6 z-10">
                    <Badge variant="primary" size="md" dot>
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* 3D Viewer Button */}
                <button
                  onClick={() => setIs3dViewerOpen(!is3dViewerOpen)}
                  className="absolute top-6 right-6 z-10 p-3 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-sky-500/20 hover:border-sky-500/30 transition-all group"
                >
                  <Eye className="w-5 h-5" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-mono whitespace-nowrap bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    360° VIEW
                  </span>
                </button>

                {/* Zoom indicator */}
                <div className="absolute bottom-6 right-6 z-10 p-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>

              {/* 3D Viewer Placeholder */}
              {is3dViewerOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-sky-500/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-sky-400" />
                      </div>
                      <p className="text-sm font-mono font-bold text-sky-400 uppercase tracking-wider">3D VIEWER</p>
                      <p className="text-xs text-slate-500 mt-2">Rotate, pan, and inspect in full 360°</p>
                      {/* Simulated 3D rotation dots */}
                      <div className="flex gap-2 mt-4 justify-center">
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                          <div
                            key={deg}
                            className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center"
                            style={{ transform: `rotate(${deg}deg)` }}
                          >
                            <div className="w-1 h-3 bg-sky-400 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Animated scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent animate-scan" />
                </motion.div>
              )}

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={cn(
                      'relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0',
                      i === activeImageIndex ? 'border-sky-500' : 'border-slate-800 hover:border-slate-600'
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Product Info ── */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {/* Classification Header */}
                <div className="flex items-center gap-2 text-mono-xs text-sky-400">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
                  <span className="font-bold tracking-[0.2em] uppercase">
                    CLASSIFIED // {product.category.toUpperCase()} // {product.id.toUpperCase()}
                  </span>
                </div>

                <h1 className="text-display text-white">{product.name}</h1>

                <div className="flex items-center gap-4">
                  <Rating rating={product.rating} showValue reviewCount={product.reviewsCount} />
                  <span className="text-slate-600">|</span>
                  <span className="text-xs font-mono text-slate-400">{product.reviewsCount} verified field reports</span>
                </div>

                <Price price={product.price} originalPrice={product.originalPrice} size="lg" />
              </motion.div>

              {/* ── Weather & Temperature Suitability ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                {product.temperature && (
                  <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/10">
                    <div className="flex items-center gap-2 text-sky-400 mb-1">
                      <Thermometer className="w-4 h-4" />
                      <span className="text-mono-xs font-bold uppercase">Temperature Rating</span>
                    </div>
                    <p className="text-lg font-display font-bold text-white">{product.temperature}</p>
                  </div>
                )}
                {product.weather && (
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <Wind className="w-4 h-4" />
                      <span className="text-mono-xs font-bold uppercase">Weather Condition</span>
                    </div>
                    <p className="text-lg font-display font-bold text-white flex items-center gap-2">
                      {weatherIcons[product.weather]}
                      {product.weather}
                    </p>
                  </div>
                )}
                {product.material && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <div className="flex items-center gap-2 text-emerald-400 mb-1">
                      <Shield className="w-4 h-4" />
                      <span className="text-mono-xs font-bold uppercase">Core Material</span>
                    </div>
                    <p className="text-lg font-display font-bold text-white">{product.material}</p>
                  </div>
                )}
                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-mono-xs font-bold uppercase">Stock Status</span>
                  </div>
                  <p className="text-lg font-display font-bold text-white">
                    {product.stock > 20 ? (
                      <span className="text-emerald-400">In Stock ({product.stock})</span>
                    ) : product.stock > 0 ? (
                      <span className="text-amber-400">Low Stock ({product.stock})</span>
                    ) : (
                      <span className="text-red-400">Out of Stock</span>
                    )}
                  </p>
                </div>
              </motion.div>

              {/* ── Description ── */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-body text-slate-400 leading-relaxed"
              >
                {product.description}
              </motion.p>

              {/* ── Color & Size Selectors ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                {/* Color Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-mono-sm text-sky-400 font-bold uppercase tracking-wider">
                      // Colorway: <span className="text-white">{selectedColor}</span>
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          'w-10 h-10 rounded-full border-2 transition-all',
                          colorMap[color] || 'bg-slate-400',
                          selectedColor === color ? 'border-sky-500 scale-110 shadow-lg shadow-sky-500/20' : 'border-slate-700 hover:border-slate-500'
                        )}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-mono-sm text-sky-400 font-bold uppercase tracking-wider">
                      // Select Size
                    </span>
                    <button className="text-[10px] font-mono text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1">
                      <Ruler className="w-3 h-3" /> Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          'min-w-[48px] px-4 py-2.5 text-sm font-mono font-bold rounded-lg border transition-all',
                          selectedSize === size
                            ? 'bg-sky-500 text-black border-sky-500'
                            : 'bg-black/40 text-slate-300 border-slate-700 hover:border-sky-500/30 hover:text-white'
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── Quantity & Add to Cart ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-700 rounded-xl">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 transition-all rounded-l-xl"
                    >
                      -
                    </button>
                    <span className="px-6 py-3 text-sm font-mono font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 transition-all rounded-r-xl"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => toggleItem(product)}
                    className={cn(
                      'p-3 rounded-xl border transition-all',
                      wishlisted
                        ? 'bg-red-500/10 border-red-500/20 text-red-400'
                        : 'bg-black/40 border-slate-700 text-slate-400 hover:text-white hover:border-sky-500/30'
                    )}
                  >
                    <Heart className={cn('w-5 h-5', wishlisted && 'fill-red-400')} />
                  </button>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="xl"
                    fullWidth
                    icon={<ShoppingCart className="w-5 h-5" />}
                    onClick={() => {
                      for (let i = 0; i < quantity; i++) {
                        addItem(product, selectedSize, selectedColor);
                      }
                    }}
                  >
                    Add to Cart — ${(product.price * quantity).toFixed(2)}
                  </Button>
                </div>
              </motion.div>

              {/* ── Specifications Accordion ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="border-t border-white/5 pt-6"
              >
                <Accordion
                  items={[
                    {
                      id: 'specs',
                      title: 'Technical Specifications',
                      content: (
                        <ul className="space-y-2">
                          {product.specifications.map((spec, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 flex-shrink-0" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      ),
                    },
                    {
                      id: 'technology',
                      title: 'Fabric Technology',
                      content: (
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500/5 to-transparent border border-sky-500/10">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                                <Thermometer className="w-4 h-4 text-sky-400" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-white">Graphene Thermal Core</p>
                                <p className="text-xs text-slate-400">Active heat regulation with graphene-infused fibers</p>
                              </div>
                            </div>
                            {/* Visualized layers */}
                            <div className="flex gap-1 mt-3">
                              {[40, 60, 80, 60, 40].map((h, i) => (
                                <div
                                  key={i}
                                  className="flex-1 bg-gradient-to-t from-sky-500/20 to-sky-400/30 rounded-sm"
                                  style={{ height: `${h}px` }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/10">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <Droplets className="w-4 h-4 text-blue-400" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-white">DWR Hydrophobic Shield</p>
                                <p className="text-xs text-slate-400">20,000mm water column pressure rating</p>
                              </div>
                            </div>
                            {/* Water beading visualization */}
                            <div className="flex gap-2 mt-3">
                              {[1, 2, 3, 2, 1].map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded-full bg-blue-400/30 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                              ))}
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: 'materials',
                      title: 'Materials & Construction',
                      content: (
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'Shell', value: product.material || 'Technical Nylon' },
                            { label: 'Insulation', value: 'Premium Goose Down 900FP' },
                            { label: 'Lining', value: 'Graphene Thermal Fleece' },
                            { label: 'Waterproof', value: 'DWR 20,000mm' },
                            { label: 'Windproof', value: 'Full Barrier' },
                            { label: 'Weight', value: '1.2 kg (size M)' },
                          ].map((mat) => (
                            <div key={mat.label} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                              <p className="text-mono-xs text-sky-400 font-bold uppercase">{mat.label}</p>
                              <p className="text-sm text-white mt-1 font-medium">{mat.value}</p>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                    {
                      id: 'shipping',
                      title: 'Shipping & Returns',
                      content: (
                        <div className="space-y-3 text-sm text-slate-400">
                          <p>• Free Arctic Priority shipping on orders over $500</p>
                          <p>• Standard delivery: 3-5 business days</p>
                          <p>• 5-year tactical warranty included</p>
                          <p>• 30-day no-questions-asked return policy</p>
                          <p>• All shipments are tracked and insured</p>
                        </div>
                      ),
                    },
                  ]}
                  allowMultiple
                  defaultExpanded={['specs']}
                />
              </motion.div>
            </div>
          </div>

          {/* ── Scroll-Driven Storytelling Section ── */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 py-24 border-t border-white/5"
          >
            <div className="text-center mb-16">
              <span className="text-mono-xs text-sky-400 font-bold">// FIELD NOTES</span>
              <h2 className="text-display text-white mt-2">Engineered for the Mission</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  phase: '01',
                  title: 'Concept & Design',
                  desc: 'Every piece begins in our Svalbard design lab, where engineers analyze extreme weather patterns and movement data from professional alpine guides.',
                  stat: '2,000+ hrs',
                  statLabel: 'R&D per product',
                },
                {
                  phase: '02',
                  title: 'Material Selection',
                  desc: 'Only materials that pass our 72-hour extreme environment stress test make it into production. Graphene, aerogel, and military-grade nylon are our standards.',
                  stat: '-60°C',
                  statLabel: 'Test chamber temp',
                },
                {
                  phase: '03',
                  title: 'Field Validation',
                  desc: 'Prototypes are deployed with our network of 50+ professional field testers across 12 countries. Products that fail in the field never see production.',
                  stat: '12 mo.',
                  statLabel: 'Average test cycle',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <span className="text-6xl font-display font-black text-white/5 absolute top-4 right-4">
                    {item.phase}
                  </span>
                  <div className="relative z-10">
                    <p className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase mb-3">
                      PHASE {item.phase}
                    </p>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <p className="text-2xl font-display font-bold text-sky-400">{item.stat}</p>
                      <p className="text-xs font-mono text-slate-500 mt-1">{item.statLabel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}