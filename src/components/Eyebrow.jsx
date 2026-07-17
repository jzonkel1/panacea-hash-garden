import React from 'react';

// Small uppercase kicker above section headings.
// Centered kickers (mobile, or `center`) get dashes on BOTH sides;
// left-aligned desktop kickers render plain.
export default function Eyebrow({ children, center = false, className = '' }) {
  const base = 'text-primary text-xs tracking-[0.4em] uppercase font-medium';
  if (center) {
    return <p className={`${base} ${className}`}>— {children} —</p>;
  }
  return (
    <p className={`${base} ${className}`}>
      <span className="lg:hidden">— {children} —</span>
      <span className="hidden lg:inline">{children}</span>
    </p>
  );
}
