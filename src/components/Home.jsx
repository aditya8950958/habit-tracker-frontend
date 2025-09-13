// import React from 'react';
// import { ArrowRight, Play, Leaf } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
//       {/* Subtle Background Elements */}
//       <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/30 rounded-full blur-xl animate-pulse"></div>
//       <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-bounce"></div>
//       <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-400/25 rounded-full blur-xl animate-pulse delay-1000"></div>
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//         <div className="bg-white/15 backdrop-blur-lg text-white px-12 py-8 rounded-3xl inline-block mb-12 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
//           <h1 className="text-5xl md:text-7xl font-bold">
//             Build Better Habits
//           </h1>
//           <Leaf className="inline-block ml-4 h-8 w-8 text-green-300 animate-pulse" />
//         </div>
        
//         <p className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto text-gray-200 leading-relaxed">
//           Transform your life one habit at a time. Track, build, and maintain positive routines that stick.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
//           <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
//             <Leaf className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
//             Get Started Free 
//             <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
//           </button>
          
//           <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
//             <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" /> 
//             Watch Demo
//           </button>
//         </div>
        
//         <div className="flex flex-col md:flex-row gap-12 justify-center items-center text-center">
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-110 shadow-xl">
//             <div className="text-4xl font-bold text-green-300">10K+</div>
//             <div className="text-gray-300 font-medium">Active Users</div>
//           </div>
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-110 shadow-xl">
//             <div className="text-4xl font-bold flex items-center justify-center text-emerald-300">
//               4.8<span className="text-yellow-400 ml-2 text-5xl animate-pulse">â˜…</span>
//             </div>
//             <div className="text-gray-300 font-medium">App Rating</div>
//           </div>
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-110 shadow-xl">
//             <div className="text-4xl font-bold text-teal-300">95%</div>
//             <div className="text-gray-300 font-medium">Success Rate</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { ArrowRight, Play, Leaf } from 'lucide-react';

const Hero = ({ onDemoClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
      {/* Background elements remain the same */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-400/25 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="bg-white/15 backdrop-blur-lg text-white px-12 py-8 rounded-3xl inline-block mb-12 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
          <h1 className="text-5xl md:text-7xl font-bold">
            Build Better Habits
          </h1>
          <Leaf className="inline-block ml-4 h-8 w-8 text-green-300 animate-pulse" />
        </div>
        
        <p className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto text-gray-200 leading-relaxed">
          Transform your life one habit at a time. Track, build, and maintain positive routines that stick.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
            <Leaf className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            Get Started Free 
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={onDemoClick}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          >
            <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" /> 
            Watch Demo
          </button>
        </div>
        
        {/* Stats section remains the same */}
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-110 shadow-xl">
            <div className="text-4xl font-bold text-green-300">10K+</div>
            <div className="text-gray-300 font-medium">Active Users</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-110 shadow-xl">
            <div className="text-4xl font-bold flex items-center justify-center text-emerald-300">
              4.8<span className="text-yellow-400 ml-2 text-5xl animate-pulse">â˜…</span>
            </div>
            <div className="text-gray-300 font-medium">App Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-110 shadow-xl">
            <div className="text-4xl font-bold text-teal-300">95%</div>
            <div className="text-gray-300 font-medium">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
