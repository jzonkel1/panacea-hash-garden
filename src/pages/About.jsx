import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Eye, Award, FlaskConical, Cookie, Wheat } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';

const FAVICON = `${import.meta.env.BASE_URL}b44/dc844a0e3.png`;
const RENE_PROFILE = `${import.meta.env.BASE_URL}b44/87572b903.jpg`;

const LOGO_URL = `${import.meta.env.BASE_URL}b44/39d8c112f.png`;
const FLOWER_IMG = `${import.meta.env.BASE_URL}b44/c7cf5b37c.jpg`;
const OWNER_IMG = `${import.meta.env.BASE_URL}b44/414ba8ad0.jpg`;
const GROW1_IMG = `${import.meta.env.BASE_URL}b44/1701a1c93.jpg`;
const FARMS_IMG = `${import.meta.env.BASE_URL}b44/2a962baf2.jpg`;
const BUD1_IMG = `${import.meta.env.BASE_URL}b44/88fb6f86e.jpg`;
const BUD2_IMG = `${import.meta.env.BASE_URL}b44/c59e846a6.jpg`;

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

      {/* Philosophy — pull quote */}
      <div className="px-6 mb-28">
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <img src={`${import.meta.env.BASE_URL}b44/dc844a0e3.png`} alt="PANACEA" className="w-10 h-10 mx-auto mb-8 opacity-80" />
          <blockquote className="font-display text-2xl md:text-4xl leading-snug tracking-wide text-foreground/90">
            We approach every product, every interaction, and every event with the same intention — quality over
            quantity, depth over flash, and <span className="text-primary">people over profit</span>. PANACEA isn't
            just where you shop. It's where you belong.
          </blockquote>
          <figcaption className="mt-8 text-primary text-sm tracking-[0.3em] uppercase font-medium">— Rene Pena, Founder</figcaption>
        </motion.figure>
      </div>

      {/* Craft Production Section */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow center className="mb-3">Grown. Made. Crafted.</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-4">We Make What We Sell</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Most shops pull from an anonymous catalog. We don't. PANACEA grows and crafts in-house — and everything is
              third-party lab-tested — so you always know exactly what's in your hands and where it came from.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-14 mb-16">
            {[
              {
                icon: Leaf,
                title: 'Grown In-House',
                desc: 'We cultivate our own hemp flower — grown, cured, and hand-finished. Our genetics program means we know each cultivar from the ground up.',
              },
              {
                icon: FlaskConical,
                title: 'Made In Small Batches',
                desc: 'Crafted here, in small batches, with precision and care — not mass-produced by a factory three states away.',
              },
              {
                icon: Cookie,
                title: 'Homemade Edibles',
                desc: 'House-made edibles with clean ingredients and exact, consistent dosing. No mystery — just good, intentional product.',
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t border-white/10 py-7 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 md:gap-5"
                >
                  <Icon className="w-6 h-6 text-primary shrink-0 md:mt-1" />
                  <div className="md:flex-1">
                    <h3 className="font-display text-lg font-semibold mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center border-t border-primary/20 pt-8"
          >
            <span className="text-foreground font-medium">Transparency isn't a buzzword here — it's how we operate.</span> What we grow, we grow; what we make, we make — and every product is third-party lab-tested with certificates of analysis on file. That's a level of quality control you won't find at most shops in South Texas.
          </motion.p>
        </div>
      </div>

      {/* Founder Blog Post — Genetics */}
      <div className="px-6 mb-24">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto md:glass-card md:rounded-2xl md:p-14"
        >
          {/* Byline */}
          <div className="flex items-center gap-3 pb-6 mb-8 border-b border-white/10">
            <img src={RENE_PROFILE} alt="Rene Pena" className="w-11 h-11 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium text-foreground">Rene Pena</p>
              <p className="text-xs text-muted-foreground">Owner &amp; Operator, PANACEA · December 6, 2025</p>
            </div>
          </div>

          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">From the Garden</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-8 leading-tight">
            Our Approach to Cannabis Genetics
          </h2>

          <div className="space-y-6 text-[15px] md:text-lg text-muted-foreground leading-loose">
            <p className="first-letter:float-left first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">
              Our work in cannabis genetics is driven by a simple but powerful goal: to create cultivars that perform exceptionally in all growing environments, while truly thriving in living soil. By focusing on varieties that are naturally vigorous, resilient, and adaptable, we aim to give cultivators genetics they can trust — whether they grow indoors, outdoors, or in greenhouses.
            </p>
            <p>
              At the heart of our breeding program is an obsession with trichome development. Trichomes are where the plant's most valuable compounds are produced, and we select relentlessly for density, structure, and resilience of resin heads. Our genetics are designed to push trichome production to its fullest potential, supporting high cannabinoid content and superior extraction yields while maintaining the integrity and complexity of the plant's natural resin profile.
            </p>
            <p>
              Equally important is our focus on terpene expression. We are committed to developing truly distinctive and flavorful terpene profiles that go beyond the familiar. By carefully pairing complementary lines and rigorously selecting standout phenotypes, we seek to create cultivars that deliver layered, memorable aromas and flavors — profiles that reflect both their genetic heritage and the rich microbial life of living soil. The result is a portfolio of genetics that delivers not just potency, but a complete sensory experience: deeply aromatic, flavorful, and expressive plants, grown from the ground up.
            </p>
          </div>

          <figure className="mt-10 -mx-6 md:mx-0">
            <img
              src={`${import.meta.env.BASE_URL}b44/4aef96d96.jpg`}
              alt="Tres Leches cultivar in December"
              className="w-full h-auto object-cover md:rounded-xl"
            />
            <figcaption className="text-sm text-muted-foreground italic mt-4 px-6 md:px-0 text-center md:text-left">
              Tres Leches pictured above loving December! Shout out to team Panacea! 🌿
            </figcaption>
          </figure>
        </motion.article>
      </div>

      {/* Values */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <img src={FAVICON} alt="PANACEA" className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <Eyebrow center className="mb-3">What Drives Us</Eyebrow>
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

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-14">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t border-white/10 py-8 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 md:gap-5"
                >
                  <Icon className="w-6 h-6 text-primary shrink-0 md:mt-1" />
                  <div className="md:flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2 tracking-wide">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">{value.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}