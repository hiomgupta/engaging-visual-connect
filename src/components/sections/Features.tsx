
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

interface FeaturesProps {
  className?: string;
}

const Features = ({ className = '' }: FeaturesProps) => {
  const [activeFeature, setActiveFeature] = useState('xpresso');

  const features: Feature[] = [
    {
      id: 'xpresso',
      title: 'XPRESSO',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      image: 'https://i.ibb.co/x8PCftLS/Screenshot-2025-04-04-072109.png'
    },
    {
      id: 'koel',
      title: 'KOEL',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      image: 'https://www.kpoint.com/static/281955a574e8dd85a5a85dbea3b96094/b50a7/koelMultiVoiceAi.avif'
    },
    {
      id: 'play',
      title: 'PLAY',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      image: 'https://www.kpoint.com/static/d3c7e050d0ba4bb8a1414866cd08fe7a/ecc4b/playUiDesktop.avif'
    },
    {
      id: 'fab',
      title: 'FAB',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      image: 'https://www.kpoint.com/static/127d84c231083be5fbacc6281a8ea97e/abde9/playHyperPersonalization.avif'
    },
    {
      id: 'tube',
      title: 'TUBE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      image: 'https://www.kpoint.com/static/7a3ba96ea720b786d6eb492b3a61234c/abde9/hyperPersonalization.avif'
    }
  ];

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className={`py-20 md:py-32 bg-white ${className}`} id="features">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full">
              <p className="text-gray-800 text-sm font-medium">Powerful Features</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Video Platform.<br />
              <span className="text-black">All Possibilities.</span>
            </h2>
            <p className="text-lg text-gray-700">
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
                    ? 'bg-gray-900 border-gray-800 border text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className={`p-3 rounded-lg ${
                  activeFeature === feature.id
                    ? 'bg-gray-800'
                    : 'bg-gray-200'
                }`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${
                    activeFeature === feature.id ? 'text-white' : 'text-gray-800'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${
                    activeFeature === feature.id ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </button>
            ))}
          </FadeIn>

          {/* Feature content */}
          <FadeIn delay={200} className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-black">{currentFeature.title}</h3>
                  <p className="text-gray-700 mb-6">{currentFeature.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {currentFeature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="text-gray-900 w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-gray-800">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button href={`/products-features#${currentFeature.id}`} className="bg-gray-900 hover:bg-black text-white">
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
