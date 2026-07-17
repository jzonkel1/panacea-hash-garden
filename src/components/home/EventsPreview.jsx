import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Music, Mic, Palette } from 'lucide-react';

const AUD1 = `${import.meta.env.BASE_URL}b44/7b302f861.jpg`;
const AUD2 = `${import.meta.env.BASE_URL}b44/9ad2f2f4d.jpg`;

const eventTypes = [
  { icon: Mic, label: 'Comedy Nights' },
  { icon: Music, label: 'Live Music' },
  { icon: Palette, label: 'Art Vendors' },
  { icon: Calendar, label: 'Community Pop-ups' },
];

export default function EventsPreview() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Culture & Community</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-6">Events at PANACEA</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              PANACEA is more than a shop—it's a cultural hub. We host comedy nights, live music, art vendor markets, and community pop-ups that bring Corpus Christi together.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {eventTypes.map(et => {
                const Icon = et.icon;
                return (
                  <div key={et.label} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{et.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all group"
              >
                View Upcoming Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/events#booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-foreground font-medium tracking-wide hover:bg-white/5 transition-all"
              >
                Request Event Booking
              </Link>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img src={AUD2} alt="PANACEA events" className="w-full rounded-2xl shadow-2xl shadow-black/50 opacity-80" />
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-5 py-3">
                <p className="text-primary font-display text-2xl font-semibold">100+</p>
                <p className="text-muted-foreground text-xs">Events hosted</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}