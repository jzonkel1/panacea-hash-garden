import React from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, ShieldCheck, MapPin, Sprout, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

const B = import.meta.env.BASE_URL;
const GROW_IMG = `${B}b44/1701a1c93.jpg`;
const EVENT_IMG = `${B}b44/7b302f861.jpg`;
const ART_IMG = `${B}b44/7e5dd18d8.jpg`;

export default function WhySection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">What Sets Us Apart</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-5">Why PANACEA</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We're not a gas-station counter and we're not a chain. We're a locally owned garden — grown, curated,
            and run by people who actually care how you're treated.
          </p>
        </div>

        {/* Bento grid — mixed photo + text tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(0,1fr)]">

          {/* Grown in-house — large photo tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden min-h-[340px] group"
          >
            <img src={GROW_IMG} alt="PANACEA cultivation" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="w-11 h-11 rounded-xl bg-primary/20 backdrop-blur flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-2">Grown &amp; Curated In-House</h3>
              <p className="text-white/70 leading-relaxed max-w-md">
                We know where what we carry comes from — cultivated and curated with intention, not pulled from an anonymous
                catalog. What's on our shelves, we stand behind.
              </p>
            </div>
          </motion.div>

          {/* Knowledgeable staff — text tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 tracking-wide">Real, No-Pressure Guidance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our team lives the culture and walks you through every option — first visit or fiftieth. No upsell, no rush.
            </p>
          </motion.div>

          {/* Compliance / trust — text tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 tracking-wide">21+ · Lab-Tested · Compliant</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hemp-derived products kept in line with Texas law. Certificates of analysis available — just ask.
            </p>
          </motion.div>

          {/* Events — photo tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="relative rounded-2xl overflow-hidden min-h-[240px] group"
          >
            <img src={EVENT_IMG} alt="PANACEA backyard event" className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-7">
              <div className="w-11 h-11 rounded-xl bg-primary/20 backdrop-blur flex items-center justify-center mb-4">
                <PartyPopper className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1.5 tracking-wide">A Backyard, Not a Counter</h3>
              <p className="text-sm text-white/70 leading-relaxed">Comedy nights, live music, and vendor markets — where Corpus comes to gather.</p>
            </div>
          </motion.div>

          {/* Local art — photo tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden min-h-[240px] group"
          >
            <img src={ART_IMG} alt="Local art on display at PANACEA" className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-7">
              <div className="w-11 h-11 rounded-xl bg-primary/20 backdrop-blur flex items-center justify-center mb-4">
                <Palette className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1.5 tracking-wide">Local Art on the Walls</h3>
              <p className="text-sm text-white/70 leading-relaxed">Original work from Corpus Christi artists, rotating throughout the year.</p>
            </div>
          </motion.div>

          {/* Locally owned — text tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-wide">Rooted in Corpus Christi</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Independent and local — built for this city, on Everhart Rd.
              </p>
            </div>
            <Link to="/about" className="text-primary text-sm font-medium tracking-wide mt-4 hover:underline">Our story →</Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
