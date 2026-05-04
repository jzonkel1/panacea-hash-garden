import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Mic, Palette, Users, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import EventCalendar from '../components/EventCalendar';

const COMEDY_MAIN = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/2cd58801d_comed65.jpg";
const MUSIC1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/081328a46_music1.jpg";
const ART_MARKET = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/5f5ebf081_505899020_10229857296121817_2446135706567305270_n.jpg";
const CATERING = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/759d9388b_catering.jpg";
const AUD1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/7b302f861_audience.jpg";
const AUD2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/f201220af_audience2.jpg";
const COMEDY2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/b15629c27_comedy2.jpg";
const COMEDY3 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/03a32916e_comedy3.jpg";
const COMEDY4 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/1c090ee5a_comedy4.jpg";
const COFFTEA = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/f446d36e1_coffeetea.jpg";

export default function Events() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking inquiry sent! We\'ll be in touch soon.');
    setForm({ name: '', email: '', type: '', message: '' });
  };

  return (
    <div className="pb-24 min-h-screen">

      {/* Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden mb-24">
        <img
          src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/a408d105a_audience2.jpg"
          alt="PANACEA Events"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">Culture & Community</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-wide mb-6 text-white">Events at PANACEA</h1>
          <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg mb-10">
            This is a community space. Comedy nights, live music, art markets, and more — all happening right here in Corpus Christi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Book an Event
            </a>
            <a
              href="#calendar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass-card border border-white/15 text-white font-medium tracking-wide hover:bg-white/10 transition-all"
            >
              View Events Calendar
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Intro */}
      <div className="px-6 mb-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">From the Founder</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-6 leading-snug">
              "We built PANACEA to be more than a shop.<br />
              <span className="text-primary">It's a place to gather."</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              When Rene Pena opened PANACEA, the vision was always bigger than retail. The backyard, the patio, the open mic nights — these weren't afterthoughts. They were the whole point.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every event we host is an extension of that same idea: bring people together, support local talent, and make Corpus Christi feel a little more like home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stand-Up Comedy — Full editorial spread */}
      <div className="px-6 mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium">Stand-Up Comedy</p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-6 leading-tight">
                Backyard Comedy<br />Nights
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Under string lights in the backyard, local and visiting comedians take the mic for intimate, no-cover comedy nights. Bring your own chair, bring a friend, and stay until close.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These shows started as a simple idea — a few chairs, a mic, and a good crowd. They've grown into some of the most beloved nights in Corpus. No cover. No pretense. Just good laughs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={COMEDY_MAIN} alt="Stand-Up Comedy at PANACEA" className="w-full h-auto object-cover opacity-90" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Live Music */}
      <div className="px-6 mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img src={MUSIC1} alt="Live Music at PANACEA" className="w-full h-80 object-cover opacity-90" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Music className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium">Live Music</p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-6 leading-tight">
                Acoustic Sets &<br />Local Artists
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Acoustic performers, local bands, and DJ nights — PANACEA transforms into a real venue after hours. The music is as carefully curated as the products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in paying local artists fairly and giving them a room that actually listens.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Art & Vendor Markets */}
      <div className="px-6 mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium">Art & Vendor Markets</p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-6 leading-tight">
                Local Makers.<br />Real Community.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We open our doors to local artists, craftspeople, and independent vendors for pop-up markets that feel more like neighborhood block parties than retail events.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Shop handmade goods, discover local talent, and spend a Sunday afternoon the right way.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={ART_MARKET} alt="Art & Vendor Market at PANACEA" className="w-full h-auto object-contain opacity-90" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Community Gatherings */}
      <div className="px-6 mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img src={CATERING} alt="Community Gathering at PANACEA" className="w-full h-80 object-cover opacity-90" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium">Community Gatherings</p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-6 leading-tight">
                Block Parties &<br />Celebrations
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Seasonal celebrations, themed nights, and full-scale block parties — food, drinks, and the complete PANACEA experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Follow us to stay in the loop. These tend to sell out fast.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Event Calendar */}
       <EventCalendar />

       {/* Photo Gallery */}
       <div className="px-6 mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">In the Moment</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide">Past Events</h2>
          </div>
          <div style={{ columnCount: 3, columnGap: '16px' }} className="[column-count:2] md:[column-count:3]">
            {[COMEDY2, COMEDY3, COMEDY4, AUD1, AUD2, COFFTEA].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden border border-white/5 mb-4 break-inside-avoid"
              >
                <img src={img} alt="Past PANACEA event" className="w-full h-auto block opacity-80 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div id="booking" className="px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-10">
            <div className="text-center mb-10">
              <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Perform or Vend</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-3">Request Event Booking</h2>
              <p className="text-muted-foreground text-sm">
                Are you a comedian, musician, artist, or vendor? Fill out the form below to inquire about performing or vending at PANACEA.
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
                <label className="text-xs text-muted-foreground mb-1.5 block tracking-wide">Type of Event / Performance</label>
                <Input
                  value={form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}
                  placeholder="Comedy, Music, Art, Vendor, etc."
                  required
                  className="bg-white/5 border-white/10 focus:border-primary/50"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block tracking-wide">Tell Us About You</label>
                <Textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Share your experience, links to your work, or what you'd like to bring to PANACEA."
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary/50"
                />
              </div>
              <Button type="submit" className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                <Send className="w-4 h-4 mr-2" />
                Submit Booking Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}