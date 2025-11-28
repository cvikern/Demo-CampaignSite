import React from 'react';

const ServiceGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
        
        {/* Primary Card - Orange */}
        <div className="group relative col-span-1 bg-brand-orange rounded-sm p-8 flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(237,125,85,0.4)] transition-all duration-300">
          <div className="relative z-10">
            <svg className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M2 12l5 5L22 7" />
               <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeOpacity="0.5" />
            </svg>
            <h2 className="text-3xl font-bold text-white mb-2">Advisory</h2>
            <div className="w-12 h-1 bg-white mb-4"></div>
          </div>

          <div className="relative z-10 mt-auto">
             <p className="text-white/90 text-sm font-medium leading-relaxed mb-6">
                We help leaders understand cybersecurity as a business risk and build strategies matching growth ambitions.
                From NIS2-compliance to ISO 27001, we translate regulatory requirements into practical measures.
             </p>
          </div>

          {/* Image at bottom half for visual fidelity to reference */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-90 mix-blend-multiply">
             <img src="https://picsum.photos/600/400?grayscale" alt="Team meeting" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-orange via-transparent to-transparent z-0"></div>
        </div>

        {/* Second Column - Dark Card */}
        <div className="col-span-1 bg-brand-card border-t border-white/10 rounded-sm p-8 flex flex-col group cursor-pointer hover:bg-[#1A1C20] transition-colors">
          <div className="flex justify-between items-start mb-12">
             <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M12 5v14M5 12h14" />
             </svg>
             <h2 className="text-2xl font-semibold text-white">Consulting</h2>
          </div>
          <div className="mt-auto">
            <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
              Technical implementation, forensic analysis, and insider threat program development.
            </p>
          </div>
        </div>

        {/* Third Column - Dark Card */}
        <div className="col-span-1 bg-brand-card border-t border-white/10 rounded-sm p-8 flex flex-col group cursor-pointer hover:bg-[#1A1C20] transition-colors">
          <div className="flex justify-between items-start mb-12">
             <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
             </svg>
             <h2 className="text-2xl font-semibold text-white">Services</h2>
          </div>
           <div className="mt-auto">
            <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
              Managed monitoring, behavioral analytics, and 24/7 incident response.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceGrid;
