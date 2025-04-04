
import React from 'react';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gray-200 text-gray-900 ${className}`}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your video experience?</h2>
            <p className="text-lg mb-8">
              Start your journey with KPoint and discover the power of enterprise video intelligence.
            </p>
          </div>
          <div className="text-center md:text-right">
            <Button href="/contact" variant="secondary" size="lg" className="bg-gray-900 text-white hover:bg-black">
              Contact Sales
            </Button>
            <Button href="/demo" variant="outline" size="lg" className="ml-4 border-gray-500 text-gray-900">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
