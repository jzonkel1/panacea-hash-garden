import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const LOGO_URL = `${import.meta.env.BASE_URL}b44/8c30f1a7c.png`;
const SMOKE_URL = `${import.meta.env.BASE_URL}smoke.mp4`;

export default function AgeGate({ onVerified }) {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const yearRef = useRef(null);

  const verify = (m, d, y) => {
    const mi = parseInt(m), di = parseInt(d), yi = parseInt(y);
    if (!mi || !di || !yi || mi < 1 || mi > 12 || di < 1 || di > 31 || yi < 1900 || yi > 2010) {
      setError('Please enter a valid date of birth.');
      return;
    }
    const birth = new Date(yi, mi - 1, di);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const md = today.getMonth() - birth.getMonth();
    if (md < 0 || (md === 0 && today.getDate() < birth.getDate())) age--;

    if (age >= 21) {
      localStorage.setItem('panacea_age_verified', 'true');
      onVerified();
    } else {
      setError('You must be 21 or older to enter this site.');
    }
  };

  const handleMonth = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 2);
    setMonth(v);
    setError('');
    // Advance once the month is unambiguous (2 digits, or a lead digit 2–9 that can't be a tens place)
    if (v.length === 2 || (v.length === 1 && parseInt(v) >= 2)) dayRef.current?.focus();
  };

  const handleDay = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 2);
    setDay(v);
    setError('');
    if (v.length === 2 || (v.length === 1 && parseInt(v) >= 4)) yearRef.current?.focus();
  };

  const handleYear = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 4);
    setYear(v);
    setError('');
    if (v.length === 4) verify(month, day, v); // auto-submit when the date is complete
  };

  // Backspace on an empty field hops to the previous one
  const backHop = (value, prevRef) => (e) => {
    if (e.key === 'Backspace' && value === '') prevRef.current?.focus();
    if (e.key === 'Enter') verify(month, day, year);
  };

  const inputClass = "w-full bg-white/5 border border-white/12 rounded-xl py-4 text-foreground text-center text-2xl font-display tracking-[0.2em] tabular-nums placeholder:text-white/25 placeholder:tracking-[0.2em] focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/25 transition-all";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Smoke video background */}
      <video
        src={SMOKE_URL}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.55 }}
      />
      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[130px] glow-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        <motion.img
          src={LOGO_URL}
          alt="PANACEA Logo"
          className="w-32 h-auto mb-7"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        />

        <motion.h1
          className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          PANACEA HASH GARDEN
        </motion.h1>

        <motion.p
          className="text-white/60 text-xs mb-8 tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Premium Botanicals · Corpus Christi, TX
        </motion.p>

        <motion.div
          className="glass-card rounded-2xl p-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <p className="text-foreground/85 text-sm mb-6">
            You must be <span className="text-primary font-semibold">21 or older</span> to enter. Enter your date of birth.
          </p>

          <div className="grid grid-cols-[1fr_1fr_1.3fr] gap-3 mb-2">
            <div>
              <label className="text-[10px] text-white/45 mb-1.5 block tracking-[0.2em] uppercase">Month</label>
              <input ref={monthRef} value={month} onChange={handleMonth} onKeyDown={backHop(null, monthRef)}
                inputMode="numeric" autoComplete="off" placeholder="MM" aria-label="Birth month" className={inputClass} />
            </div>
            <div>
              <label className="text-[10px] text-white/45 mb-1.5 block tracking-[0.2em] uppercase">Day</label>
              <input ref={dayRef} value={day} onChange={handleDay} onKeyDown={backHop(day, monthRef)}
                inputMode="numeric" autoComplete="off" placeholder="DD" aria-label="Birth day" className={inputClass} />
            </div>
            <div>
              <label className="text-[10px] text-white/45 mb-1.5 block tracking-[0.2em] uppercase">Year</label>
              <input ref={yearRef} value={year} onChange={handleYear} onKeyDown={backHop(year, dayRef)}
                inputMode="numeric" autoComplete="off" placeholder="YYYY" aria-label="Birth year" className={inputClass} />
            </div>
          </div>

          <p className="text-white/35 text-[11px] mb-5">Tab moves automatically as you type.</p>

          {error && <p className="text-destructive text-sm mb-4">{error}</p>}

          <button
            onClick={() => verify(month, day, year)}
            className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            ENTER SITE
          </button>

          <p className="text-white/45 text-xs mt-4">
            By entering, you confirm you are 21 years of age or older.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
