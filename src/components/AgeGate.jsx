import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";

export default function AgeGate({ onVerified }) {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    const m = parseInt(month);
    const d = parseInt(day);
    const y = parseInt(year);

    if (!m || !d || !y || m < 1 || m > 12 || d < 1 || d > 31 || y < 1900 || y > 2010) {
      setError('Please enter a valid date of birth.');
      return;
    }

    const birthDate = new Date(y, m - 1, d);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 21) {
      localStorage.setItem('panacea_age_verified', 'true');
      onVerified();
    } else {
      setError('You must be 21 or older to enter this site.');
    }
  };

  const selectClass = "bg-transparent border border-white/10 rounded-lg px-4 py-3 text-foreground text-center appearance-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] glow-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
        <motion.img
          src={LOGO_URL}
          alt="PANACEA Logo"
          className="w-32 h-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />

        <motion.h1
          className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          PANACEA HASH GARDEN
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-sm mb-8 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Premium Botanicals · Corpus Christi, TX
        </motion.p>

        <motion.div
          className="glass-card rounded-2xl p-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-foreground/80 text-sm mb-6">
            You must be <span className="text-primary font-semibold">21 or older</span> to enter this site. Please verify your age.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Month</label>
              <input
                type="number"
                placeholder="MM"
                min="1" max="12"
                value={month}
                onChange={e => setMonth(e.target.value)}
                className={selectClass + " w-full"}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Day</label>
              <input
                type="number"
                placeholder="DD"
                min="1" max="31"
                value={day}
                onChange={e => setDay(e.target.value)}
                className={selectClass + " w-full"}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Year</label>
              <input
                type="number"
                placeholder="YYYY"
                min="1900" max="2010"
                value={year}
                onChange={e => setYear(e.target.value)}
                className={selectClass + " w-full"}
              />
            </div>
          </div>

          {error && (
            <p className="text-destructive text-sm mb-4">{error}</p>
          )}

          <button
            onClick={handleVerify}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            ENTER SITE
          </button>

          <p className="text-muted-foreground/60 text-xs mt-4">
            By entering, you confirm you are 21 years of age or older.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}