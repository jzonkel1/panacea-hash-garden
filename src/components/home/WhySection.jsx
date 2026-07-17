import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Users, ShieldCheck, PartyPopper, Palette, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '@/components/Eyebrow';

const B = import.meta.env.BASE_URL;
const GROW_IMG = `${B}b44/1701a1c93.jpg`;

const reasons = [
  {
    icon: Sprout,
    title: 'Grown & Curated In-House',
    body: "We know where everything on our shelves comes from — cultivated and curated with intention, never pulled from an anonymous catalog. If we carry it, we stand behind it.",
  },
  {
    icon: Users,
    title: 'Real, No-Pressure Guidance',
    body: "Our team lives the culture and walks you through every option, whether it's your first visit or your fiftieth. No upsell, no rush.",
  },
  {
    icon: ShieldCheck,
    title: '21+, Lab-Tested & Compliant',
    body: 'Every hemp-derived product is kept squarely within Texas law and third-party lab-tested. Certificates of analysis are always on hand — just ask.',
  },
  {
    icon: PartyPopper,
    title: 'A Backyard, Not a Counter',
    body: 'Comedy nights, live music, and vendor markets — PANACEA is where Corpus comes to gather, not just to grab and go.',
  },
  {
    icon: Palette,
    title: 'Local Art on the Walls',
    body: 'Original work from Corpus Christi artists hangs throughout the shop and rotates through the year.',
  },
  {
    icon: MapPin,
    title: 'Rooted in Corpus Christi',
    body: 'Independent, owner-run, and built for this city — right here on Everhart Rd.',
  },
];

export default function WhySection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[400px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[0.85fr_1fr] gap-14 lg:gap-20 items-start">

        {/* Intro + photo */}
        <div className="text-center lg:text-left lg:sticky lg:top-28">
          <Eyebrow className="mb-4">What Sets Us Apart</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-wide mb-5">Why PANACEA</h2>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-md mx-auto lg:mx-0 mb-8">
            We're not a gas-station counter and we're not a chain. We're a locally owned garden — grown,
            curated, and run by people who actually care how you're treated.
          </p>
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0"
          >
            <img src={GROW_IMG} alt="Inside the PANACEA garden" className="w-full h-64 lg:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-4 inset-x-0 lg:inset-x-auto lg:left-5 text-center lg:text-left text-[11px] tracking-[0.28em] uppercase text-white/80">
              Grown on-site · Corpus Christi
            </figcaption>
          </motion.figure>
        </div>

        {/* Differentiators — editorial list, no cards */}
        <div className="border-t border-white/10">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/10 py-7 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 md:gap-5"
              >
                <Icon className="w-5 h-5 text-primary shrink-0 md:mt-1.5" />
                <div className="md:flex-1">
                  <h3 className="font-display text-xl tracking-wide mb-1.5">{r.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                    {r.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
          <div className="pt-6 text-center md:text-left">
            <Link to="/about" className="text-primary text-sm font-medium tracking-wide hover:underline">
              Read our story →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
