
import React from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';

const LandingPage = () => {
  const navigate = useNavigate();

  const startTour = () => {
    navigate('/', { state: { startTour: true } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <FadeIn className="text-center p-8 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-gray-900">
          Explore the new and improved KPoint website
        </h1>
        <p className="text-xl mb-10 text-gray-700">
          Take a guided tour of our redesigned platform and discover all the new features we've created to enhance your enterprise video experience.
        </p>
        <Button
          onClick={startTour}
          size="lg"
          className="bg-gray-900 text-white hover:bg-black"
        >
          Start Tour
        </Button>
      </FadeIn>
    </div>
  );
};

export default LandingPage;
