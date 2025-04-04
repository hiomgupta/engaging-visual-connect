
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
  videoSrc = "https://ccoe.kpoint.com/app/video/gcc-805d6533-3ba2-4173-9310-396d260ccb71/v4/embedded?nv3Embed=1&trk_page_title=Home%2520%257C%2520KPOINThome%2520%257C%2520KPOINT&trk_viewport=width%253Ddevice-width%252C%2520initial-scale%253D1%252C%2520shrink-to-fit%253Dno&trk_title=Home&trk_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_author=KPOINT%2520Technologies&trk_og_title=Home&trk_og_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_og_site_name=Home&autoplay=false&loop=true&playerSkinType=social&search=false&toc=false&muted=true&source_url=aHR0cHM6Ly93d3cua3BvaW50LmNvbS8=#msgToken=token_gcc-805d6533-3ba2-4173-9310-396d260ccb71_1" // Placeholder video
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
