import React from 'react';
import { Star, CalendarDays, FlaskConical, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: Star, label: '4.9 Stars on Google', sub: 'Top-rated in Corpus Christi' },
  { icon: CalendarDays, label: 'Monthly Events', sub: 'Comedy, music & more' },
  { icon: FlaskConical, label: 'Lab Tested Products', sub: 'Quality you can trust' },
  { icon: MapPin, label: 'Locally Owned', sub: 'Corpus Christi, TX' },
];

export default function TrustBar() {
  return (
    <div className="relative z-10 bg-black/60 border-y border-white/6 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="flex items-center gap-3 px-4 md:px-6"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground leading-tight">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}