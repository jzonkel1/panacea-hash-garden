import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { SITE } from '@/lib/site';
import { submitNetlifyForm } from '@/lib/submitForm';
import storeProducts from '@/data/store-products.json';

const B = import.meta.env.BASE_URL;
const MERCH_STORE_URL = SITE.merchStoreUrl;

// Owner-shot lifestyle photos (two angles each) for the featured picks — link to their products.
const featured = [
  {
    name: 'PANACEA Dad Hat',
    desc: 'Embroidered PANACEA logo on a structured cap with IV:XX detail.',
    images: [`${B}b44/55174b4f5.jpg`, `${B}b44/254be84d6.jpg`],
    url: `${MERCH_STORE_URL}product/dad-hat`,
  },
  {
    name: 'Golf Rope Cap – Yellow',
    desc: 'Relaxed rope snapback with embroidered PANACEA logo and Texas flag detail.',
    images: [`${B}b44/dac9d2066.jpg`, `${B}b44/f2168c53b.jpg`],
    url: `${MERCH_STORE_URL}product/golf-rope-cap`,
  },
  {
    name: 'Golf Rope Cap – Stone',
    desc: 'Clean stone-grey rope snapback with PANACEA embroidery and Texas flag accent.',
    images: [`${B}b44/7ea65e7fa.jpg`, `${B}b44/d624512db.jpg`],
    url: `${MERCH_STORE_URL}product/golf-rope-cap-67a17cd0f0c91`,
  },
  {
    name: 'Embroidered Champion Jacket',
    desc: 'Champion packable jacket with embroidered PANACEA branding.',
    images: [`${B}b44/cc7bf6ecb.jpg`, `${B}b44/7570c256a.jpg`],
    url: `${MERCH_STORE_URL}product/embroidered-champion-packable-jacket`,
  },
];

// Full storefront grouped by category (see scripts/build-store.mjs)
const CATEGORY_ORDER = ['Apparel', 'Headwear', 'Footwear', 'Bags', 'Drinkware', 'Accessories'];
const grouped = CATEGORY_ORDER
  .map((cat) => ({ cat, items: storeProducts.filter((p) => p.category === cat) }))
  .filter((g) => g.items.length);

export default function Merch() {
  const [form, setForm] = useState({ name: '', email: '', idea: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitNetlifyForm('merch-idea', {
        name: form.name,
        email: form.email,
        idea: form.idea,
        source: 'Merch Idea',
      });
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
          src={`${B}b44/100671347.jpg`}
          alt="PANACEA Merch"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-center px-6">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Wear the Brand</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4 text-white">PANACEA Merch</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Rep the garden. Our full line of branded gear ships to your door — tap any item to pick your size and color and check out.
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

      {/* Featured picks — dual-angle lifestyle shots */}
      <div className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Featured</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide">Best of the Garden</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden block transition-all duration-500 hover:-translate-y-1"
              >
                <div className="grid grid-cols-2 h-72">
                  {item.images.map((img, j) => (
                    <div key={j} className="overflow-hidden">
                      <img src={img} alt={item.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
                <div className="p-8 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-wide mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Full store — every product, grouped by category */}
      <div className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Shop the Full Store</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-3">Everything in the Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our entire online lineup — {storeProducts.length} pieces across apparel, headwear, drinkware and more. Tap any item to choose your size and color and check out securely.
            </p>
          </div>

          {grouped.map(({ cat, items }) => (
            <div key={cat} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-display text-xl font-semibold tracking-wide">{cat}</h3>
                <span className="text-xs text-muted-foreground/60">{items.length}</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {items.map((p, i) => (
                  <motion.a
                    key={p.slug}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 4) * 0.05 }}
                    className="glass-card glass-card-hover rounded-2xl overflow-hidden group block transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="aspect-square bg-white/[0.03] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 border-t border-white/5">
                      <h4 className="text-sm font-medium tracking-wide leading-snug mb-1 line-clamp-2">{p.name}</h4>
                      <span className="text-primary text-sm">{p.price}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <a
              href={MERCH_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Open the Full Store
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-muted-foreground/40 text-xs mt-4">Opens in new tab · Secure checkout powered by Printful</p>
          </div>
        </div>
      </div>

      {/* Local Art Section */}
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
                src={`${B}b44/7e5dd18d8.jpg`}
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
              { src: `${B}b44/591abe4cd.jpg`, alt: "Day of the Dead figure painting" },
              { src: `${B}b44/0b68b9c7a.jpg`, alt: "Grayscale portrait with roses" },
              { src: `${B}b44/df0d9277b.jpg`, alt: "Colorful abstract figure painting" },
              { src: `${B}b44/844b04ea2.jpg`, alt: "Starry Night inspired painting" },
              { src: `${B}b44/01f4b75ae.jpg`, alt: "Pop art monkey painting" },
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
