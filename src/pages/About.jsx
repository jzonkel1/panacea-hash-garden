import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Eye, Sparkles, Award } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";
const FLOWER_IMG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/b86cd6422_flower2.jpg";

const values = [
  {
    icon: Leaf,
    title: 'Rooted in the Plant',
    desc: 'Our knowledge begins at the soil. We understand cultivation, curing, and the careful process behind every quality product we carry.',
  },
  {
    icon: Eye,
    title: 'Intentional Curation',
    desc: 'Nothing hits our shelves by accident. Every product is vetted for quality, sourcing, and the experience it delivers to our customers.',
  },
  {
    icon: Award,
    title: 'Craft Over Commerce',
    desc: 'We\'re not a chain. We\'re a locally owned botanical apothecary that treats this as a craft, not just a commodity.',
  },
  {
    icon: Heart,
    title: 'Built for Community',
    desc: 'PANACEA is a gathering place—a cultural space where Corpus Christi comes to connect, celebrate, and discover.',
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Hero */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Our Story</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-6">
                About<br /><span className="text-primary">PANACEA</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                PANACEA HASH GARDEN was founded with a simple belief: that premium botanicals deserve a premium experience. Located in the heart of Corpus Christi, we've built more than a smoke shop—we've built a destination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our name draws from the ancient concept of a universal remedy. While we don't claim to heal everything, we believe in the power of quality botanicals, intentional spaces, and genuine community to make life a little better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img src={FLOWER_IMG} alt="Premium flower" className="rounded-2xl shadow-2xl shadow-black/50 opacity-80 w-full" />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-5">
                <img src={LOGO_URL} alt="PANACEA" className="h-12 w-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-6">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              "We approach every product, every interaction, and every event with the same intention—quality over quantity, depth over flash, and people over profit. PANACEA isn't just where you shop. It's where you belong."
            </p>
            <div className="mt-6 text-primary text-sm tracking-[0.3em] uppercase font-medium">— The PANACEA Team</div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}