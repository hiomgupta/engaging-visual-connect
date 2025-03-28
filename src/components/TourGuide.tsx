import React, { useState, useEffect } from 'react';

interface TourStep {
  target: string;
  content: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

const TourGuide = () => {
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if tour should start based on local storage or cookies
    const tourCompleted = localStorage.getItem('tourCompleted');
    if (!tourCompleted) {
      setIsTourActive(true);
    }
  }, []);

  const startTour = () => {
    setIsTourActive(true);
    setCurrentStep(0);
  };

  const endTour = () => {
    setIsTourActive(false);
    setCurrentStep(0);
    localStorage.setItem('tourCompleted', 'true');
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Updated tour steps to match the Intro.js tour
  const tourSteps = [
    {
      target: "header",
      content: "Step 1: Streamlined sticky nav with 3 categories—faster, simpler access for busy execs.",
      placement: "bottom"
    },
    {
      target: ".hero-section",
      content: "Step 2: Strong tagline 'All Videos. All Possibilities.' with a brief explainer—tells execs what we do in 0.05s.",
      placement: "bottom"
    },
    {
      target: ".hero-section button[aria-label*='video']",
      content: "Step 3: Optional video playback—click to watch, but we could switch to autoplay. Thoughts?",
      placement: "right"
    },
    {
      target: ".hero-section .flex.flex-wrap.gap-4",
      content: "Step 4: Strong CTAs in F-pattern—'Watch Demo' and 'Start Free Trial' drive immediate action.",
      placement: "bottom"
    },
    {
      target: ".hero-section .flex.flex-wrap.items-center.gap-6",
      content: "Step 5: Logos up front—ICICI Lombard and others build trust right after the hero.",
      placement: "bottom"
    },
    {
      target: ".products-section",
      content: "Step 6: Complete Solution—products split into Create, Engage, Analyze for clarity and impact.",
      placement: "top"
    },
    {
      target: ".interactions-section",
      content: "Step 7: Powerful Features—all key capabilities listed upfront for instant appeal.",
      placement: "top"
    },
    {
      target: ".case-studies-section",
      content: "Step 8: Case Studies—real stats like '93 Days Saved' prove KPoint's impact.",
      placement: "top"
    },
    {
      target: ".testimonials-section",
      content: "Step 9: Testimonials—reinforces trust with client logos and implied quotes after case studies.",
      placement: "top"
    }
  ];

  // Make sure each section gets highlighted properly
  useEffect(() => {
    if (isTourActive && currentStep >= 0 && currentStep < tourSteps.length) {
      const targetSelector = tourSteps[currentStep].target;
      const targetElement = document.querySelector(targetSelector);
      
      if (targetElement) {
        // Add highlight to the target element
        targetElement.classList.add('tour-highlight');
        
        // Scroll into view if needed
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Remove previous highlights
        document.querySelectorAll('.tour-highlight').forEach((el) => {
          if (el !== targetElement) {
            el.classList.remove('tour-highlight');
          }
        });
      }
    }
    
    return () => {
      // Clean up highlights when effect changes
      document.querySelectorAll('.tour-highlight').forEach((el) => {
        el.classList.remove('tour-highlight');
      });
    };
  }, [isTourActive, currentStep, tourSteps]);

  if (!isTourActive) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded shadow-md cursor-pointer" onClick={startTour}>
        Start Tour
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Step {currentStep + 1}/{tourSteps.length}</h2>
        <p className="mb-4">{tourSteps[currentStep].content}</p>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={nextStep}
          >
            {currentStep === tourSteps.length - 1 ? 'End Tour' : 'Next'}
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={endTour}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TourGuide;
