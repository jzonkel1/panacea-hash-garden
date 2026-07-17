import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { SITE } from '@/lib/site';

// Hats
const HAT1 = `${import.meta.env.BASE_URL}b44/55174b4f5.jpg`;
const HAT2 = `${import.meta.env.BASE_URL}b44/254be84d6.jpg`;
const CAP1 = `${import.meta.env.BASE_URL}b44/dac9d2066.jpg`;
const CAP2 = `${import.meta.env.BASE_URL}b44/f2168c53b.jpg`;
const CAP3 = `${import.meta.env.BASE_URL}b44/7ea65e7fa.jpg`;
const CAP4 = `${import.meta.env.BASE_URL}b44/d624512db.jpg`;
const HAT3 = `${import.meta.env.BASE_URL}b44/2f5df0879.jpg`;
const HAT4 = `${import.meta.env.BASE_URL}b44/6ab2782e0.jpg`;
const HAT5 = `${import.meta.env.BASE_URL}b44/495baacff.jpg`;
// Hoodies
const HOODIE1 = `${import.meta.env.BASE_URL}b44/6ed21bdb1.jpg`;
const HOODIE2 = `${import.meta.env.BASE_URL}b44/4d2f9be28.jpg`;
const HOODIE3 = `${import.meta.env.BASE_URL}b44/d2139506f.jpg`;
const HOODIE4 = `${import.meta.env.BASE_URL}b44/e6407b193.jpg`;
// Vests
const VEST1 = `${import.meta.env.BASE_URL}b44/250c5994f.jpg`;
const VEST2 = `${import.meta.env.BASE_URL}b44/5549df18e.jpg`;
// Shirts
const SHIRT1 = `${import.meta.env.BASE_URL}b44/576dbb420.jpg`;
const SHIRT2 = `${import.meta.env.BASE_URL}b44/95f5150e5.jpg`;
const SHIRT3 = `${import.meta.env.BASE_URL}b44/73122d399.jpg`;
// Jackets
const JACKET1 = `${import.meta.env.BASE_URL}b44/cc7bf6ecb.jpg`;
const JACKET2 = `${import.meta.env.BASE_URL}b44/7570c256a.jpg`;
// Shoes & Bags
const SHOES1 = `${import.meta.env.BASE_URL}b44/ef29a4942.jpg`;
const SHOES2 = `${import.meta.env.BASE_URL}b44/86cc254fa.jpg`;
const OSHOES1 = `${import.meta.env.BASE_URL}b44/041f5f629.jpg`;
const OSHOES2 = `${import.meta.env.BASE_URL}b44/260a78e5c.jpg`;
const BACKPACK = `${import.meta.env.BASE_URL}b44/38d15e3f4.jpg`;
// Merch store photos
const MERCH1 = `${import.meta.env.BASE_URL}b44/a54544c32.jpg`;
const MERCH2 = `${import.meta.env.BASE_URL}b44/8960807d0.jpg`;
const MERCH3 = `${import.meta.env.BASE_URL}b44/7e5dd18d8.jpg`;
const MERCH4 = `${import.meta.env.BASE_URL}b44/64d89d53e.jpg`;

