import React from 'react';

const BANNER_URL = "https://media.base44.com/images/public/69f7b435c4e1fadd6b3c10d5/1d8096159_panacea_ultrawide_banner_not_stretched.png";

export default function BannerDivider() {
  return (
    <div className="w-full overflow-hidden" style={{ height: '180px' }}>
      <img
        src={BANNER_URL}
        alt=""
        className="w-full h-full object-cover object-center opacity-70"
      />
    </div>
  );
}