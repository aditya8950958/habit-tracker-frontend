import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "Start building habits in under 2 minutes",
    "No credit card required",
    "Cancel anytime", 
    "Join 10,000+ successful habit builders"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-green-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-emerald-200/30 rounded-full animate-bounce"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Ready to transform your daily routine?
        </h2>
        
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
          Join thousands of people who have already built lasting habits and transformed their lives. Your journey starts today.
        </p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-3xl mx-auto">
          {benefits.map((text, index) => (
            <div key={index} className="flex items-center group bg-green-50 p-3 sm:p-4 rounded-2xl hover:bg-green-100 transition-all duration-300 transform hover:scale-105 border border-green-200">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-base sm:text-lg">{text}</span>
            </div>
          ))}
        </div>
        
        
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 flex items-center justify-center mx-auto transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-500/30 group w-full sm:w-auto">
          <Leaf className="mr-2 sm:mr-3 md:mr-4 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 group-hover:rotate-12 transition-transform duration-300" />
          Start Building Habits Now 
          <ArrowRight className="ml-2 sm:ml-3 md:ml-4 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 group-hover:translate-x-3 transition-transform duration-300" />
        </button>
        
        
        <p className="text-gray-500 text-base sm:text-lg font-medium">Free forever. No hidden fees.</p>
      </div>
    </section>
  );
};

export default CTA;

