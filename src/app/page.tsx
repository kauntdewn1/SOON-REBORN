'use client';

import HeroSection from '@/components/HeroSection';
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <HeroSection />
      <Countdown targetDate="2025-06-01T12:00:00Z" />
      <Footer />
    </main>
  );
} 