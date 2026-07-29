import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FlaskConical, BadgeCheck, X, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';

const B = import.meta.env.BASE_URL;

// Real certificates of analysis, one per source lab for variety.
const COAS = [
  { img: `${B}coa/coa1.jpg`, strain: 'THCV Live Rosin', lab: 'Bluebonnet Labs' },
  { img: `${B}coa/coa2.jpg`, strain: 'Afghan Habibi Hashish', lab: 'Pinnacle Analytics' },
  { img: `${B}coa/coa3.jpg`, strain: 'Guava Kush', lab: 'Marin Analytics' },
  { img: `${B}coa/coa4.jpg`, strain: 'Candy Kush', lab: 'FESA Labs' },
  { img: `${B}coa/coa5.jpg`, strain: 'Chimera', lab: 'pH Solutions' },
  { img: `${B}coa/coa6.jpg`, strain: 'Biscotti Sherbet', lab: 'pH Solutions' },
];

const chips = [
  { icon: FlaskConical, label: 'Third-party lab-tested' },
  { icon: BadgeCheck, label: 'COAs on file' },
  { icon: ShieldCheck, label: '21+ · Texas-compliant' },
];

export default function LabVerifiedSection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % COAS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + COAS.length) % COAS.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, next, prev]);

  const openAt = (i) => { setIndex(i); setOpen(true); };
  const current = COAS[index];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-primary/8 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <Eyebrow className="mb-3">Nothing to Hide</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-6 leading-tight">
              Lab-Tested.<br /><span className="text-primary">Verified. Ours.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-5">
              Much of what we carry is grown and crafted in-house — and it's backed by real numbers. Every product is
              third-party lab-tested, and we keep the certificates of analysis on file so you always know exactly what
              you're getting.
            </p>
            <p className="text-muted-foreground/80 leading-relaxed mb-8">
              Cannabinoid content, purity, and compliance — verified by independent labs across the country. Here's a look
              at a few from our shelves.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {chips.map((c) => {
                const Icon = c.icon;
                return (
                  <span key={c.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-foreground/80">
                    <Icon className="w-4 h-4 text-primary" />
                    {c.label}
                  </span>
                );
              })}
            </div>

          </motion.div>

          {/* Certificates — full grid on desktop, single + carousel on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Desktop: all six */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {COAS.map((coa, i) => (
                <button
                  key={i}
                  onClick={() => openAt(i)}
                  className="group relative rounded-xl overflow-hidden glass-card glass-card-hover aspect-[3/4] transition-all duration-500 hover:-translate-y-1"
                  aria-label={`View COA: ${coa.strain}`}
                >
                  <img src={coa.img} alt={`${coa.strain} certificate of analysis`} loading="lazy" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 pt-6">
                    <p className="text-[11px] font-medium text-white leading-tight truncate">{coa.strain}</p>
                    <p className="text-[9px] text-white/60 truncate">{coa.lab}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile: one certificate with inline carousel */}
            <div className="lg:hidden max-w-[15rem] mx-auto">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.button
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => openAt(index)}
                    className="group relative block w-full rounded-xl overflow-hidden glass-card aspect-[3/4]"
                    aria-label={`Enlarge certificate: ${current.strain}`}
                  >
                    <img src={current.img} alt={`${current.strain} certificate of analysis`} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-8">
                      <p className="text-xs font-medium text-white leading-tight truncate">{current.strain}</p>
                      <p className="text-[10px] text-white/60 truncate">{current.lab}</p>
                    </div>
                    <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white/90">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </motion.button>
                </AnimatePresence>

                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition-colors" aria-label="Previous certificate">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition-colors" aria-label="Next certificate">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 mt-4">
                {COAS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-primary' : 'w-1.5 bg-white/25 hover:bg-white/45'}`}
                    aria-label={`Certificate ${i + 1}`}
                  />
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground/70 mt-3">
                Tap to enlarge · {index + 1} / {COAS.length}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox carousel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative flex items-center justify-center gap-3 md:gap-6 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={prev} className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Previous">
                <ChevronLeft className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col items-center min-w-0"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-[74vh]">
                    <img src={current.img} alt={`${current.strain} — ${current.lab} certificate of analysis`} className="w-auto max-w-full max-h-[74vh] object-contain" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-white font-medium tracking-wide">{current.strain}</p>
                    <p className="text-white/60 text-sm">{current.lab} · Certificate of Analysis</p>
                    <a href={current.img} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary text-xs mt-2 hover:underline">
                      Open full size <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button onClick={next} className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Next">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-6" onClick={(e) => e.stopPropagation()}>
              {COAS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to certificate ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-white/40 text-xs mt-3">{index + 1} / {COAS.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
