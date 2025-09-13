// import React from 'react';
// import { Target, Twitter, Github, Mail } from 'lucide-react';

// const Footer = () => {
//   const footerSections = [
//     {
//       title: "Product",
//       links: ["Features", "Pricing", "Download", "Changelog"]
//     },
//     {
//       title: "Company", 
//       links: ["About", "Blog", "Careers", "Contact"]
//     },
//     {
//       title: "Resources",
//       links: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service"]
//     }
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid md:grid-cols-4 gap-12">
//           <div className="md:col-span-1">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
//                 <Target className="h-7 w-7 text-white" />
//               </div>
//               <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                 HabitFlow
//               </span>
//             </div>
//             <p className="text-gray-300 mb-8 text-lg leading-relaxed">
//               Transform your life one habit at a time. Build lasting routines that stick with our intelligent habit tracking platform.
//             </p>
//             <div className="flex space-x-6">
//               <Twitter className="h-8 w-8 text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 transform hover:scale-125" />
//               <Github className="h-8 w-8 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-125" />
//               <Mail className="h-8 w-8 text-gray-400 hover:text-green-400 cursor-pointer transition-all duration-300 transform hover:scale-125" />
//             </div>
//           </div>
          
//           {footerSections.map((section, index) => (
//             <div key={index}>
//               <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-6">
//                 {section.title}
//               </h3>
//               <ul className="space-y-4">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-300 text-lg hover:translate-x-2 inline-block">
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
        
//         <div className="border-t border-gray-700 mt-16 pt-8">
//           <p className="text-gray-400 text-lg text-center">
//             © 2025 HabitFlow. All rights reserved. 🌱
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { Target, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Download", "Changelog"]
    },
    {
      title: "Company", 
      links: ["About", "Blog", "Careers", "Contact"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service"]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Footer Content - Made responsive */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Brand Section - Made responsive */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                HabitFlow
              </span>
            </div>
            
            {/* Description - Made responsive */}
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Transform your life one habit at a time. Build lasting routines that stick with our intelligent habit tracking platform.
            </p>
            
            {/* Social Icons - Made responsive */}
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6">
              <Twitter className="h-7 w-7 sm:h-8 sm:w-8 text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 transform hover:scale-125" />
              <Github className="h-7 w-7 sm:h-8 sm:w-8 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-125" />
              <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-gray-400 hover:text-green-400 cursor-pointer transition-all duration-300 transform hover:scale-125" />
            </div>
          </div>
          
          {/* Footer Sections - Made responsive */}
          {footerSections.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide mb-4 sm:mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-300 text-base sm:text-lg hover:translate-x-2 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright Section - Made responsive */}
        <div className="border-t border-gray-700 mt-12 sm:mt-14 md:mt-16 pt-6 sm:pt-8">
          <p className="text-gray-400 text-base sm:text-lg text-center">
            © 2025 HabitFlow. All rights reserved. 🌱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
