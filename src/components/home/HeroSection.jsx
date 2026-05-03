import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";
const HERO_BG = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/82d5ecbae_4znYdhotWB8MRAXCvKqPiN8OQvso5_3F8xx_zzNf57EipoEHaVyD6GxK8WK_ww-8Ssux02lW6NSLyNCb7y_Kl952OcZKSnhh_kRN30EzohXwOOQIub82q5BEuYaHoLTTGsYZOl5Hj6of-JenpwmoeN-jdKSqfYxVhOukPi7aJLaRv2MLtqBr.jpg";

// Animated canvas overlay
function AnimatedOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating orbs
    const orbs = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 180 + Math.random() * 220,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.2,
      hue: 144 + (Math.random() - 0.5) * 20,
      opacity: 0.03 + Math.random() * 0.04,
      phase: Math.random() * Math.PI * 2,
    }));

    // Subtle particle dots
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 1,
      y: Math.random() * 1,
      size: 0.5 + Math.random() * 1.5,
      speed: 0.00008 + Math.random() * 0.0001,
      opacity: 0.1 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.004;

      // Draw orbs
      orbs.forEach(orb => {
        orb.x += orb.dx;
        orb.y += orb.dy;
        if (orb.x < -orb.r) orb.x = W + orb.r;
        if (orb.x > W + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = H + orb.r;
        if (orb.y > H + orb.r) orb.y = -orb.r;

        const pulse = orb.opacity * (0.7 + 0.3 * Math.sin(t + orb.phase));
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, `hsla(${orb.hue}, 40%, 35%, ${pulse})`);
        grad.addColorStop(1, `hsla(${orb.hue}, 40%, 35%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles
      particles.forEach(p => {
        p.phase += p.speed * 60;
        const px = (p.x + Math.sin(p.phase * 0.7) * 0.15 + t * p.speed * 3) % 1;
        const py = (p.y + Math.cos(p.phase * 0.5) * 0.1 + t * p.speed * 1.5) % 1;
        const alpha = p.opacity * (0.5 + 0.5 * Math.sin(p.phase));
        ctx.fillStyle = `hsla(144, 35%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px * W, py * H, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

// Word-by-word reveal for headlines
const headline1 = ['PREMIUM', 'BOTANICALS.'];
const headline2 = ['ARTFUL', 'CULTURE.'];
const headline3 = ['CORPUS', 'CHRISTI.'];

function AnimatedHeadline() {
  const lines = [
    { words: headline1, className: '' },
    { words: headline2, className: 'text-primary' },
    { words: headline3, className: '' },
  ];

  return (
    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight mb-6 text-glow-green">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.words.map((word, wi) => (
            <motion.span
              key={wi}
              className={`inline-block mr-[0.3em] ${line.className}`}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: 0.3 + li * 0.25 + wi * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

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

      {/* Animated canvas overlay */}
      <AnimatedOverlay />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.img
          src={LOGO_URL}
          alt="PANACEA"
          className="w-24 md:w-32 h-auto mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <AnimatedHeadline />

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
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