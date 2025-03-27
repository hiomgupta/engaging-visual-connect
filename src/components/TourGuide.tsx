
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import TourButton from './TourButton';

interface TourStep {
  element: string;
  title: string;
  description: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const tourSteps: TourStep[] = [
  {
    element: 'header',
    title: 'Sticky Navigation Bar',
    description: 'Our new sticky nav with 3 categories makes navigation simpler and faster for executives.',
    position: 'bottom'
  },
  {
    element: '.hero-section',
    title: 'Redesigned Hero Section',
    description: 'Captivating hero with a punchy tagline, demo video, and clear CTAs that drive 30% more clicks.',
    position: 'bottom'
  },
  {
    element: '.products-section',
    title: 'Simplified Product Showcase',
    description: 'Scannable cards with examples and clear CTAs for deeper exploration of our features.',
    position: 'right'
  },
  {
    element: '.testimonials-section',
    title: 'Trust Testimonials',
    description: 'Real testimonials from industry leaders that build instant credibility.',
    position: 'left'
  },
  {
    element: '.cta-section',
    title: 'Clear Call-to-Action',
    description: 'Start your journey with KPoint and transform your enterprise video experience.',
    position: 'top'
  }
];

export const TourGuide: React.FC = () => {
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Check if the tour has been taken before
    const tourTaken = localStorage.getItem('kpoint-tour-taken');
    if (!tourTaken) {
      setShowBanner(true);
    }
  }, []);

  const startTour = () => {
    setShowTour(true);
    setShowBanner(false);
    setCurrentStep(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling during tour
  };

  const endTour = () => {
    setShowTour(false);
    localStorage.setItem('kpoint-tour-taken', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      scrollToElement(tourSteps[currentStep + 1].element);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      scrollToElement(tourSteps[currentStep - 1].element);
    }
  };

  const scrollToElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    if (showTour) {
      scrollToElement(tourSteps[currentStep].element);
    }
  }, [showTour]);

  return (
    <>
      {/* Tour Button - Always visible */}
      <TourButton onClick={startTour} />
      
      {showBanner && (
        <div className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <button onClick={() => setShowBanner(false)} className="absolute top-2 right-2 text-white hover:text-gray-200">
            <X size={16} />
          </button>
          <h3 className="font-bold text-lg mb-2">Discover Our New Website</h3>
          <p className="mb-4">Take a quick tour to see what's changed and explore new features.</p>
          <Button onClick={startTour} variant="secondary" className="w-full">Start Tour</Button>
        </div>
      )}

      {showTour && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">{tourSteps[currentStep].title}</h3>
              <button onClick={endTour} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">{tourSteps[currentStep].description}</p>
            <div className="flex justify-between">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                disabled={currentStep === 0}
                className={cn(currentStep === 0 && "opacity-50 cursor-not-allowed")}
              >
                Previous
              </Button>
              <div className="flex space-x-1 items-center">
                {tourSteps.map((_, index) => (
                  <span 
                    key={index} 
                    className={cn(
                      "h-2 w-2 rounded-full", 
                      index === currentStep ? "bg-primary" : "bg-gray-300"
                    )}
                  />
                ))}
              </div>
              <Button onClick={nextStep}>
                {currentStep === tourSteps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourGuide;
