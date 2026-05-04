import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Hats
const HAT1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/55174b4f5_hat1.jpg";
const HAT2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/254be84d6_hat2.jpg";
const CAP1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/dac9d2066_baseballcap1.jpg";
const CAP2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/f2168c53b_baseballcap2.jpg";
const CAP3 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/7ea65e7fa_cap1.jpg";
const CAP4 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/d624512db_cap2.jpg";
const HAT3 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/2f5df0879_hat1.jpg";
const HAT4 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/6ab2782e0_hat2.jpg";
const HAT5 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/495baacff_hat3.jpg";
// Hoodies
const HOODIE1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/6ed21bdb1_hoodie1.jpg";
const HOODIE2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/4d2f9be28_hoodie2.jpg";
const HOODIE3 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/d2139506f_otherhoodie1.jpg";
const HOODIE4 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/e6407b193_otherhoodie2.jpg";
// Vests
const VEST1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/250c5994f_vest1.jpg";
const VEST2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/5549df18e_vest2.jpg";
// Shirts
const SHIRT1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/576dbb420_othershirt1.jpg";
const SHIRT2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/95f5150e5_othershirt2.jpg";
const SHIRT3 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/73122d399_shirt1.jpg";
// Jackets
const JACKET1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/cc7bf6ecb_jacket1.jpg";
const JACKET2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/7570c256a_jacket2.jpg";
// Shoes & Bags
const SHOES1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/ef29a4942_shoes1.jpg";
const SHOES2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/86cc254fa_shoes2.jpg";
const OSHOES1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/041f5f629_othershoes1.jpg";
const OSHOES2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/260a78e5c_othershoes2.jpg";
const BACKPACK = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/38d15e3f4_backpack.jpg";
// Merch store photos
const MERCH1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/a54544c32_merch.jpg";
const MERCH2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/8960807d0_merch2.jpg";

const merchItems = [
  {
    name: 'PANACEA Classic Dad Hat',
    desc: 'Embroidered PANACEA logo on structured black cap with IV:XX detail.',
    images: [HAT1, HAT2],
    featured: true,
  },
  {
    name: 'Rope Snapback – Yellow',
    desc: 'Relaxed fit snapback with embroidered PANACEA logo and Texas flag detail on back.',
    images: [CAP1, CAP2],
    featured: true,
  },
  {
    name: 'Rope Snapback – Stone',
    desc: 'Clean stone-grey snapback with PANACEA embroidery and Texas flag accent.',
    images: [CAP3, CAP4],
    featured: true,
  },
  {
    name: 'Columbia Fleece Vest',
    desc: 'Premium Columbia fleece with embroidered PANACEA branding. Ultimate comfort.',
    images: [VEST1, VEST2],
    featured: true,
  },
  {
    name: 'Champion Tie-Dye Hoodie',
    desc: 'Crystal tie-dye Champion hoodie with embroidered PANACEA logo.',
    images: [HOODIE1, HOODIE2],
    featured: false,
  },
  {
    name: 'PANACEA Eco Hoodie',
    desc: 'Eco-friendly premium hoodie with PANACEA Hash Garden branding.',
    images: [HOODIE3, HOODIE4],
    featured: false,
  },
  {
    name: 'Champion Camo Jacket',
    desc: 'Champion packable jacket in camo with gold PANACEA embroidery.',
    images: [JACKET1, JACKET2],
    featured: false,
  },
  {
    name: 'PANACEA Pattern Tee',
    desc: 'All-over print tee with repeating PANACEA emblem pattern. Lightweight and clean.',
    images: [SHIRT1, SHIRT2],
    featured: false,
  },
  {
    name: 'PANACEA Gardening Crop Tee',
    desc: '"I\'d Rather Be Gardening" crop tee with PANACEA Hash Garden seal.',
    images: [SHIRT3],
    featured: false,
  },
  {
    name: 'Botanical Slip-On Shoes – Pink',
    desc: 'Custom all-over print slip-ons with PANACEA botanical mandala design.',
    images: [SHOES1, SHOES2],
    featured: false,
  },
  {
    name: 'Botanical Slip-On Shoes – Blue',
    desc: 'Bold blue PANACEA mandala slip-ons. Statement footwear.',
    images: [OSHOES1, OSHOES2],
    featured: false,
  },
  {
    name: 'PANACEA Backpack',
    desc: 'All-over logo print backpack. Carry the garden with you.',
    images: [BACKPACK],
    featured: false,
  },
  {
    name: 'Yellow Rope Cap – Beach Edition',
    desc: 'The classic PANACEA yellow rope cap as seen at the coast.',
    images: [HAT3, HAT4],
    featured: false,
  },
  {
    name: 'PANACEA Tropical Tee',
    desc: 'Vibrant full-print psychedelic botanical tee. Paired with the Hash Garden rope cap.',
    images: [HAT5],
    featured: false,
  },
];

export default function Merch() {
  return (
    <div className="pb-24 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] w-full overflow-hidden mb-16">
        <img
          src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/100671347_expand_image_borders_without_changing_202605032048.jpg"
          alt="PANACEA Merch"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-center px-6">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Wear the Brand</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4 text-white">PANACEA Merch</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
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