const merchItems = [
  {
    name: 'PANACEA Classic Dad Hat',
    desc: 'Embroidered PANACEA logo on structured black cap with IV:XX detail.',
    images: [HAT1, HAT2],
    featured: true,
  },
  {
    name: 'Rope Snapback – Yellow',
    desc: 'Relaxed fit snapback with embroidered PANACEA logo and Texas flag detail on back.',
    images: [CAP1, CAP2],
    featured: true,
  },
  {
    name: 'Rope Snapback – Stone',
    desc: 'Clean stone-grey snapback with PANACEA embroidery and Texas flag accent.',
    images: [CAP3, CAP4],
    featured: true,
  },
  {
    name: 'Columbia Fleece Vest',
    desc: 'Premium Columbia fleece with embroidered PANACEA branding. Ultimate comfort.',
    images: [VEST1, VEST2],
    featured: true,
  },
  {
    name: 'Champion Tie-Dye Hoodie',
    desc: 'Crystal tie-dye Champion hoodie with embroidered PANACEA logo.',
    images: [HOODIE1, HOODIE2],
    featured: false,
  },
  {
    name: 'PANACEA Eco Hoodie',
    desc: 'Eco-friendly premium hoodie with PANACEA Hash Garden branding.',
    images: [HOODIE3, HOODIE4],
    featured: false,
  },
  {
    name: 'Champion Camo Jacket',
    desc: 'Champion packable jacket in camo with gold PANACEA embroidery.',
    images: [JACKET1, JACKET2],
    featured: false,
  },
  {
    name: 'PANACEA Pattern Tee',
    desc: 'All-over print tee with repeating PANACEA emblem pattern. Lightweight and clean.',
    images: [SHIRT1, SHIRT2],
    featured: false,
  },
  {
    name: 'PANACEA Gardening Crop Tee',
    desc: '"I\'d Rather Be Gardening" crop tee with PANACEA Hash Garden seal.',
    images: [SHIRT3],
    featured: false,
  },
  {
    name: 'Botanical Slip-On Shoes – Pink',
    desc: 'Bold pink PANACEA mandala slip-ons. Statement footwear.',
    images: [SHOES1, SHOES2],
    featured: false,
  },
  {
    name: 'Botanical Slip-On Shoes – Blue',
    desc: 'Custom all-over print slip-ons with PANACEA botanical mandala design.',
    images: [OSHOES1, OSHOES2],
    featured: false,
  },
  {
    name: 'PANACEA Backpack',
    desc: 'All-over logo print backpack. Carry the garden with you.',
    images: [BACKPACK],
    featured: false,
  },
  {
    name: 'PANACEA Tropical Tee',
    desc: 'Vibrant full-print psychedelic botanical tee. Paired with the Hash Garden rope cap.',
    images: [HAT5],
    featured: false,
  },
];

const MERCH_STORE_URL = SITE.merchStoreUrl;
const B = import.meta.env.BASE_URL;

// Live products pulled from the Printful storefront — each deep-links to its product page.
const liveProducts = [
  { img: `${B}merch/champion-hoodie.jpg`, name: 'Unisex Champion Hoodie', price: 'From $45', tag: 'Apparel', slug: 'unisex-champion-hoodie' },
  { img: `${B}merch/columbia-jacket.jpg`, name: 'Columbia Soft Shell Jacket', price: 'From $103.50', tag: 'Outerwear', slug: 'columbia-soft-shell-jacket' },
  { img: `${B}merch/adidas-cap.jpg`, name: 'adidas Performance Cap', price: 'From $40', tag: 'Hats', slug: 'adidas-performance-cap' },
  { img: `${B}merch/golf-rope-cap.jpg`, name: 'Golf Rope Cap', price: 'From $28.50', tag: 'Hats', slug: 'golf-rope-cap' },
  { img: `${B}merch/ua-backpack.jpg`, name: 'Under Armour® Backpack', price: 'From $80', tag: 'Accessories', slug: 'under-armour-backpack' },
  { img: `${B}merch/embroidered-beanie.jpg`, name: 'Embroidered Beanie', price: 'From $20', tag: 'Hats', slug: 'embroidered-beanie' },
  { img: `${B}merch/classic-tee.jpg`, name: 'Unisex Classic Tee', price: 'From $15', tag: 'Apparel', slug: 'unisex-classic-tee' },
  { img: `${B}merch/stickers-purple.jpg`, name: 'Bubble-Free Stickers', price: 'From $4', tag: 'Accessories', slug: 'bubble-free-stickers-panacea-purple' },
];

