import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Events', path: '/events' },
  { label: 'Merch', path: '/merch' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(6,10,4,0.82)] backdrop-blur-2xl border-b border-primary/8 shadow-lg shadow-black/30'
          : 'bg-[rgba(4,8,3,0.35)] backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={LOGO_URL} alt="PANACEA" className="h-6 w-auto" />
            <span className="font-display text-sm tracking-[0.22em] font-medium text-[#d8d8d0] hidden sm:block">PANACEA</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 pb-0.5 ${
                    active ? 'text-primary' : 'text-[#8a8a80] hover:text-[#d0d0c8]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary/60 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Visit Us CTA */}
          <div className="hidden md:block shrink-0">
            <a
              href="https://maps.google.com/?q=4914+Everhart+Rd+Corpus+Christi+TX+78411"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/12 bg-white/4 text-[11px] tracking-[0.18em] uppercase text-[#c8c8c0] transition-all duration-300 hover:border-primary/35 hover:bg-primary/8 hover:text-white"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#a0a098] p-1.5"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-0 z-40 bg-[rgba(4,8,3,0.97)] backdrop-blur-2xl pt-20 px-8"
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-display tracking-wide transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-[#7a7a72]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-[#555550] text-sm">4914 Everhart Rd, Corpus Christi, TX</p>
              <p className="text-[#555550] text-sm mt-1">(361) 261-3880</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}