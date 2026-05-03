import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Music, Mic, Palette, Users, Send, MapPin, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AUD1 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/7b302f861_audience.jpg";
const AUD2 = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/f201220af_audience2.jpg";

const upcomingEvents = [
  { title: 'Comedy Night at PANACEA', date: 'May 17, 2026', time: '8:00 PM', type: 'Comedy', icon: Mic, desc: 'Live stand-up comedy in the backyard. Bring your chairs and your sense of humor.' },
  { title: 'Live Music Fridays', date: 'May 23, 2026', time: '7:00 PM', type: 'Music', icon: Music, desc: 'Local bands and acoustic sets every other Friday. Free entry.' },
  { title: 'Art Vendor Market', date: 'June 7, 2026', time: '12:00 PM', type: 'Art', icon: Palette, desc: 'Local artists, craftspeople, and vendors. Shop local, support the community.' },
  { title: 'Summer Kick-Off Party', date: 'June 21, 2026', time: '6:00 PM', type: 'Community', icon: Users, desc: 'DJ, food trucks, vendors, and vibes. Celebrating summer Corpus Christi style.' },
];

const pastGallery = [AUD1, AUD2];

export default function Events() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking inquiry sent! We\'ll be in touch soon.');
    setForm({ name: '', email: '', type: '', message: '' });
  };

  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Header */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Culture & Community</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4">Events</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PANACEA is more than a shop. It's a space for comedy, music, art, and community to come together.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-10">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">{event.type}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{event.desc}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/70" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary/70" />
                      {event.time}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Event Types */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-10 text-center">What We Host</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Mic, label: 'Stand-Up Comedy', desc: 'Backyard comedy nights with local and touring comedians' },
              { icon: Music, label: 'Live Music', desc: 'Acoustic sets, bands, and DJ nights' },
              { icon: Palette, label: 'Art & Vendors', desc: 'Pop-up markets with local artists and craftspeople' },
              { icon: Users, label: 'Community Events', desc: 'Block parties, seasonal celebrations, and more' },
            ].map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium tracking-wide mb-2">{type.label}</h3>
                  <p className="text-xs text-muted-foreground">{type.desc}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastGallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl overflow-hidden border border-white/5"
              >
                <img src={img} alt="Past PANACEA event" className="w-full h-72 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
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