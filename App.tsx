import React from 'react';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import ServiceGrid from './components/ServiceGrid';
import RiskAssessmentTool from './components/RiskAssessmentTool';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-orange selection:text-white">
      
      <header>
        <Hero />
      </header>

      <main className="relative z-10">
        
        {/* Ticker stuck to bottom of hero visually, but structurally here */}
        <div className="-mt-20 relative z-20">
          <LogoTicker />
        </div>

        <section className="py-24 bg-[#050505]">
          <div className="text-center mb-16 px-4">
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Holistic Protection</h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-lg">
               We bridge the gap between HR, Legal, and IT to create a comprehensive Insider Risk Management strategy.
             </p>
          </div>
          <ServiceGrid />
        </section>

        <section id="tool" className="py-24 bg-[#0a0a0a] border-y border-white/5 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <RiskAssessmentTool />
        </section>

        <section id="contact" className="py-24 px-4 bg-[#050505]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to secure your organization?</h2>
            <p className="text-xl text-gray-400 mb-12">
              Insider risk is the fastest growing attack surface. Don't wait for an incident.
            </p>
            <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                 <input type="email" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" placeholder="you@company.com" />
               </div>
               <button className="w-full bg-brand-orange text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors">
                 Contact Sales
               </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 InsideGuard Consultancy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
