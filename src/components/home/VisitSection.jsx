import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function VisitSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/6 to-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/8 blur-[180px] rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3 font-medium">Come See Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide">Visit the Shop</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/5 h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.5!2d-97.389!3d27.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4914+Everhart+Rd+Corpus+Christi+TX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
              title="PANACEA Location"
            />
          </motion.div>

          {/* Info with photo background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden flex flex-col justify-center"
          >
            {/* Background photo */}
            <img
              src="https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/9e3168c89_unnamed2.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-1">Address</h3>
                  <p className="text-muted-foreground">4914 Everhart Rd<br />Corpus Christi, TX 78411</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-1">Phone</h3>
                  <a href="tel:3612613880" className="text-muted-foreground hover:text-primary transition-colors">(361) 261-3880</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-1">Hours</h3>
                  <p className="text-muted-foreground">Monday – Saturday: 10 AM – 10 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/3fttYBiGaeRzKdMC6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 w-fit"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}