import React from "react";
import Image from "next/image";
import { FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Template: React.FC = () => {
  return (
    <section className="relative bg-blue-600 text-white py-16 px-6">
      {/* Background Circles */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <p className="text-white uppercase mb-4 text-center">Build With Incredible</p>
        <h2 className="md:text-6xl font-bold leading-tight w-full lg:w-[660px] mx-auto text-center mb-6">
          Responsive & Retina Ready Template
        </h2>
        
        {/* Icons */}
        <div className="flex justify-center gap-6 mt-4 text-lg">
          <div className="flex flex-col items-center">
            <FaDesktop className="text-4xl md:text-6xl" />
            <p className="text-sm">Desktop Screen Layout</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTabletAlt className="text-4xl md:text-6xl" />
            <p className="text-sm">Tablet Screen Layout</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMobileAlt className="text-4xl md:text-6xl" />
            <p className="text-sm">Mobile Screen Layout</p>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative flex justify-center mt-10 top-24">
          <div className="relative w-[800px] h-auto">
            <Image 
              src="https://i.ibb.co/nHcyfYc/devixa-agency-template-banner-wxrbll-S.webp" 
              alt="Responsive Design" 
              width={900} 
              height={600} 
              className="rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
