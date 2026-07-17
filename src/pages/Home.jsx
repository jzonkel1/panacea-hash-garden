import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import CategoriesSection from '../components/home/CategoriesSection';
import WhySection from '../components/home/WhySection';
import EventsPreview from '../components/home/EventsPreview';
import MerchPreview from '../components/home/MerchPreview';
import VisitSection from '../components/home/VisitSection';
import ReviewsSection from '../components/home/ReviewsSection';
import LabVerifiedSection from '../components/home/LabVerifiedSection';
import BannerDivider from '../components/home/BannerDivider';
import SectionDivider from '../components/home/SectionDivider';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <SectionDivider />
      <CategoriesSection />
      <BannerDivider />
      <WhySection />
      <SectionDivider flip />
      <LabVerifiedSection />
      <SectionDivider />
      <ReviewsSection />
      <SectionDivider />
      <EventsPreview />
      <SectionDivider flip />
      <MerchPreview />
      <SectionDivider />
      <VisitSection />
    </div>
  );
}