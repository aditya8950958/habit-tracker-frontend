// import React from 'react';
// import { Target, BarChart3, Calendar, Smartphone, Users, Zap } from 'lucide-react';

// const Features = () => {
//   const features = [
//     {
//       icon: Target,
//       title: "Smart Habit Tracking",
//       description: "Set custom goals, track streaks, and build consistency with intelligent reminders and progress insights.",
//       bgColor: "from-green-50 to-green-100",
//       borderColor: "border-green-200",
//       iconBg: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: BarChart3,
//       title: "Detailed Analytics",
//       description: "Visualize your progress with beautiful charts, identify patterns, and understand your habit-building journey.",
//       bgColor: "from-emerald-50 to-emerald-100",
//       borderColor: "border-emerald-200",
//       iconBg: "from-emerald-500 to-teal-600"
//     },
//     {
//       icon: Calendar,
//       title: "Flexible Scheduling",
//       description: "Create habits that fit your lifestyle with customizable schedules, frequencies, and time-based goals.",
//       bgColor: "from-teal-50 to-teal-100",
//       borderColor: "border-teal-200",
//       iconBg: "from-teal-500 to-cyan-600"
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile-First Design",
//       description: "Access your habits anywhere with our responsive design that works perfectly on all devices.",
//       bgColor: "from-lime-50 to-lime-100",
//       borderColor: "border-lime-200",
//       iconBg: "from-lime-500 to-green-600"
//     },
//     {
//       icon: Users,
//       title: "Community Support",
//       description: "Join thousands of habit builders, share achievements, and stay motivated with community challenges.",
//       bgColor: "from-emerald-50 to-green-100",
//       borderColor: "border-emerald-200",
//       iconBg: "from-emerald-500 to-green-600"
//     },
//     {
//       icon: Zap,
//       title: "Quick Actions",
//       description: "Mark habits complete with one tap, add new routines instantly, and stay in the flow of your day.",
//       bgColor: "from-cyan-50 to-teal-100",
//       borderColor: "border-cyan-200",
//       iconBg: "from-cyan-500 to-teal-600"
//     }
//   ];

//   return (
//     <section id="features" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//             Everything you need to succeed
//           </h2>
//           <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Our comprehensive habit tracking platform provides all the tools and insights you need to build lasting positive changes in your life.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div 
//                 key={index}
//                 className={`bg-gradient-to-br ${feature.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl border ${feature.borderColor} transition-all duration-500 transform hover:-translate-y-4 group`}
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-r ${feature.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
//                   <IconComponent className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-6 text-gray-800">{feature.title}</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;



import React from 'react';
import { Target, BarChart3, Calendar, Smartphone, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Habit Tracking",
      description: "Set custom goals, track streaks, and build consistency with intelligent reminders and progress insights.",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Visualize your progress with beautiful charts, identify patterns, and understand your habit-building journey.",
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      iconBg: "from-emerald-500 to-teal-600"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Create habits that fit your lifestyle with customizable schedules, frequencies, and time-based goals.",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      iconBg: "from-teal-500 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your habits anywhere with our responsive design that works perfectly on all devices.",
      bgColor: "from-lime-50 to-lime-100",
      borderColor: "border-lime-200",
      iconBg: "from-lime-500 to-green-600"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of habit builders, share achievements, and stay motivated with community challenges.",
      bgColor: "from-emerald-50 to-green-100",
      borderColor: "border-emerald-200",
      iconBg: "from-emerald-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Mark habits complete with one tap, add new routines instantly, and stay in the flow of your day.",
      bgColor: "from-cyan-50 to-teal-100",
      borderColor: "border-cyan-200",
      iconBg: "from-cyan-500 to-teal-600"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Made responsive */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Everything you need to succeed
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Our comprehensive habit tracking platform provides all the tools and insights you need to build lasting positive changes in your life.
          </p>
        </div>
        
        {/* Grid - Made responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${feature.bgColor} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl border ${feature.borderColor} transition-all duration-500 transform hover:-translate-y-4 group`}
              >
                {/* Icon - Made responsive */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                
                {/* Title - Made responsive */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                  {feature.title}
                </h3>
                
                {/* Description - Made responsive */}
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
