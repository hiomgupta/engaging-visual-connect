
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import CaseStudies from '@/components/sections/CaseStudies';
import ProductsOverview from '@/components/sections/ProductsOverview';
import InteractionsOverview from '@/components/sections/InteractionsOverview';
import CTASection from '@/components/sections/CTASection';
import Testimonials from '@/components/sections/Testimonials';

const Index = () => {
  // Smooth scroll to section when URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductsOverview />
        <InteractionsOverview />
        <CaseStudies />
        <Testimonials />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
