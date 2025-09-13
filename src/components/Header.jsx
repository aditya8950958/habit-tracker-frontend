// import React from 'react';
// import { Target } from 'lucide-react';

// const Header = ({ onDemoClick }) => {
//   return (
//     <header className="bg-white/90 backdrop-blur-lg border-b border-green-100 sticky top-0 z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
//               <Target className="h-6 w-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//               HabitFlow
//             </span>
//           </div>
          
//           <nav className="hidden md:flex space-x-8">
//             <a href="#features" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105">Features</a>
//             <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium hover:scale-105">How it Works</a>
//             <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium hover:scale-105">Testimonials</a>
//             <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105">Pricing</a>
//           </nav>
          
//           <div className="flex items-center space-x-4">
//             <button className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105">
//               Sign In
//             </button>
//             <button 
//               onClick={onDemoClick}
//               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               Try Demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import { Target, Menu, X } from 'lucide-react';

const Header = ({ onDemoClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-lg border-b border-green-100 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Exact same styling */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              HabitFlow
            </span>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium hover:scale-105">
              How it Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium hover:scale-105">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105">
              Pricing
            </a>
          </nav>
          
          {/* Desktop Right Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105">
              Sign In
            </button>
            <button 
              onClick={onDemoClick}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Try Demo
            </button>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-green-600 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu - Only shows when toggled */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-100 py-4 space-y-4">
            <nav className="space-y-2">
              <a 
                href="#features" 
                className="block px-4 py-2 text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:bg-green-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block px-4 py-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium hover:bg-emerald-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="#testimonials" 
                className="block px-4 py-2 text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium hover:bg-teal-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="block px-4 py-2 text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:bg-green-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
            </nav>
            
            {/* Mobile Buttons */}
            <div className="space-y-3 pt-3 border-t border-green-100">
              <button 
                className="w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:bg-green-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </button>
              <button 
                onClick={() => {
                  onDemoClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Try Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


