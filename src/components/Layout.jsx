import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AgeGate from './AgeGate';
import { AnimatePresence } from 'framer-motion';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function Layout() {
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('panacea_age_verified');
    if (verified === 'true') setAgeVerified(true);
  }, []);

  // The gate is an opaque overlay, not a switch: the site is always in the DOM
  // underneath it. It used to gate rendering (`ageVerified && <site/>`), which
  // meant a crawler — always a fresh profile with empty localStorage — rendered
  // the gate and nothing else. Every page indexed as ~250 characters with zero
  // links. Keeping the markup mounted costs the visitor nothing (AgeGate is a
  // full-bleed opaque layer at z-100) and lets the site actually be read.
  useEffect(() => {
    if (!ageVerified) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [ageVerified]);

  return (
    <div className="grain-overlay min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {!ageVerified && <AgeGate onVerified={() => setAgeVerified(true)} />}
      </AnimatePresence>

      {/* inert keeps the covered site out of the tab order and the accessibility
          tree while the gate is up. It is stripped from the prerendered snapshot
          so crawlers get plain markup. */}
      <div {...(ageVerified ? {} : { inert: '' })}>
        <ScrollToTop />
        <Navbar />
        <main className="relative z-[2]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
