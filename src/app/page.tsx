'use client';

import HeroSection from '@/components/HeroSection';
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';
import FirebaseLeadForm from '@/components/FirebaseLeadForm';

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <HeroSection />
      <FirebaseLeadForm />
      <Footer />
    </main>
  );
} 