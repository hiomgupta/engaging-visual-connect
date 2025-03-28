
import { useRef } from 'react';
import TourButton from './TourButton';

declare global {
  interface Window {
    introJs: any;
  }
}

const TourGuide = () => {
  const introInstanceRef = useRef<any>(null);

  const startTour = () => {
    if (window.introJs) {
      introInstanceRef.current = window.introJs().setOptions({
        steps: [
          {
            element: document.querySelector('header'),
            intro: "Step 1: Streamlined sticky nav with 3 categories—faster, simpler access for busy execs.",
            position: 'bottom'
          },
          {
            element: document.querySelector('.hero-section'),
            intro: "Step 2: Strong tagline 'All Videos. All Possibilities.' with a brief explainer—tells execs what we do in 0.05s.",
            position: 'bottom'
          },
          {
            element: document.querySelector('.hero-section button'),
            intro: "Step 3: Optional video playback—click to watch, but we could switch to autoplay. Thoughts?",
            position: 'right'
          },
          {
            element: document.querySelector('.hero-section .flex.flex-wrap.gap-4'),
            intro: "Step 4: Strong CTAs in F-pattern—'Watch Demo' and 'Start Free Trial' drive immediate action.",
            position: 'bottom'
          },
          {
            element: document.querySelector('.hero-section .mt-8'),
            intro: "Step 5: Logos up front—ICICI Lombard and others build trust right after the hero.",
            position: 'bottom'
          },
          {
            element: document.querySelector('.products-section'),
            intro: "Step 6: Complete Solution—products split into Create, Engage, Analyze for clarity and impact.",
            position: 'top'
          },
          {
            element: document.querySelector('.interactions-section'),
            intro: "Step 7: Powerful Features—all key capabilities listed upfront for instant appeal.",
            position: 'top'
          },
          {
            element: document.querySelector('.case-studies-section'),
            intro: "Step 8: Case Studies—real stats like '93 Days Saved' prove KPoint's impact.",
            position: 'top'
          },
          {
            element: document.querySelector('.testimonials-section'),
            intro: "Step 9: Testimonials—reinforces trust with client logos and implied quotes after case studies.",
            position: 'top'
          }
        ],
        showBullets: true,
        showProgress: true,
        exitOnOverlayClick: false,
        disableInteraction: false
      }).start();
    }
  };

  return <TourButton onClick={startTour} />;
};

export default TourGuide;
