import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Wine, Cookie, Sparkles, Wrench, MapPin } from 'lucide-react';

const FLOWER_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/aac55d1a6_flower.jpg";
const FLOWER2_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/b86cd6422_flower2.jpg";
const DRINKS_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/f618baabe_drinks.jpg";
const EDIBLES_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/4470748cb_edibles.jpg";
const EDIBLES2_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/62fa17251_edibles2.jpg";
const CONCENTRATE_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/cd83be047_concentrate.jpg";
const GRINDER_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/9cf7bd589_grinder.jpg";
const GLASS_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/a50809387_glass.JPG";

const categories = [
  { id: 'all', label: 'All Products', icon: Sparkles },
  { id: 'flower', label: 'Flower', icon: Leaf },
  { id: 'concentrates', label: 'Concentrates', icon: Droplets },
  { id: 'glass', label: 'Glass', icon: Sparkles },
  { id: 'drinks', label: 'THC Drinks', icon: Wine },
  { id: 'edibles', label: 'Edibles', icon: Cookie },
  { id: 'accessories', label: 'Accessories', icon: Wrench },
];

const products = [
  { name: 'Premium Indoor Flower', category: 'flower', price: '$12 – $60', desc: 'Hand-trimmed, locally grown premium strains. Multiple options available in-store.', image: FLOWER_IMG, badge: 'Popular' },
  { name: 'Exotic Strains', category: 'flower', price: '$15 – $75', desc: 'Rare and exotic cultivars rotated regularly. Ask our staff about current availability.', image: FLOWER2_IMG, badge: 'Limited' },
  { name: 'Live Resin Concentrates', category: 'concentrates', price: '$25 – $65', desc: 'Full-spectrum live resin for the ultimate terpene experience.', image: CONCENTRATE_IMG },
  { name: 'Wax & Shatter', category: 'concentrates', price: '$20 – $55', desc: 'Premium concentrates in various consistencies. Visit for full selection.', image: null },
  { name: 'THC Seltzers', category: 'drinks', price: '$6 – $12', desc: 'Brio Pop, Sherpa, Knotty Times and more. Cold and ready to drink.', image: DRINKS_IMG, badge: 'New' },
  { name: 'Infused Lemonades', category: 'drinks', price: '$8 – $15', desc: 'Smooth, flavorful THC-infused beverages. Perfect for any occasion.', image: null },
  { name: 'Highly Delicious Baked Goods', category: 'edibles', price: '$8 – $25', desc: 'Fresh baked cookies, brownies, and more from Highly Delicious.', image: EDIBLES_IMG },
  { name: 'Gummies & Chocolates', category: 'edibles', price: '$10 – $35', desc: 'Infused gummies and chocolates in various strengths and flavors.', image: EDIBLES2_IMG },
  { name: 'Artisan Glass Pipes', category: 'glass', price: '$15 – $200+', desc: 'Handblown glass pipes, bubblers, and water pipes from local and national artists.', image: GLASS_IMG },
  { name: 'Dab Rigs', category: 'glass', price: '$35 – $300+', desc: 'Premium rigs for concentrates. From starter sets to collector pieces.', image: null },
  { name: 'Rolling Papers & Wraps', category: 'accessories', price: '$2 – $15', desc: 'RAW, Elements, hemp wraps, and more. All the essentials.', image: null },
  { name: 'Storage & Accessories', category: 'accessories', price: '$5 – $50', desc: 'Grinders, stash jars, trays, lighters, and everything you need.', image: GRINDER_IMG },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Header */}
      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">In-Store Selection</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4">Our Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse our curated inventory below. All pricing is approximate—visit us in-store for the full selection and current availability.
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'glass-card hover:bg-white/5 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                {product.image ? (
                  <div className="h-52 overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90" />
                    {product.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium tracking-wide">
                        {product.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="h-52 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center relative">
                    <Sparkles className="w-12 h-12 text-primary/15" />
                    {product.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium tracking-wide">
                        {product.badge}
                      </span>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium tracking-wide">{product.name}</h3>
                  </div>
                  <p className="text-primary font-display text-xl font-semibold mb-3">{product.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                    <MapPin className="w-3 h-3" />
                    <span>Available in-store</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-10">
          <h3 className="font-display text-2xl font-semibold mb-3 tracking-wide">Want to See More?</h3>
          <p className="text-muted-foreground mb-6">Visit us in-store for our full inventory, daily specials, and staff recommendations.</p>
          <a
            href="https://maps.google.com/?q=4914+Everhart+Rd+Corpus+Christi+TX+78411"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all"
          >
            <MapPin className="w-4 h-4" />
            Visit PANACEA
          </a>
        </div>
      </div>
    </div>
  );
}