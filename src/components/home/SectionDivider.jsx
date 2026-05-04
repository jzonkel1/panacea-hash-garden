import React from 'react';

export default function SectionDivider({ flip = false }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '2px' }}>
      <div
        className="absolute inset-0"
        style={{
          background: flip
            ? 'linear-gradient(90deg, rgba(154,194,33,0.6) 0%, rgba(154,194,33,0.15) 40%, transparent 70%)'
            : 'linear-gradient(90deg, transparent 30%, rgba(154,194,33,0.15) 60%, rgba(154,194,33,0.6) 100%)',
        }}
      />
    </div>
  );
}