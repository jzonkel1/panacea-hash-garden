import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Mic, Palette, Users, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AUD1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/7b302f861_audience.jpg";
const AUD2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/f201220af_audience2.jpg";
const COMEDY1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/7ea37424d_comedy1.jpg";
const COMEDY2 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/b15629c27_comedy2.jpg";
const COMEDY3 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/03a32916e_comedy3.jpg";
const COMEDY4 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/1c090ee5a_comedy4.jpg";
const MUSIC1 = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/081328a46_music1.jpg";
const COFFTEA = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/f446d36e1_coffeetea.jpg";
const CATERING = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/759d9388b_catering.jpg";



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
      <div className="relative h-[60vh] w-full overflow-hidden mb-16">
        <img
          src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/a408d105a_audience2.jpg"
          alt="PANACEA Events"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-center px-6">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Culture & Community</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4 text-white">Events</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            PANACEA is more than a shop. It's a space for comedy, music, art, and community to come together.
          </p>
        </div>
      </div>

      {/* What We Host */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">What We Host</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-wide mb-4">Events at PANACEA</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              We open our doors to the community — hosting nights you won't forget and voices worth hearing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Mic,
                label: 'Stand-Up Comedy',
                image: "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/7ea37424d_comedy1.jpg",
                desc: 'Backyard comedy nights with local and touring comedians. No cover, great vibes, and laughs until close.',
              },
              {
                icon: Music,
                label: 'Live Music',
                image: "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/081328a46_music1.jpg",
                desc: 'Acoustic sets, local bands, and DJ nights that turn our space into a real venue.',
              },
              {
                icon: Palette,
                label: 'Art & Vendor Markets',
                image: "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/f446d36e1_coffeetea.jpg",
                desc: 'Pop-up markets featuring local artists, craftspeople, and vendors. Shop local, support the community.',
              },
              {
                icon: Users,
                label: 'Community Gatherings',
                image: "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/759d9388b_catering.jpg",
                desc: 'Block parties, seasonal celebrations, and special events. Food, drinks, and the full PANACEA experience.',
              },
            ].map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="h-52 overflow-hidden">
                    <img src={type.image} alt={type.label} className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-wide">{type.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Past Event Gallery */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-10 text-center">Past Events</h2>
          <div style={{ columnCount: 3, columnGap: '16px' }} className="[column-count:2] md:[column-count:3]">
            {[COMEDY1, COMEDY2, COMEDY3, COMEDY4, MUSIC1, COFFTEA, CATERING, AUD1, AUD2].map((img, i) => (
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