import React from 'react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      <ParticleBackground />
      
      {/* Top Navigation Mockup */}
      <div className="absolute top-0 left-0 p-6 z-20">
         <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-brand-orange rounded flex items-center justify-center">
            <span className="font-bold text-white">IG</span>
         </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-100px]">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          Your Security, <br />
          <span className="text-brand-orange">Our Priority</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light">
          The world's premier consultancy for Insider Risk Management.
          <br/>We protect what matters most.
        </p>
        
        <button 
          onClick={scrollToContact}
          className="bg-brand-orange text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-900/20 flex items-center mx-auto gap-2"
        >
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>

      <div className="absolute bottom-0 w-full z-20">
        {/* Placeholder for where the LogoTicker will go in App.tsx */}
      </div>
    </section>
  );
};

export default Hero;
