// import React from 'react';
// import { Plus, Target, TrendingUp, Trophy } from 'lucide-react';

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: Plus,
//       title: "Create Your Habits",
//       description: "Add the habits you want to build. Set custom schedules, reminders, and goals that fit your lifestyle.",
//       color: "from-green-500 to-emerald-600",
//       borderColor: "border-green-500",
//       textColor: "group-hover:text-green-600"
//     },
//     {
//       icon: Target,
//       title: "Track Daily Progress",
//       description: "Mark habits as complete each day. Build momentum with streak counters and completion rates.",
//       color: "from-emerald-500 to-teal-600",
//       borderColor: "border-emerald-500",
//       textColor: "group-hover:text-emerald-600"
//     },
//     {
//       icon: TrendingUp,
//       title: "Analyze & Improve",
//       description: "Review your progress with detailed analytics. Identify patterns and optimize your approach.",
//       color: "from-teal-500 to-cyan-600",
//       borderColor: "border-teal-500",
//       textColor: "group-hover:text-teal-600"
//     },
//     {
//       icon: Trophy,
//       title: "Celebrate Success",
//       description: "Earn achievements, unlock milestones, and celebrate your habit-building journey.",
//       color: "from-lime-500 to-green-600",
//       borderColor: "border-lime-500",
//       textColor: "group-hover:text-lime-600"
//     }
//   ];

//   return (
//     <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-100 to-green-50 relative overflow-hidden">
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//             How it works
//           </h2>
//           <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Building better habits has never been easier. Follow these simple steps to transform your daily routines.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {steps.map((step, index) => {
//             const IconComponent = step.icon;
//             return (
//               <div key={index} className="text-center group">
//                 <div className="relative mb-8">
//                   <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform group-hover:scale-125`}>
//                     <IconComponent className="h-12 w-12 text-white" />
//                   </div>
//                   <div className={`absolute -top-3 -right-3 bg-white border-2 ${step.borderColor} text-green-600 text-lg font-bold px-4 py-2 rounded-full shadow-lg group-hover:animate-bounce`}>
//                     {(index + 1).toString().padStart(2, '0')}
//                   </div>
//                 </div>
//                 <h3 className={`text-2xl font-bold mb-6 text-gray-800 ${step.textColor} transition-colors duration-300`}>
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;





import React from 'react';
import { Plus, Target, TrendingUp, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Plus,
      title: "Create Your Habits",
      description: "Add the habits you want to build. Set custom schedules, reminders, and goals that fit your lifestyle.",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-500",
      textColor: "group-hover:text-green-600"
    },
    {
      icon: Target,
      title: "Track Daily Progress",
      description: "Mark habits as complete each day. Build momentum with streak counters and completion rates.",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-500",
      textColor: "group-hover:text-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Analyze & Improve",
      description: "Review your progress with detailed analytics. Identify patterns and optimize your approach.",
      color: "from-teal-500 to-cyan-600",
      borderColor: "border-teal-500",
      textColor: "group-hover:text-teal-600"
    },
    {
      icon: Trophy,
      title: "Celebrate Success",
      description: "Earn achievements, unlock milestones, and celebrate your habit-building journey.",
      color: "from-lime-500 to-green-600",
      borderColor: "border-lime-500",
      textColor: "group-hover:text-lime-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-100 to-green-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Made responsive */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Building better habits has never been easier. Follow these simple steps to transform your daily routines.
          </p>
        </div>
        
        {/* Grid - Made responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Step circle and badge - Made responsive */}
                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform group-hover:scale-125`}>
                    <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <div className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-white border-2 ${step.borderColor} text-green-600 text-base sm:text-lg font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg group-hover:animate-bounce`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                
                {/* Title - Made responsive */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 ${step.textColor} transition-colors duration-300`}>
                  {step.title}
                </h3>
                
                {/* Description - Made responsive */}
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
