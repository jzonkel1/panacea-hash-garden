import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";

const lines = [
  { text: 'Premium Botanicals.', accent: false },
  { text: 'Artful Culture.', accent: true },
  { text: 'Corpus Christi.', accent: false },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Atmospheric green glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(80,140,20,0.14) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(154,194,33,0.08) 0%, transparent 60%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(60,110,10,0.07) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-14 py-32 md:py-40">

        {/* Logo */}
        <motion.div
          className="mb-7"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img src={LOGO_URL} alt="PANACEA" className="h-14 md:h-16 w-auto" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="text-primary text-[10px] md:text-xs tracking-[0.45em] uppercase mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Corpus Christi · Est. Botanical Apothecary
        </motion.p>

        {/* Headline */}
        <h1 className="font-display mb-8" style={{ lineHeight: 1.08 }}>
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className={`block text-5xl md:text-7xl lg:text-[82px] font-medium tracking-tight ${
                line.accent ? 'text-primary' : 'text-[#e8e8df]'
              }`}
              style={{ textShadow: line.accent ? '0 0 60px rgba(154,194,33,0.3)' : '0 2px 30px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.45 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        {/* Body */}
        <motion.p
          className="text-[#9a9a8e] text-base md:text-lg leading-relaxed max-w-md mb-12 font-light"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
        >
          Browse our curated catalog, check live in-store pricing, and step into South Texas's most thoughtful smoke shop.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:bg-primary/85 hover:shadow-xl hover:shadow-primary/25 group"
          >
            Browse Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/12 bg-white/4 text-[#c8c8c0] text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/7 hover:text-white"
          >
            See Events
          </Link>
        </motion.div>

        {/* Footer disclaimer */}
        <motion.p
          className="mt-14 text-[#555550] text-[10px] tracking-[0.35em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          21+ Only · In-Store Only · Corpus Christi, TX
        </motion.p>
      </div>
    </section>
  );
}