
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';
import VideoModal from '@/components/VideoModal';
import FadeIn from '@/components/animations/FadeIn';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  return (
    <section className="relative py-20 md:py-32 bg-gray-100 overflow-hidden hero-section">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square rounded-full bg-gray-200 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/4 w-full max-w-xl aspect-square rounded-full bg-gray-200 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <FadeIn direction="right" className="max-w-2xl">
            <div className="inline-block mb-4 px-3 py-1 bg-gray-200 border border-gray-300 rounded-full">
              <p className="text-gray-700 text-sm font-medium">One Enterprise Video Platform</p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">All Videos.</span><br />
              <span className="text-gray-700">All Possibilities.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Reimagine how you communicate with KPoint's integrated video creation, engagement, and analytics solution trusted by leading enterprises.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/demo" size="lg" className="bg-gray-800 text-white hover:bg-gray-700">
                Get a Demo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsVideoModalOpen(true)}
                icon={<Play size={18} className="text-gray-700" />}
                iconPosition="left"
                className="border-gray-400 text-gray-700"
              >
                Watch how it works
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-300">
              <p className="text-sm text-gray-500 mb-3">Trusted by leading enterprises</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="h-8 w-32 bg-gray-300 flex items-center justify-center text-gray-600 text-xs border border-gray-400">ICICI Lombard</div>
                <div className="h-8 w-32 bg-gray-300 flex items-center justify-center text-gray-600 text-xs border border-gray-400">Bank of Baroda</div>
                <div className="h-8 w-32 bg-gray-300 flex items-center justify-center text-gray-600 text-xs border border-gray-400">Enterprise</div>
              </div>
            </div>
          </FadeIn>
          
          {/* Hero image/animation */}
          <FadeIn delay={300} direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-300 bg-gray-200 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/80 to-gray-400/40 z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <span className="text-xl font-medium">KPoint Platform Preview</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-xl font-semibold mb-2">1M+ Video Views Daily</h3>
                <p className="text-white/80">Enterprise-grade video platform for all your needs</p>
              </div>
              
              {/* Play button overlay */}
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-5 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Play size={28} fill="white" />
              </button>
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-12 bg-white rounded-2xl p-4 shadow-md border border-gray-300 animate-float">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-200 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">ENGAGEMENT</p>
                  <p className="text-lg font-bold text-gray-700">50% Increase</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
