
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoSrc = "https://player.vimeo.com/video/76979871?autoplay=1" // Placeholder video
}) => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      // Reset video when modal closes
      videoRef.current.src = videoSrc;
    }
  }, [isOpen, videoSrc]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
          <iframe
            ref={videoRef}
            src={isOpen ? videoSrc : ''}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="KPoint Demo Video"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
