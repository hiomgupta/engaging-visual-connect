
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import CaseStudies from '@/components/sections/CaseStudies';
import ProductsOverview from '@/components/sections/ProductsOverview';
import InteractionsOverview from '@/components/sections/InteractionsOverview';
import CTASection from '@/components/sections/CTASection';
import Testimonials from '@/components/sections/Testimonials';
import TourGuide from '@/components/TourGuide';
import WelcomeDialog from '@/components/WelcomeDialog';

interface SectionProps {
  className?: string;
}

const Index = () => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [tourRef, setTourRef] = useState<any>(null);
  
  // Check if first visit on component mount
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisitedBefore) {
      setShowWelcomeDialog(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  // Smooth scroll to section when URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleDialogClose = (startTour: boolean) => {
    setShowWelcomeDialog(false);
    
    if (startTour && tourRef) {
      tourRef();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ProductsOverview className="products-section" />
        <InteractionsOverview className="interactions-section" />
        <Features className="features-section" />
        <CaseStudies className="case-studies-section" />
        <Testimonials className="testimonials-section" />
        <CTASection className="cta-section" />
      </main>
      
      <Footer />
      <TourGuide onTourRef={setTourRef} />
      <WelcomeDialog 
        isOpen={showWelcomeDialog} 
        onClose={handleDialogClose} 
      />
    </div>
  );
};

export default Index;
