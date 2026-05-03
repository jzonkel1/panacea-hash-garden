import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import WhySection from '../components/home/WhySection';
import EventsPreview from '../components/home/EventsPreview';
import MerchPreview from '../components/home/MerchPreview';
import VisitSection from '../components/home/VisitSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <WhySection />
      <EventsPreview />
      <MerchPreview />
      <VisitSection />
    </div>
  );
}