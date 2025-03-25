
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log('Form submitted:', { email, company });
    setSubmitted(true);
    setEmail('');
    setCompany('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="cta">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-3 py-1 bg-blue-900/50 rounded-full">
                <p className="text-blue-300 text-sm font-medium">Get Started Today</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <br />
                <span className="orange-text-gradient">Video Strategy?</span>
              </h2>
              <p className="text-lg text-blue-100">
                Join the leading enterprises already using KPoint to enhance communication, training, and knowledge sharing.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 premium-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Request a Demo</h3>
                  <p className="text-blue-100 mb-6">
                    See KPoint in action with a personalized demo tailored to your enterprise needs.
                  </p>
                  
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 bg-white/20 border border-blue-300/20 rounded-lg text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="name@company.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 bg-white/20 border border-blue-300/20 rounded-lg text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your company"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700"
                      >
                        Get Your Demo
                      </Button>
                    </form>
                  ) : (
                    <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="text-xl font-medium text-white mb-2">Thank You!</h4>
                      <p className="text-blue-100">
                        We've received your request and will contact you shortly.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="hidden md:block border-l border-blue-200/20 pl-8">
                  <h4 className="text-xl font-medium text-white mb-4">Why choose KPoint?</h4>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="p-1.5 bg-blue-900/50 rounded-full mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-blue-100">Complete end-to-end video platform</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1.5 bg-blue-900/50 rounded-full mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-blue-100">Enterprise-grade security & compliance</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1.5 bg-blue-900/50 rounded-full mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-blue-100">Proven results with 1M+ daily views</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1.5 bg-blue-900/50 rounded-full mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-blue-100">Dedicated customer success team</p>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-blue-200/20">
                    <p className="text-blue-200 text-sm mb-3">Already a customer?</p>
                    <Button href="/login" variant="outline" className="border-blue-300/30 text-white hover:bg-blue-900/50">
                      Log in to your account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
