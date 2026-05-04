import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Eye, Award, FlaskConical, Cookie, Wheat } from 'lucide-react';

const FAVICON = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/dc844a0e3_favicon.png";
const RENE_PROFILE = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/87572b903_615485162_10232513471604544_3351147333408530313_n.jpg";

const LOGO_URL = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/39d8c112f_logo.png";
const FLOWER_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/c7cf5b37c_flower2.jpg";
const OWNER_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/414ba8ad0_owner.jpg";
const GROW1_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/1701a1c93_grow1.jpg";
const FARMS_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/2a962baf2_farms.jpg";
const BUD1_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/88fb6f86e_IMG_4984.jpg";
const BUD2_IMG = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/c59e846a6_IMG_4994.jpg";

const values = [
  {
    icon: Leaf,
    title: 'Rooted in the Plant',
    desc: 'Our knowledge begins at the soil. We understand cultivation, curing, and the careful process behind every quality product we carry.',
  },
  {
    icon: Eye,
    title: 'Intentional Curation',
    desc: 'Nothing hits our shelves by accident. Every product is vetted for quality, sourcing, and the experience it delivers to our customers.',
  },
  {
    icon: Award,
    title: 'Craft Over Commerce',
    desc: 'We\'re not a chain. We\'re a locally owned botanical apothecary that treats this as a craft, not just a commodity.',
  },
  {
    icon: Heart,
    title: 'Built for Community',
    desc: 'PANACEA is a gathering place—a cultural space where Corpus Christi comes to connect, celebrate, and discover.',
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Hero */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Our Story</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-6">
                About<br /><span className="text-primary">PANACEA</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                PANACEA HASH GARDEN was founded with a simple belief: that premium botanicals deserve a premium experience. Located in the heart of Corpus Christi, we've built more than a smoke shop—we've built a destination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our name draws from the ancient concept of a universal remedy. While we don't claim to heal everything, we believe in the power of quality botanicals, intentional spaces, and genuine community to make life a little better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img src={OWNER_IMG} alt="Rene Pena, Founder of PANACEA" className="rounded-2xl shadow-2xl shadow-black/50 opacity-90 w-full object-cover" />
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 text-sm">
                <p className="font-medium text-foreground">Rene Pena</p>
                <p className="text-xs text-muted-foreground">Founder, PANACEA</p>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-5">
                <img src={LOGO_URL} alt="PANACEA" className="h-12 w-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 5, rotateY: -5, z: 100 }}
            style={{ perspective: 1200 }}
            className="glass-card rounded-2xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <img src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/dc844a0e3_favicon.png" alt="PANACEA" className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-6">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              "We approach every product, every interaction, and every event with the same intention—quality over quantity, depth over flash, and people over profit. PANACEA isn't just where you shop. It's where you belong."
            </p>
            <div className="mt-6 text-primary text-sm tracking-[0.3em] uppercase font-medium">— Rene Pena, Founder</div>
          </motion.div>
        </div>
      </div>

      {/* Craft Production Section */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Grown. Made. Crafted.</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-4">We Make What We Sell</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Most shops source from a catalog. We grow our own. PANACEA controls the entire process — from seed to shelf — so you always know exactly what you're getting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: Leaf,
                title: 'Our Own Flower',
                desc: 'Every strain of flower we carry is cultivated in-house. We grow it, cure it, and bring it straight to you — no middlemen, no mystery.',
              },
              {
                icon: FlaskConical,
                title: 'In-House Concentrates',
                desc: 'Our concentrates are crafted from our own harvests. From live rosin to pressed hash, everything is made with precision and care.',
              },
              {
                icon: Cookie,
                title: 'Homemade Edibles',
                desc: 'We make our own edibles in-house with clean ingredients and exact dosing. No mass-produced mystery — just good, intentional product.',
              },
              {
                icon: Wheat,
                title: 'Local Baker Collabs',
                desc: 'When we source baked goods, we partner with local Corpus Christi bakers we trust. Community first, always.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl px-8 py-6 text-center border border-primary/15"
          >
            <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto">
              <span className="text-foreground font-medium">Transparency isn't a buzzword here — it's how we operate.</span> When you buy flower from PANACEA, it came from our farm. When you grab a concentrate, we made it. That's a level of quality control you won't find at most shops in South Texas.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founder Blog Post — Genetics */}
      <div className="px-6 mb-24">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-3 mb-8">
                 <img src={RENE_PROFILE} alt="Rene Pena" className="w-9 h-9 rounded-full object-cover" />
                 <div>
                   <p className="text-sm font-medium text-foreground">Rene Pena</p>
                   <p className="text-xs text-muted-foreground">Owner & Operator, PANACEA</p>
                   <p className="text-xs text-muted-foreground/70 mt-1">December 6, 2025</p>
                 </div>
               </div>

              <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">From the Garden</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-8 leading-snug">
                Our Approach to Cannabis Genetics
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Our work in cannabis genetics is driven by a simple but powerful goal: to create cultivars that perform exceptionally in all growing environments, while truly thriving in living soil. By focusing on varieties that are naturally vigorous, resilient, and adaptable, we aim to give cultivators genetics they can trust — whether they grow indoors, outdoors, or in greenhouses.
                </p>
                <p>
                  At the heart of our breeding program is an obsession with trichome development. Trichomes are where the plant's most valuable compounds are produced, and we select relentlessly for density, structure, and resilience of resin heads. Our genetics are designed to push trichome production to its fullest potential, supporting high cannabinoid content and superior extraction yields while maintaining the integrity and complexity of the plant's natural resin profile.
                </p>
                <p>
                  Equally important is our focus on terpene expression. We are committed to developing truly distinctive and flavorful terpene profiles that go beyond the familiar. By carefully pairing complementary lines and rigorously selecting standout phenotypes, we seek to create cultivars that deliver layered, memorable aromas and flavors — profiles that reflect both their genetic heritage and the rich microbial life of living soil. The result is a portfolio of genetics that delivers not just potency, but a complete sensory experience: deeply aromatic, flavorful, and expressive plants, grown from the ground up.
                </p>
              </div>
            </div>

            <div className="px-10 md:px-14 pb-4">
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/4aef96d96_tresleches.jpg"
                  alt="Tres Leches cultivar in December"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>

            <div className="px-10 md:px-14 py-7">
              <p className="text-sm text-muted-foreground italic">
                Tres Leches pictured above loving December! Shout out to team Panacea! 🌿
              </p>
            </div>
          </motion.article>
        </div>
      </div>

      {/* Values */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <img src={FAVICON} alt="PANACEA" className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide">Our Values</h2>
          </div>

          {/* Farm gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[GROW1_IMG, FARMS_IMG, BUD1_IMG, BUD2_IMG].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl overflow-hidden aspect-square">
                <img src={img} alt="PANACEA cultivation" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}