
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface TourButtonProps {
  onClick: () => void;
}

const TourButton: React.FC<TourButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="fixed bottom-4 left-4 z-40 rounded-full h-12 w-12 p-0 flex items-center justify-center bg-white shadow-lg hover:bg-slate-50 hover:scale-110 transition-all duration-300 border-primary"
      aria-label="Take a tour"
    >
      <HelpCircle className="h-6 w-6 text-primary" />
    </Button>
  );
};

export default TourButton;
