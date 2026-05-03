import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";
const HERO_BG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/82d5ecbae_4znYdhotWB8MRAXCvKqPiN8OQvso5_3F8xx_zzNf57EipoEHaVyD6GxK8WK_ww-8Ssux02lW6NSLyNCb7y_Kl952OcZKSnhh_kRN30EzohXwOOQIub82q5BEuYaHoLTTGsYZOl5Hj6of-JenpwmoeN-jdKSqfYxVhOukPi7aJLaRv2MLtqBr.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* Atmospheric glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[150px] glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.img
          src={LOGO_URL}
          alt="PANACEA"
          className="w-24 md:w-32 h-auto mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight mb-6 text-glow-green"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          PREMIUM BOTANICALS.<br />
          <span className="text-primary">ARTFUL CULTURE.</span><br />
          CORPUS CHRISTI.
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Browse our curated selection of premium flower, concentrates, edibles, and more. Check pricing, explore what's in stock, and visit us in-store.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 group"
          >
            Browse Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/10 text-foreground font-medium tracking-wide hover:bg-white/5 hover:border-primary/30 transition-all"
          >
            See Events
          </Link>
        </motion.div>

        <motion.p
          className="text-muted-foreground/40 text-xs mt-12 tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          21+ Only · In-Store Only · Corpus Christi, TX
        </motion.p>
      </div>
    </section>
  );
}