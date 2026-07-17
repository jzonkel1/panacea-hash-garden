import React from 'react';

const BANNER_URL = `${import.meta.env.BASE_URL}b44/1d8096159.png`;

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