
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

type CaseStudy = {
  id: string;
  company: string;
  industry: string;
  statistic: string;
  description: string;
  image: string;
  color: string;
};

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies: CaseStudy[] = [
    {
      id: '30-percent-reduction',
      company: 'IT Multinational',
      industry: 'Technology',
      statistic: '30%',
      description: 'Reduction in ticket resolution time by implementing KPoint TUBE for searchable knowledge base videos.',
      image: 'https://dummyimage.com/600x400/e2e8f0/475569&text=IT+MNC+Case+Study',
      color: 'blue'
    },
    {
      id: '50-percent-increase',
      company: 'Insurance Leader',
      industry: 'Insurance',
      statistic: '50%',
      description: 'Increase in accessibility with multilingual training content powered by KPoint KOEL voice technology.',
      image: 'https://dummyimage.com/600x400/e2e8f0/475569&text=Insurance+Case+Study',
      color: 'orange'
    },
    {
      id: '93-days-saved',
      company: 'Hedge Fund',
      industry: 'Finance',
      statistic: '93',
      description: 'Days saved annually in executive communication by replacing meetings with interactive PLAY videos.',
      image: 'https://dummyimage.com/600x400/e2e8f0/475569&text=Hedge+Fund+Case+Study',
      color: 'green'
    },
    {
      id: '40-less-support',
      company: 'E-commerce Platform',
      industry: 'Retail',
      statistic: '40%',
      description: 'Fewer support calls after implementing FAB short-form tutorial videos for common customer questions.',
      image: 'https://dummyimage.com/600x400/e2e8f0/475569&text=E-commerce+Case+Study',
      color: 'purple'
    }
  ];

  const getStatColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-600';
      case 'orange': return 'text-orange-500';
      case 'green': return 'text-emerald-600';
      case 'purple': return 'text-purple-600';
      default: return 'text-blue-600';
    }
  };

  const currentCase = caseStudies[activeCase];
  
  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };
  
  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50" id="case-studies">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
              <p className="text-blue-600 text-sm font-medium">Success Stories</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for<br />
              <span className="premium-text-gradient">Real Enterprises</span>
            </h2>
            <p className="text-lg text-slate-600">
              See how leading companies transform their video communication with KPoint's platform.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Case study content */}
          <FadeIn direction="right">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg premium-shadow">
              <div className="mb-6">
                <div className="px-3 py-1 bg-gray-100 inline-block rounded-full mb-4">
                  <p className="text-sm text-slate-600">{currentCase.industry}</p>
                </div>
                <h3 className="text-2xl font-bold mb-2">{currentCase.company}</h3>
                <div className="flex items-end gap-2 mb-4">
                  <p className={`text-6xl font-bold ${getStatColor(currentCase.color)}`}>
                    {currentCase.statistic}
                  </p>
                  <p className="text-xl font-medium pb-2">
                    {currentCase.id === '93-days-saved' ? 'Days Saved' : '%'}
                  </p>
                </div>
                <p className="text-slate-600 text-lg mb-8">
                  {currentCase.description}
                </p>
                
                <Button 
                  href={`/resources/casestudy/${currentCase.id}`}
                  icon={<ArrowRight size={16} />}
                >
                  Read full case study
                </Button>
              </div>
              
              {/* Navigation dots */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                <div className="flex gap-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCase(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === activeCase
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`View case study ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevCase}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Previous case study"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <button
                    onClick={nextCase}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next case study"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Case study image */}
          <FadeIn direction="left" delay={200}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl premium-shadow">
                <img 
                  src={currentCase.image} 
                  alt={currentCase.company} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stat card */}
              <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white rounded-2xl p-5 shadow-xl premium-shadow border border-gray-100 animate-float">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    currentCase.color === 'blue' ? 'bg-blue-50' :
                    currentCase.color === 'orange' ? 'bg-orange-50' :
                    currentCase.color === 'green' ? 'bg-emerald-50' :
                    'bg-purple-50'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={
                      currentCase.color === 'blue' ? 'text-blue-600' :
                      currentCase.color === 'orange' ? 'text-orange-500' :
                      currentCase.color === 'green' ? 'text-emerald-600' :
                      'text-purple-600'
                    }>
                      <path d="M2 20h.01"></path>
                      <path d="M7 20v-4"></path>
                      <path d="M12 20v-8"></path>
                      <path d="M17 20V8"></path>
                      <path d="M22 4v16"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">ROI IMPACT</p>
                    <p className="text-lg font-bold text-slate-900">Measurable Results</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* More case studies button */}
        <div className="text-center mt-16">
          <Button href="/resources#case-studies" variant="outline">
            View all case studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
