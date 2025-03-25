
import { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import VideoModal from '@/components/VideoModal';
import FadeIn from '@/components/animations/FadeIn';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square rounded-full bg-blue-100/50 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/4 w-full max-w-xl aspect-square rounded-full bg-orange-100/40 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <FadeIn direction="right" className="max-w-2xl">
            <div className="inline-block mb-4 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
              <p className="text-blue-600 text-sm font-medium">One Enterprise Video Platform</p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="premium-text-gradient">All Videos.</span><br />
              <span className="text-slate-900">All Possibilities.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Reimagine how you communicate with KPoint's integrated video creation, engagement, and analytics solution trusted by leading enterprises.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/demo" size="lg">
                Get a Demo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsVideoModalOpen(true)}
                icon={<Play size={18} className="text-blue-600" />}
                iconPosition="left"
              >
                Watch how it works
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">Trusted by leading enterprises</p>
              <div className="flex flex-wrap items-center gap-6">
                <img src="https://dummyimage.com/120x40/cbd5e1/475569&text=ICICI+Lombard" alt="ICICI Lombard" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://dummyimage.com/120x40/cbd5e1/475569&text=Bank+of+Baroda" alt="Bank of Baroda" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://dummyimage.com/120x40/cbd5e1/475569&text=Enterprise" alt="Enterprise Client" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </FadeIn>
          
          {/* Hero image/animation */}
          <FadeIn delay={300} direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl premium-shadow border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 to-slate-900/40 z-10"></div>
              <img 
                src="https://dummyimage.com/800x600/4e80f0/ffffff&text=KPoint+Platform" 
                alt="KPoint Platform" 
                className="w-full h-full object-cover"
              />
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
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-12 bg-white rounded-2xl p-4 shadow-lg premium-shadow border border-gray-100 animate-float">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">ENGAGEMENT</p>
                  <p className="text-lg font-bold text-slate-900">50% Increase</p>
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
