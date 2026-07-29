import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FlaskConical, BadgeCheck } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';

const chips = [
  { icon: FlaskConical, label: 'Third-party lab-tested' },
  { icon: BadgeCheck, label: 'COAs available in-store' },
  { icon: ShieldCheck, label: '21+ · Adult use only' },
];

export default function LabVerifiedSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-primary/8 blur-[160px] rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow className="mb-3">Nothing to Hide</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-6 leading-tight">
            Lab-Tested.<br /><span className="text-primary">Verified. Ours.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-5">
            Everything we carry is third-party lab-tested, and we keep the certificates of analysis on file.
            Ask any of our staff in-store and we'll pull the paperwork for whatever you're looking at — no
            mystery products, no guesswork.
          </p>
          <p className="text-muted-foreground/80 leading-relaxed mb-8">
            Cannabinoid content and purity, verified by independent labs across the country.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
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
      </div>
    </section>
  );
}
