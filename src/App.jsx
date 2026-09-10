import React, { useState } from 'react';
import MarketTicker from './components/MarketTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CourseSection from './components/CourseSection';
import CurriculumSection from './components/CurriculumSection';
import LiveClassesSection from './components/LiveClassesSection';
import ReviewsSection from './components/ReviewsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import EnrollmentModal from './components/EnrollmentModal';
import SearchModal from './components/SearchModal';
import MobileFloatingBar from './components/MobileFloatingBar';

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoType, setVideoType] = useState('intro');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleWatchVideo = (type = 'intro') => {
    setVideoType(type);
    setVideoModalOpen(true);
  };

  const handleOpenEnroll = () => {
    setEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060908] text-[#e6ede9] flex flex-col font-sans selection:bg-brand-green selection:text-black pb-16 md:pb-0">
      {/* 1. Real-Time Financial Market Ticker */}
      <MarketTicker />

      {/* 2. Main Navigation Bar */}
      <Navbar 
        onOpenCheckout={handleOpenEnroll} 
        onOpenSearch={() => setSearchModalOpen(true)} 
      />

      {/* 3. Main Content Sections */}
      <main className="flex-grow">
        {/* Section 01: Home Page & Overview */}
        <HeroSection 
          onWatchVideo={handleWatchVideo} 
          onEnroll={handleOpenEnroll} 
        />

        {/* Section 02: Course Details & Program */}
        <CourseSection 
          onWatchVideo={handleWatchVideo} 
          onEnroll={handleOpenEnroll} 
        />

        {/* Section 03: Complete Orderflow Curriculum */}
        <CurriculumSection 
          onWatchVideo={handleWatchVideo} 
        />

        {/* Section 04: Learn Orderflow Live & Class Simulator */}
        <LiveClassesSection 
          onEnroll={handleOpenEnroll} 
        />

        {/* Section 05: Student Reviews & Testimonials */}
        <ReviewsSection 
          onEnroll={handleOpenEnroll} 
        />

        {/* Section 06: Pricing & Enrollment Masterclass */}
        <PricingSection 
          onEnroll={handleOpenEnroll} 
        />
      </main>

      {/* 4. Professional Financial Footer */}
      <Footer onOpenCheckout={handleOpenEnroll} />

      {/* 5. Mobile Floating Action Bar */}
      <MobileFloatingBar onEnroll={handleOpenEnroll} />

      {/* 6. Modals & Interactive Overlays */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoType={videoType}
      />

      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </div>
  );
}
