import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="PANACEA" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium botanicals and artful culture in the heart of Corpus Christi.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Navigate</h4>
            <div className="flex flex-col gap-3">
              {['/', '/products', '/events', '/merch', '/about', '/contact'].map(path => (
                <Link key={path} to={path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Visit</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary/70" />
                <span>4914 Everhart Rd<br/>Corpus Christi, TX 78411</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary/70" />
                <span>(361) 261-3880</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary/70" />
                <span>Mon–Sat: 10 AM – 10 PM<br/>Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Legal</h4>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Must be 21 or older to purchase. Products are intended for adult use only. PANACEA HASH GARDEN does not ship products. All sales are final and in-store only.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} PANACEA HASH GARDEN. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 tracking-widest">
            21+ ONLY
          </p>
        </div>
      </div>
    </footer>
  );
}