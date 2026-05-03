import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const HAT1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/55174b4f5_hat1.jpg";
const HAT2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/495baacff_hat3.jpg";
const VEST1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/250c5994f_vest1.jpg";
const CAP1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/dac9d2066_baseballcap1.jpg";

const HOODIE1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/6ed21bdb1_hoodie1.jpg";
const JACKET1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/cc7bf6ecb_jacket1.jpg";

const merchItems = [
  { name: 'Classic Dad Hat', image: HAT1 },
  { name: 'PANACEA Rope Snapback', image: CAP1 },
  { name: 'Columbia Fleece Vest', image: VEST1 },
  { name: 'Champion Tie-Dye Hoodie', image: HOODIE1 },
];

export default function MerchPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Wear the Brand</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-4">PANACEA Merch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Rep PANACEA with curated branded gear. Available online through our official merch store.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {merchItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="/merch" className="group block glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-secondary/30">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium tracking-wide">{item.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/merch"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            View All Merch
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}