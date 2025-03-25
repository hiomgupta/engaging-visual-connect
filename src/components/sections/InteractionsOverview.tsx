
import React from 'react';
import { BarChart2, Video, MessageSquare, FileText, Play, PenTool, Search } from 'lucide-react';

const InteractionsOverview = () => {
  const interactions = [
    {
      icon: <Video className="h-10 w-10 text-blue-600" />,
      title: "Video Creation",
      description: "Create professional videos with intuitive tools, AI-assisted editing, and templates.",
      example: "Example: Training video created in under 10 minutes with drag-and-drop tools."
    },
    {
      icon: <PenTool className="h-10 w-10 text-blue-600" />,
      title: "Voice Personalization",
      description: "Transform text to speech with multilingual AI voiceovers and tone customization.",
      example: "Example: Convert product documentation into 15 languages with natural-sounding voices."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      title: "Interactive Elements",
      description: "Engage viewers with quizzes, hotspots, and branching scenarios within videos.",
      example: "Example: Product training with interactive knowledge checks that improve retention by 40%."
    },
    {
      icon: <Play className="h-10 w-10 text-blue-600" />,
      title: "Social Integration",
      description: "Create and share short-form video content optimized for social platforms.",
      example: "Example: Convert long product demos into 30-second social highlights with one click."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
      title: "Analytics Dashboard",
      description: "Track viewer engagement, content performance, and gain actionable insights.",
      example: "Example: Identify drop-off points in training videos to improve completion rates."
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Video Search",
      description: "Powerful search functionality for finding content across your video library.",
      example: "Example: Instantly locate specific product mentions across thousands of videos."
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Documentation",
      description: "Create video-based documentation and knowledge bases for better retention.",
      example: "Example: Convert text-based procedures into visual guides that reduce support tickets."
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
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-600 mb-4">{item.description}</p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-sm text-blue-600 italic">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractionsOverview;
