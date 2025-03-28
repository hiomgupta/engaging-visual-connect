
import React from 'react';
import { 
  Video, FileText, MessageSquare, 
  BarChart2, Search, Play, PenTool, Settings, 
  Globe, Mic, Share2, Monitor, 
  Layers, Users, Zap, Clock 
} from 'lucide-react';

interface InteractionsOverviewProps {
  className?: string;
}

const InteractionsOverview = ({ className = '' }: InteractionsOverviewProps) => {
  const interactions = [
    {
      icon: <Video className="h-10 w-10 text-blue-600" />,
      title: "DIY Interactivity for Videos",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      title: "In-Video Quizzes",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "In-Video Forms",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "In-Video Lead Generation",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Call-to-Action (CTA) Buttons",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Interactive Short Videos",
    },
    {
      icon: <Play className="h-10 w-10 text-blue-600" />,
      title: "Live Streaming Interaction",
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Searchable Video Content",
    },
    {
      icon: <Monitor className="h-10 w-10 text-blue-600" />,
      title: "Picture-in-Picture (PiP)",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
      title: "User Engagement Analytics",
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-600" />,
      title: "Content Creation and Editing Tools",
    },
    {
      icon: <PenTool className="h-10 w-10 text-blue-600" />,
      title: "Multilingual AI Voice Personalization",
    },
    {
      icon: <Share2 className="h-10 w-10 text-blue-600" />,
      title: "Social Sharing and Embedding",
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      title: "Customizable Video Player",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Integration with Third-Party Tools",
    }
  ];

  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Interactive Video Capabilities</h2>
          <p className="text-lg text-slate-600">
            KPoint's comprehensive suite of interactive video features transforms how enterprises communicate, train, and share knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {interactions.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractionsOverview;
