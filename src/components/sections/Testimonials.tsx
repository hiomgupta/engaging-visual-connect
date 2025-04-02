
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  className?: string;
}

const Testimonials = ({ className = '' }: TestimonialsProps) => {
  const testimonials = [
    {
      quote: "KPoint's video platform has revolutionized our training process. We've seen a 40% increase in information retention and significantly faster onboarding times.",
      author: "Sarah Johnson",
      position: "Chief Learning Officer",
      company: "Global Tech Solutions"
    },
    {
      quote: "The interactive video capabilities have transformed how we communicate complex product information. Our customer support calls have decreased by 35% since implementation.",
      author: "Michael Chen",
      position: "VP of Customer Experience",
      company: "Innovate Financial Services"
    },
    {
      quote: "KPoint's analytics provide invaluable insights into how our employees engage with training content. This data-driven approach has helped us optimize our L&D strategy.",
      author: "David Rodriguez",
      position: "Director of Learning",
      company: "Health Innovations Inc."
    }
  ];

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Hear from business leaders who have transformed their enterprise communications with KPoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-8 shadow-sm border border-gray-300 relative">
              <Quote className="absolute text-gray-200 h-24 w-24 -top-4 -left-4 opacity-50" />
              <div className="relative">
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-300">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-700">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
