import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const HAT1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/55174b4f5_hat1.jpg";
const HAT2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/254be84d6_hat2.jpg";
const CAP1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/2906c763e_baseballcap1.jpg";
const CAP2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/5a4aedb00_baseballcap2.jpg";
const VEST1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8f61aa9b0_vest1.jpg";
const VEST2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/79bcf16c0_vest2.jpg";
const SHIRT1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/5eca9c129_othershirt1.jpg";
const SHIRT2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/9c2bb03d5_othershirt2.jpg";

const merchItems = [
  {
    name: 'PANACEA Classic Dad Hat',
    desc: 'Embroidered PANACEA logo on structured black cap with IV:XX detail.',
    images: [HAT1, HAT2],
    featured: true,
  },
  {
    name: 'Rope Snapback – Yellow',
    desc: 'Relaxed fit snapback with embroidered logo and Texas flag detail on back.',
    images: [CAP1, CAP2],
    featured: true,
  },
  {
    name: 'Columbia Fleece Vest',
    desc: 'Premium Columbia fleece with embroidered PANACEA branding. Ultimate comfort.',
    images: [VEST1, VEST2],
    featured: true,
  },
  {
    name: 'PANACEA Pattern Tee',
    desc: 'All-over print tee with repeating PANACEA emblem pattern. Lightweight and clean.',
    images: [SHIRT1, SHIRT2],
    featured: false,
  },
];

export default function Merch() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Header */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Wear the Brand</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4">PANACEA Merch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Rep the garden. Our curated line of branded merch is available through our official online store.
          </p>
        </div>
      </div>

      {/* Featured Items */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {merchItems.filter(m => m.featured).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="grid grid-cols-2 h-72">
                  {item.images.map((img, j) => (
                    <div key={j} className="overflow-hidden">
                      <img src={img} alt={item.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold tracking-wide mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Non-featured */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchItems.filter(m => !m.featured).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-medium tracking-wide mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6">
        <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-10">
          <h3 className="font-display text-2xl font-semibold mb-3 tracking-wide">Shop the Full Collection</h3>
          <p className="text-muted-foreground mb-6">Visit our official merch store to browse sizes, colors, and place your order.</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Visit Merch Store
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-muted-foreground/40 text-xs mt-4">Opens in new tab · Powered by Printful</p>
        </div>
      </div>
    </div>
  );
}