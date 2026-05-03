import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AgeGate from './AgeGate';
import { AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('panacea_age_verified');
    if (verified === 'true') setAgeVerified(true);
  }, []);

  return (
    <div className="grain-overlay min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {!ageVerified && <AgeGate onVerified={() => setAgeVerified(true)} />}
      </AnimatePresence>

      {ageVerified && (
        <>
          <Navbar />
          <main className="relative z-[2]">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}