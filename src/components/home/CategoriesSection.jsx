import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Wine, Cookie, Sparkles, Wrench } from 'lucide-react';

const FLOWER_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/aac55d1a6_flower.jpg";
const FLOWER2_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/b86cd6422_flower2.jpg";
const DRINKS_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/cd1d1ce9a_Drinks_on_smoky_background_202605031815.jpeg";
const EDIBLES_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/4470748cb_edibles.jpg";
const CONCENTRATE_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/cd83be047_concentrate.jpg";
const GRINDER_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/4eb149aeb_Smokey_black_background_202605041646.jpeg";
const GLASS_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/a50809387_glass.JPG";

const categories = [
  { name: 'Flower', id: 'flower', desc: 'Hand-selected premium strains', icon: Leaf, image: FLOWER_IMG },
  { name: 'Concentrates', id: 'concentrates', desc: 'Potent extracts & dabs', icon: Droplets, image: CONCENTRATE_IMG },
  { name: 'Glass', id: 'glass', desc: 'Artisan pipes & rigs', icon: Sparkles, image: GLASS_IMG },
  { name: 'THC Drinks', id: 'drinks', desc: 'Infused seltzers & beverages', icon: Wine, image: DRINKS_IMG },
  { name: 'Edibles', id: 'edibles', desc: 'Gummies, baked goods & more', icon: Cookie, image: EDIBLES_IMG },
  { name: 'Accessories', id: 'accessories', desc: 'Rolling, storage & essentials', icon: Wrench, image: GRINDER_IMG },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">What We Carry</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide">Featured Categories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/products?category=${cat.id}`}
                  className="group block glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                >
                  {cat.image ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                      />
                    </div>
                  ) : (
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                      <Icon className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-medium tracking-wide">{cat.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}