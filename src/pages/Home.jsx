import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import CategoriesSection from '../components/home/CategoriesSection';
import WhySection from '../components/home/WhySection';
import EventsPreview from '../components/home/EventsPreview';
import MerchPreview from '../components/home/MerchPreview';
import VisitSection from '../components/home/VisitSection';
import ReviewsSection from '../components/home/ReviewsSection';
import BannerDivider from '../components/home/BannerDivider';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <CategoriesSection />
      <BannerDivider />
      <WhySection />
      <ReviewsSection />
      <EventsPreview />
      <MerchPreview />
      <VisitSection />
    </div>
  );
}