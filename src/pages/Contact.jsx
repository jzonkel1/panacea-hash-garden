import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Header */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a question? Want to learn more about our products or events? Reach out—we'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="glass-card rounded-2xl p-10">
                <h2 className="font-display text-2xl font-semibold mb-8 tracking-wide">Send a Message</h2>
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
                    <label className="text-xs text-muted-foreground mb-1.5 block tracking-wide">Subject</label>
                    <Input
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="What's this about?"
                      required
                      className="bg-white/5 border-white/10 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block tracking-wide">Message</label>
                    <Textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help?"
                      rows={6}
                      required
                      className="bg-white/5 border-white/10 focus:border-primary/50"
                    />
                  </div>
                  <Button type="submit" className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Monkey */}
              <div className="mt-8 flex justify-center">
                <img
                  src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/14b5add35_monkey.jpg"
                  alt="PANACEA mascot"
                  className="w-48 rounded-2xl object-cover"
                />
              </div>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Info cards */}
              <div className="space-y-6">
                <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium tracking-wide mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">4914 Everhart Rd<br />Corpus Christi, TX 78411</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium tracking-wide mb-1">Phone</h3>
                    <a href="tel:3612613880" className="text-muted-foreground text-sm hover:text-primary transition-colors">(361) 261-3880</a>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium tracking-wide mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday – Saturday: 10 AM – 10 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-white/5 h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.5!2d-97.389!3d27.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4914+Everhart+Rd+Corpus+Christi+TX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="PANACEA Location"
                />
              </div>

              {/* 21+ Notice */}
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">21+ Only.</span> You must be 21 years of age or older to enter PANACEA HASH GARDEN and to purchase any products. Valid government-issued ID required.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}