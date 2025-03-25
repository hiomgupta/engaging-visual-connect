
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

type Feature = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  image: string;
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState('xpresso');

  const features: Feature[] = [
    {
      id: 'xpresso',
      title: 'XPRESSO',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <path d="M12 3v12"></path>
          <path d="m8 11 4 4 4-4"></path>
          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
        </svg>
      ),
      description: 'Effortless Video Creation with drag-and-drop editing, templates, and AI enhancements.',
      benefits: [
        'Intuitive drag-and-drop interface',
        'Pre-built templates for every use case',
        'AI-powered editing suggestions',
        'Quick rendering and publishing'
      ],
      image: 'https://dummyimage.com/800x600/e2e8f0/3b82f6&text=XPRESSO+Dashboard'
    },
    {
      id: 'koel',
      title: 'KOEL',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
          <path d="M15.5 14 18 16.5"></path>
          <path d="M8.5 14 6 16.5"></path>
          <path d="M3 16.5h.5"></path>
          <path d="M20.5 16.5H20"></path>
        </svg>
      ),
      description: 'AI Voice Personalization with multilingual voiceovers and tone adjustments.',
      benefits: [
        'Support for 100+ languages and dialects',
        'Natural-sounding AI voice generation',
        'Customizable tone and emotion settings',
        'Seamless integration with XPRESSO'
      ],
      image: 'https://dummyimage.com/800x600/e2e8f0/3b82f6&text=KOEL+Voice+Tool'
    },
    {
      id: 'play',
      title: 'PLAY',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m10 8 6 4-6 4V8Z"></path>
        </svg>
      ),
      description: 'Interactive Experiences with quizzes, hotspots, and branching scenarios.',
      benefits: [
        'Embedded quizzes and knowledge checks',
        'Interactive hotspots and clickable elements',
        'Branching scenarios for personalized journeys',
        'Detailed engagement analytics'
      ],
      image: 'https://dummyimage.com/800x600/e2e8f0/3b82f6&text=PLAY+Interactive+Video'
    },
    {
      id: 'fab',
      title: 'FAB',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 14v1"></path>
          <path d="M9 19v2"></path>
          <path d="M9 3v2"></path>
          <path d="M9 9v1"></path>
          <path d="M15 14v1"></path>
          <path d="M15 19v2"></path>
          <path d="M15 3v2"></path>
          <path d="M15 9v1"></path>
        </svg>
      ),
      description: 'Social Video Boosters for short-form content creation and sharing.',
      benefits: [
        'Short-form vertical video creation',
        'Social media optimization tools',
        'One-click multi-platform publishing',
        'Engagement tracking across platforms'
      ],
      image: 'https://dummyimage.com/800x600/e2e8f0/3b82f6&text=FAB+Social+Video'
    },
    {
      id: 'tube',
      title: 'TUBE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      description: 'Hosting & Analytics with secure hosting, detailed insights, and powerful search.',
      benefits: [
        'Enterprise-grade security and compliance',
        'Advanced analytics and viewer insights',
        'AI-powered content search capabilities',
        'Seamless integration with other KPoint tools'
      ],
      image: 'https://dummyimage.com/800x600/e2e8f0/3b82f6&text=TUBE+Analytics+Dashboard'
    }
  ];

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-20 md:py-32 bg-white" id="features">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full">
              <p className="text-orange-600 text-sm font-medium">Powerful Features</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Video Platform.<br />
              <span className="orange-text-gradient">All Possibilities.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Create, engage, and analyze with KPoint's comprehensive suite of video tools designed for enterprise needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Feature tabs */}
          <FadeIn direction="right" className="space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all hover-scale ${
                  activeFeature === feature.id
                    ? 'bg-blue-50 border-blue-100 border'
                    : 'bg-gray-50 hover:bg-blue-50/50'
                }`}
              >
                <div className={`p-3 rounded-lg ${
                  activeFeature === feature.id
                    ? 'bg-blue-100'
                    : 'bg-gray-100'
                }`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </button>
            ))}
          </FadeIn>

          {/* Feature content */}
          <FadeIn delay={200} className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{currentFeature.title}</h3>
                  <p className="text-slate-600 mb-6">{currentFeature.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {currentFeature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="text-blue-600 w-5 h-5 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button href={`/products-features#${currentFeature.id}`}>
                    Learn more about {currentFeature.title}
                  </Button>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={currentFeature.image} 
                    alt={currentFeature.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Features;
