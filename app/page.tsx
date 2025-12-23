import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ImpactStats from '@/components/ImpactStats';
import ThreePillars from '@/components/ThreePillars';
import TechStackIntegration from '@/components/TechStackIntegration';
import ReviewsSection from '@/components/ReviewsSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImpactStats />
      <ThreePillars />
      <TechStackIntegration />
      <ReviewsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
