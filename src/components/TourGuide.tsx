
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Circle, CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
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
    title: 'Improved Navigation',
    description: 'Our new sticky navigation bar with cleanly organized categories makes finding what you need simpler and faster.',
    position: 'bottom'
  },
  {
    element: '.hero-section h1',
    title: 'Strong Value Proposition',
    description: '"All Videos. All Possibilities." Our punchy tagline clearly communicates what we do and the value we deliver to enterprises.',
    position: 'bottom'
  },
  {
    element: '.hero-section button:nth-of-type(2)',
    title: 'Video Demonstration',
    description: 'Optional video playback gives visitors a quick way to see our platform in action without leaving the page.',
    position: 'right'
  },
  {
    element: '.hero-section .flex.flex-wrap.gap-4',
    title: 'Clear Call-to-Actions',
    description: 'Strong, action-oriented buttons make it easy for visitors to take the next step in their journey.',
    position: 'bottom'
  },
  {
    element: '.hero-section .flex.flex-wrap.items-center',
    title: 'Trust Builders',
    description: 'Logos of companies we\'ve worked with build immediate credibility with new visitors.',
    position: 'top'
  },
  {
    element: '.products-section',
    title: 'Complete Solution Overview',
    description: 'Our platform is divided into three clear categories - CREATE, ENGAGE, and ANALYZE - making our comprehensive offering easy to understand.',
    position: 'bottom'
  },
  {
    element: '.interactions-section',
    title: 'Feature Showcase',
    description: 'We highlight all our powerful features right on the main page so visitors can quickly see everything we offer.',
    position: 'left'
  },
  {
    element: '.case-studies-section',
    title: 'Proven Results',
    description: 'Real-world case studies with measurable results demonstrate the tangible impact our platform delivers.',
    position: 'right'
  },
  {
    element: '.testimonials-section',
    title: 'Customer Testimonials',
    description: 'Authentic feedback from satisfied customers builds confidence in our platform and services.',
    position: 'top'
  }
];

export const TourGuide: React.FC = () => {
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [elementRect, setElementRect] = useState<DOMRect | null>(null);
  
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
    setElementRect(null);
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
      
      // Get element dimensions and position for the highlight overlay
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        setElementRect(rect);
      }, 500); // Give time for the scroll to complete
    }
  };

  // Apply highlight to current step element when tour is shown
  useEffect(() => {
    if (showTour) {
      scrollToElement(tourSteps[currentStep].element);
    }
  }, [showTour, currentStep]);

  // Position the popup based on the current step's position preference
  const getPopupPosition = () => {
    if (!elementRect) return {};
    
    const padding = 20; // Space between element and popup
    const position = tourSteps[currentStep].position || 'bottom';
    
    switch (position) {
      case 'top':
        return {
          bottom: `${window.innerHeight - elementRect.top + padding}px`,
          left: `${elementRect.left + elementRect.width / 2}px`,
          transform: 'translateX(-50%)'
        };
      case 'bottom':
        return {
          top: `${elementRect.bottom + padding}px`,
          left: `${elementRect.left + elementRect.width / 2}px`,
          transform: 'translateX(-50%)'
        };
      case 'left':
        return {
          top: `${elementRect.top + elementRect.height / 2}px`,
          right: `${window.innerWidth - elementRect.left + padding}px`,
          transform: 'translateY(-50%)'
        };
      case 'right':
        return {
          top: `${elementRect.top + elementRect.height / 2}px`,
          left: `${elementRect.right + padding}px`,
          transform: 'translateY(-50%)'
        };
      default:
        return {
          top: `${elementRect.bottom + padding}px`,
          left: `${elementRect.left + elementRect.width / 2}px`,
          transform: 'translateX(-50%)'
        };
    }
  };

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
        <>
          {/* Overlay with spotlight effect */}
          <div className="fixed inset-0 z-50 bg-black/70 transition-opacity duration-300">
            {elementRect && (
              <div 
                className="absolute spotlight-border border-2 border-primary animate-pulse transition-all duration-300"
                style={{
                  top: `${elementRect.top - 10}px`,
                  left: `${elementRect.left - 10}px`,
                  width: `${elementRect.width + 20}px`,
                  height: `${elementRect.height + 20}px`,
                  boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
                  borderRadius: '4px',
                  pointerEvents: 'none',
                }}
              />
            )}
          </div>

          {/* Tour dialog */}
          <div 
            className="fixed z-[60] bg-white rounded-lg shadow-lg p-6 max-w-md mx-4 transition-all duration-300"
            style={getPopupPosition()}
          >
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
                <ArrowLeft size={16} className="mr-2" /> Previous
              </Button>
              <div className="flex space-x-2 items-center">
                {tourSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className="p-1 focus:outline-none"
                    aria-label={`Go to step ${index + 1}`}
                  >
                    {index === currentStep ? (
                      <CircleCheck size={18} className="text-primary" />
                    ) : (
                      <Circle size={16} className="text-gray-300" />
                    )}
                  </button>
                ))}
              </div>
              <Button 
                onClick={nextStep}
              >
                {currentStep === tourSteps.length - 1 ? "Finish" : "Next"} <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TourGuide;
