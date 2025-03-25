
import React from 'react';
import { BarChart2, Video, MessageSquare, FileText, Play, PenTool, Search } from 'lucide-react';

const InteractionsOverview = () => {
  const interactions = [
    {
      icon: <Video className="h-10 w-10 text-blue-600" />,
      title: "Video Creation",
      description: "Create professional videos with intuitive tools, AI-assisted editing, and templates."
    },
    {
      icon: <PenTool className="h-10 w-10 text-blue-600" />,
      title: "Voice Personalization",
      description: "Transform text to speech with multilingual AI voiceovers and tone customization."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      title: "Interactive Elements",
      description: "Engage viewers with quizzes, hotspots, and branching scenarios within videos."
    },
    {
      icon: <Play className="h-10 w-10 text-blue-600" />,
      title: "Social Integration",
      description: "Create and share short-form video content optimized for social platforms."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
      title: "Analytics Dashboard",
      description: "Track viewer engagement, content performance, and gain actionable insights."
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Video Search",
      description: "Powerful search functionality for finding content across your video library."
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Documentation",
      description: "Create video-based documentation and knowledge bases for better retention."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Powerful Video Interactions</h2>
          <p className="text-lg text-slate-600">
            KPoint offers a comprehensive suite of video interactions to transform how your enterprise communicates, trains, and shares knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interactions.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractionsOverview;
