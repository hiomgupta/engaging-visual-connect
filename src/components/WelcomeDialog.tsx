
import React from 'react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Sparkles } from 'lucide-react';

interface WelcomeDialogProps {
  isOpen: boolean;
  onClose: (startTour: boolean) => void;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ isOpen, onClose }) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            Welcome to KPoint
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg mt-2">
            Let's explore the new and improved KPoint website!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center sm:justify-center">
          <AlertDialogAction 
            onClick={() => onClose(true)}
            className="bg-gray-900 hover:bg-black text-white"
          >
            Start Tour
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default WelcomeDialog;
