
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import VideoModal from '@/components/VideoModal';
import { Play } from 'lucide-react';

const KPOINT_VIDEO_URL = "https://ccoe.kpoint.com/app/video/gcc-805d6533-3ba2-4173-9310-396d260ccb71/v4/embedded?nv3Embed=1&trk_page_title=Home%2520%257C%2520KPOINThome%2520%257C%2520KPOINT&trk_viewport=width%253Ddevice-width%252C%2520initial-scale%253D1%252C%2520shrink-to-fit%253Dno&trk_title=Home&trk_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_author=KPOINT%2520Technologies&trk_og_title=Home&trk_og_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_og_site_name=Home&autoplay=false&loop=true&playerSkinType=social&search=false&toc=false&muted=true&source_url=aHR0cHM6Ly93d3cua3BvaW50LmNvbS8=#msgToken=token_gcc-805d6533-3ba2-4173-9310-396d260ccb71_1";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const startTour = () => {
    navigate('/home', { state: { startTour: true } });
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
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={startTour}
            size="lg"
            className="bg-gray-900 text-white hover:bg-black"
          >
            Start Tour
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setIsVideoModalOpen(true)}
            icon={<Play size={18} className="text-gray-900" />}
            iconPosition="left"
            className="border-gray-400 text-gray-900"
          >
            Watch Introduction
          </Button>
        </div>
      </FadeIn>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        videoSrc={KPOINT_VIDEO_URL}
      />
    </div>
  );
};

export default LandingPage;
