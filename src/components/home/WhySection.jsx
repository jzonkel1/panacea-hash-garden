import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Eye, Heart, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Knowledgeable Staff',
    desc: 'Our team is trained to guide you through every product, strain, and experience with care and expertise.',
  },
  {
    icon: Award,
    title: 'In-House Craftsmanship',
    desc: 'From cultivation insights to curated selections, we bring artisan-level attention to everything we stock.',
  },
  {
    icon: Eye,
    title: 'Carefully Selected Quality',
    desc: 'Every product on our shelves passes through rigorous selection—only the best makes it to PANACEA.',
  },
  {
    icon: Sparkles,
    title: 'Premium Experience',
    desc: 'More than a shop—it\'s a botanical experience designed to elevate your senses and standards.',
  },
  {
    icon: Heart,
    title: 'Community-Driven Culture',
    desc: 'We host events, support local artists, and build a space where culture and community thrive together.',
  },
];

export default function WhySection() {
  return (
    <section className="py-24 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-primary/6 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">The PANACEA Difference</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide">Why PANACEA</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-3 tracking-wide">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}

          {/* Iguana mascot card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reasons.length * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 flex flex-col"
          >
            <div className="w-full rounded-xl overflow-hidden mb-5" style={{ height: '140px' }}>
              <img
                src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/e480f5c04_iguana.jpg"
                alt="PANACEA's Iguana Mascot"
                className="w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <h3 className="text-lg font-medium mb-3 tracking-wide">We Have an Iguana! 🦎</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Our unofficial mascot calls PANACEA home. Name TBD — come meet them in-store.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}