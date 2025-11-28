import React from 'react';

const LOGOS = [
  "DXC.technology", "Gyensidige", "ODIN", "motorola", "Nvidia", "Cisco", 
  "DXC.technology", "Gyensidige", "ODIN", "motorola", "Nvidia", "Cisco"
];

const LogoTicker: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border-t border-white/5 py-8 relative overflow-hidden z-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
      
      <div className="flex w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {LOGOS.map((logo, index) => (
            <div key={`${logo}-${index}`} className="mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-xl md:text-2xl font-bold font-sans tracking-widest text-white uppercase">
                {logo}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {LOGOS.map((logo, index) => (
            <div key={`${logo}-${index}-dup`} className="mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
               <span className="text-xl md:text-2xl font-bold font-sans tracking-widest text-white uppercase">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
