import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('habitFlowData');
    return savedData ? JSON.parse(savedData) : {
      habits: [],
      completions: {},
      streaks: {},
      userProfile: { name: 'Demo User', joinDate: new Date().toISOString() }
    };
  });

  useEffect(() => {
    localStorage.setItem('habitFlowData', JSON.stringify(userData));
  }, [userData]);

  const showDashboard = () => setCurrentView('dashboard');
  const showHome = () => setCurrentView('home');
  const updateUserData = (newData) => setUserData(prev => ({ ...prev, ...newData }));

  if (currentView === 'dashboard') {
    return <Dashboard onBack={showHome} userData={userData} updateUserData={updateUserData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header onDemoClick={showDashboard} />
      <Hero onDemoClick={showDashboard} />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;

