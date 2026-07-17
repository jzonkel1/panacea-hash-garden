import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LOGO_URL = `${import.meta.env.BASE_URL}b44/8c30f1a7c.png`;
const PLANT_IMG = `${import.meta.env.BASE_URL}b44/5f37035d2.jpg`;

const lines = [
  { text: 'Premium Botanicals.', accent: false },
  { text: 'Artful Culture.', accent: true },
  { text: 'Corpus Christi.', accent: false },
];

// Floating particle canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      opacity: Math.random() * 0.35 + 0.05,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: -(Math.random() * 0.22 + 0.08),
      wobble: Math.random() * Math.PI * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.wobble += 0.012;
        p.x += p.speedX + Math.sin(p.wobble) * 0.12;
        p.y += p.speedY;
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(154, 194, 33, ${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}

export default function HeroSection() {
  return (
    <section className="relative h-[82vh] md:h-screen flex flex-col overflow-hidden">

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src={PLANT_IMG}
          alt=""
          className="w-full h-full object-cover object-right"
        />
        {/* Darken overall so text pops */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Strong fade on left so text area is very dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        {/* Fade top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Smoky green bloom — left-center */}
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[5]"
        style={{ background: 'radial-gradient(circle, rgba(80,140,20,0.13) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none glow-pulse z-[5]"
        style={{ background: 'radial-gradient(circle, rgba(154,194,33,0.07) 0%, transparent 60%)' }}
      />

      {/* Floating particles */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-20 flex-1 w-full max-w-6xl mx-auto px-8 md:px-14 pt-20 md:pt-32 pb-4 flex flex-col items-center md:items-start text-center md:text-left">

        {/* Logo */}
        <motion.div
          className="mb-4 md:mb-7"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img src={LOGO_URL} alt="PANACEA" className="h-20 md:h-24 w-auto" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="text-primary text-[10px] md:text-xs tracking-[0.45em] uppercase mb-4 md:mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Corpus Christi · Est. Botanical Apothecary
        </motion.p>

        {/* Headline */}
        <h1 className="font-display mb-4 md:mb-8" style={{ lineHeight: 1.08 }}>
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className={`block text-4xl md:text-7xl lg:text-[82px] font-medium tracking-tight ${
                line.accent ? 'text-primary' : 'text-[#e8e8df]'
              }`}
              style={{ textShadow: line.accent ? '0 0 60px rgba(154,194,33,0.35)' : '0 2px 40px rgba(0,0,0,0.8)' }}
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
          className="text-[#9a9a8e] text-sm md:text-lg leading-relaxed max-w-md mb-6 md:mb-12 font-light mx-auto md:mx-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
        >
          Browse our curated catalog, check live in-store pricing, and step into South Texas's most thoughtful smoke shop.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
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
            to="/merch"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/12 bg-white/4 text-[#c8c8c0] text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/7 hover:text-white"
          >
            Browse Our Merch
          </Link>
        </motion.div>

      </div>

      {/* Disclaimer pinned to bottom */}
      <motion.p
        className="relative z-20 text-center text-[#555550] text-[9px] md:text-[10px] tracking-[0.12em] md:tracking-[0.35em] uppercase px-4 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        21+ Only · In-Store Only · Corpus Christi, TX
      </motion.p>
    </section>
  );
}