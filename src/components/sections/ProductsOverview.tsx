
import React from 'react';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import Features from '@/components/sections/Features';
interface ProductsOverviewProps {
  className?: string;
}

const ProductsOverview = ({ className = '' }: ProductsOverviewProps) => {
  return (
    <section className={`py-24 bg-white ${className}`} id="products">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
              <p className="text-blue-600 text-sm font-medium">Complete Solution</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="premium-text-gradient">One Platform</span> for the<br />
              Entire Video Lifecycle
            </h2>
            <p className="text-lg text-slate-600">
              From creation to analytics, KPoint provides everything you need for enterprise video success.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Create section */}
          <FadeIn delay={100} direction="up" className="col-span-1 lg:col-span-3">
            <div className="bg-slate-700 rounded-2xl overflow-hidden premium-shadow">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  <div className="md:w-1/2">
                    <div className="inline-block mb-4 px-3 py-1 bg-blue-900/50 rounded-full">
                      <p className="text-blue-400 text-sm font-medium">Create</p>
                    </div>
                    <h3 className="text-3xl text-white font-bold mb-4">Effortless Video Creation</h3>
                    <p className="text-slate-300 mb-6">
                      Powerful tools that make video creation simple for everyone in your organization.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-900/50 rounded-lg mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                            <path d="M12 3v12"></path>
                            <path d="m8 11 4 4 4-4"></path>
                            <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">XPRESSO</h4>
                          <p className="text-slate-400 text-sm">Drag-and-drop video creation</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-900/50 rounded-lg mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                            <path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
                            <path d="M15.5 14 18 16.5"></path>
                            <path d="M8.5 14 6 16.5"></path>
                            <path d="M3 16.5h.5"></path>
                            <path d="M20.5 16.5H20"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">KOEL</h4>
                          <p className="text-slate-400 text-sm">AI voice personalization</p>
                        </div>
                      </div>
                    </div>
                    <Button href="Features" className="bg-white text-blue-600 hover:bg-blue-50">
                      Explore creation tools
                    </Button>
                  </div>
                  
                  <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
                    <iframe
                      src="https://ccoe.kpoint.com/app/video/gcc-0f799164-d7ec-45dd-8c49-bab11b7c59a1/v4/embedded?nv3Embed=1&trk_page_title=XPRESSO%2520%257C%2520KPOINT&trk_viewport=width%253Ddevice-width%252C%2520initial-scale%253D1%252C%2520shrink-to-fit%253Dno&trk_title=XPRESSO&trk_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_author=KPOINT%2520Technologies&trk_og_title=XPRESSO&trk_og_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_og_site_name=XPRESSO&autoplay=true&loop=true&playerSkinType=social&search=false&toc=false&playercontrols=%7B%22hide%22%3A%22all%22%7D&muted=true&source_url=aHR0cHM6Ly93d3cua3BvaW50LmNvbS9wcm9kdWN0cy94cHJlc3NvLw==#msgToken=token_gcc-0f799164-d7ec-45dd-8c49-bab11b7c59a1_2"
                      title="KPoint Creation Tools"
                      className="w-full h-full"
                      allow="autoplay; fullscreen"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Engage section */}
          <FadeIn delay={200} direction="up" className="col-span-1 md:col-span-2">
            <div className="bg-blue-600 rounded-2xl overflow-hidden h-full premium-shadow">
              <div className="p-8 md:p-10">
                <div className="inline-block mb-4 px-3 py-1 bg-blue-700 rounded-full">
                  <p className="text-blue-200 text-sm font-medium">Engage</p>
                </div>
                <h3 className="text-3xl text-white font-bold mb-4">Interactive Experiences</h3>
                <p className="text-blue-100 mb-6">
                  Transform passive viewers into active participants with interactive features.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-700 rounded-lg mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m10 8 6 4-6 4V8Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">PLAY</h4>
                      <p className="text-blue-200 text-sm">Interactive video elements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-700 rounded-lg mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
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
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">FAB</h4>
                      <p className="text-blue-200 text-sm">Social-ready short videos</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-lg aspect-video mb-8">
                <iframe
                      src="https://ccoe.kpoint.com/app/video/gcc-73eaeee1-fd11-4125-ba43-d8cb5295d450/v4/embedded?nv3Embed=1&trk_page_title=PLAY%2520%257C%2520KPOINT&trk_viewport=width%253Ddevice-width%252C%2520initial-scale%253D1%252C%2520shrink-to-fit%253Dno&trk_title=PLAY&trk_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_author=KPOINT%2520Technologies&trk_og_title=PLAY&trk_og_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_og_site_name=PLAY&autoplay=true&loop=true&playerSkinType=social&search=false&toc=false&playercontrols=%7B%22hide%22%3A%22all%22%7D&resume=false&showPlayIconOnMobile=false&like=false&add-widgets=utils%2Cmarkup%2Cfontloader%2Ckpw_branching%2Ckpw_actionbutton%2Ccustomform&muted=true&source_url=aHR0cHM6Ly93d3cua3BvaW50LmNvbS9wcm9kdWN0cy9wbGF5Lw==#msgToken=token_gcc-73eaeee1-fd11-4125-ba43-d8cb5295d450_3"
                      title="KPoint Creation Tools"
                      className="w-full h-full"
                      allow="autoplay; fullscreen"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                </div>
                
                <Button href="/Features" className="bg-white text-blue-600 hover:bg-blue-50">
                  Explore engagement tools
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Analyze section */}
          <FadeIn delay={300} direction="up">
            <div className="bg-orange-500 rounded-2xl overflow-hidden h-full premium-shadow">
              <div className="p-8 md:p-10">
                <div className="inline-block mb-4 px-3 py-1 bg-orange-600 rounded-full">
                  <p className="text-orange-100 text-sm font-medium">Analyze</p>
                </div>
                <h3 className="text-3xl text-white font-bold mb-4">Powerful Analytics</h3>
                <p className="text-orange-100 mb-6">
                  Gain actionable insights from viewer behavior and engagement metrics.
                </p>
                
                <div className="flex items-start gap-3 mb-8">
                  <div className="p-2 bg-orange-600 rounded-lg mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-100">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">TUBE</h4>
                    <p className="text-orange-100 text-sm">Hosting & analytics dashboard</p>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-lg aspect-video  mb-8">
                <iframe
                      src="https://ccoe.kpoint.com/app/video/gcc-0f799164-d7ec-45dd-8c49-bab11b7c59a1/v4/embedded?nv3Embed=1&trk_page_title=XPRESSO%2520%257C%2520KPOINT&trk_viewport=width%253Ddevice-width%252C%2520initial-scale%253D1%252C%2520shrink-to-fit%253Dno&trk_title=XPRESSO&trk_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_author=KPOINT%2520Technologies&trk_og_title=XPRESSO&trk_og_description=learn%2520new%2520experience%2520with%2520KPOINT.&trk_og_site_name=XPRESSO&autoplay=true&loop=true&playerSkinType=social&search=false&toc=false&playercontrols=%7B%22hide%22%3A%22all%22%7D&muted=true&source_url=aHR0cHM6Ly93d3cua3BvaW50LmNvbS9wcm9kdWN0cy94cHJlc3NvLw==#msgToken=token_gcc-0f799164-d7ec-45dd-8c49-bab11b7c59a1_2"
                      title="KPoint Creation Tools"
                      className="w-full h-full"
                      allow="autoplay; fullscreen"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                </div>
                
                <Button href="/Features" className="bg-white text-blue-600 hover:bg-blue-50">
                  Explore analytics tools
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