export default function Merch() {
  const [form, setForm] = useState({ name: '', email: '', idea: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.formEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          idea: form.idea,
          source: 'Merch Idea',
          _subject: `PANACEA merch idea from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success !== 'true') throw new Error('send failed');
      toast.success('Thanks for your idea! We\'ll take a look.');
      setForm({ name: '', email: '', idea: '' });
    } catch {
      toast.error('Something went wrong. Please try again or call us.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] w-full overflow-hidden mb-16">
        <img
          src={`${import.meta.env.BASE_URL}b44/100671347.jpg`}
          alt="PANACEA Merch"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-center px-6">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Wear the Brand</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4 text-white">PANACEA Merch</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Rep the garden. Our curated line of branded merch is available through our official online store.
          </p>
          <a
            href={MERCH_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Visit Merch Store
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Shop Online — live from the Printful store */}
      <div className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Shop Online</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-3">Order & Ship to Your Door</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A few favorites from our online store — tap any item to pick your size and color and check out.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {liveProducts.map((p, i) => (
              <motion.a
                key={p.slug}
                href={`${MERCH_STORE_URL}product/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-square bg-white/5 flex items-center justify-center overflow-hidden p-4">
                  <img src={p.img} alt={p.name} loading="lazy" className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 border-t border-white/5">
                  <p className="text-primary text-[10px] tracking-[0.25em] uppercase mb-1.5 font-medium">{p.tag}</p>
                  <h3 className="font-display text-base font-semibold tracking-wide leading-snug mb-1">{p.name}</h3>
                  <span className="text-primary text-sm">{p.price}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={MERCH_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm tracking-wide hover:underline"
            >
              See all 25+ items in the store <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Local Art Section — below hero */}
      <div className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}b44/7e5dd18d8.jpg`}
                alt="PANACEA art and merch display case"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">More Than Apparel</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-6 leading-snug">
                We Also Carry Paintings<br />
                <span className="text-primary">from Local Artists.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Walk into PANACEA and you'll find more than branded gear — our display cases feature original paintings and prints from Corpus Christi's local art community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each piece is one-of-a-kind. Selection rotates as artists bring in new work. Stop by the shop or reach out to ask what's currently available.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Items */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {merchItems.filter(m => m.featured).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="grid grid-cols-2 h-72">
                  {item.images.map((img, j) => (
                    <div key={j} className="overflow-hidden">
                      <img src={img} alt={item.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold tracking-wide mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Non-featured */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchItems.filter(m => !m.featured).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-medium tracking-wide mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-10">
          <h3 className="font-display text-2xl font-semibold mb-3 tracking-wide">Shop the Full Collection</h3>
          <p className="text-muted-foreground mb-6">Visit our official merch store to browse sizes, colors, and place your order.</p>
          <a
            href={MERCH_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Visit Merch Store
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-muted-foreground/40 text-xs mt-4">Opens in new tab · Powered by Printful</p>
        </div>
      </div>

      {/* Local Art Gallery */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Local Art</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-2">Original Paintings In-Store</h2>
            <p className="text-muted-foreground text-sm mt-3">All pieces are originals from local artists. <span className="text-primary font-medium">Ask for availability — selection changes frequently.</span></p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: `${import.meta.env.BASE_URL}b44/591abe4cd.jpg`, alt: "Day of the Dead figure painting" },
              { src: `${import.meta.env.BASE_URL}b44/0b68b9c7a.jpg`, alt: "Grayscale portrait with roses" },
              { src: `${import.meta.env.BASE_URL}b44/df0d9277b.jpg`, alt: "Colorful abstract figure painting" },
              { src: `${import.meta.env.BASE_URL}b44/844b04ea2.jpg`, alt: "Starry Night inspired painting" },
              { src: `${import.meta.env.BASE_URL}b44/01f4b75ae.jpg`, alt: "Pop art monkey painting" },
            ].map((painting, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={painting.src}
                    alt={painting.alt}
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground/60 text-xs tracking-wide uppercase">Ask in-store or via the Contact page for current availability · Pieces vary</p>
          </div>
        </div>
      </div>

      {/* Merch Ideas Form */}
      <div className="px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-10">
            <div className="text-center mb-10">
              <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Shape the Collection</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-3">Got a Merch Idea?</h2>
              <p className="text-muted-foreground text-sm">
                We love hearing from the community. Submit your ideas for new designs, colorways, or products — we actually read these.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block tracking-wide">Your Name</label>
                  <Input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block tracking-wide">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block tracking-wide">Your Idea or Suggestion</label>
                <Textarea
                  value={form.idea}
                  onChange={e => setForm({ ...form, idea: e.target.value })}
                  placeholder="Describe your idea — a new product, design concept, colorway, or anything else you'd like to see from PANACEA."
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary/50"
                />
              </div>
              <Button type="submit" disabled={sending} className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                {sending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                {sending ? 'Sending…' : 'Submit Idea'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}