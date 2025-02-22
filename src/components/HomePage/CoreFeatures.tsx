import React, { JSX } from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";

import { DiJqueryLogo } from "react-icons/di";

import { FaSass, FaBootstrap, FaFontAwesome, FaLaptop, FaHeadset } from "react-icons/fa";
import { SiGreensock, SiSwiper, SiSpeedtest, SiGooglefonts,  } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineBuildCircle } from "react-icons/md";

const features = [
  { title: "HTML5", description: "Markup Language", icon: <IoLogoHtml5 className="text-orange-500 text-5xl mx-auto" /> },
  { title: "CSS Used", description: "CSS Pre-Processor", icon: <IoLogoCss3 className="text-blue-500 text-5xl mx-auto" /> },
  { title: "Sass Used", description: "CSS Pre-Processor", icon: <FaSass className="text-pink-500 text-5xl mx-auto" /> },
  { title: "Bootstrap 5", description: "Latest CSS Framework", icon: <FaBootstrap className="text-purple-600 text-5xl mx-auto" /> },
  { title: "JavaScript", description: "Language", icon: <IoLogoJavascript className="text-yellow-400 text-5xl mx-auto" /> },
  { title: "GSAP Animation", description: "Used Animation", icon: <SiGreensock className="text-green-500 text-5xl mx-auto" /> },
  { title: "Jquery", description: "JavaScript Library", icon:<DiJqueryLogo className="text-blue-500 text-5xl mx-auto"/>
  },
  { title: "Google Font Used", description: "Free Font Used", icon: <SiGooglefonts className="text-yellow-500 text-5xl mx-auto" /> },
  { title: "Swiper Slider", description: "Slider Style", icon: <SiSwiper className="text-blue-500 text-5xl mx-auto" /> },
  { title: "Clean Code", description: "W3C Validate Code", icon: <AiOutlineCode className="text-blue-500 text-5xl mx-auto" /> },
  { title: "SEO Optimized", description: "Optimized Code", icon: <TbSeo
    className="text-green-400 text-5xl mx-auto" /> },
  { title: "Easy To Customize", description: "Customize Anything", icon: <MdOutlineBuildCircle className="text-yellow-500 text-5xl mx-auto" /> },
  { title: "Fontawesome Pro", description: "Premium Icons", icon: <FaFontAwesome className="text-blue-600 text-5xl mx-auto" /> },
  { title: "Speed Optimization", description: "Super Fast Speed", icon: <SiSpeedtest className="text-red-500 text-5xl mx-auto" /> },
  { title: "Fully Responsive", description: "Working Any Device", icon: <FaLaptop className="text-green-500 text-5xl mx-auto" /> },
  { title: "Customer Support", description: "24/7 Free Support", icon: <FaHeadset className="text-blue-400 text-5xl mx-auto" /> },
];

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => (
  <div className="bg-gray-900 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
    <div className="mb-4">{icon}</div>
    <h3 className="text-white font-bold text-lg">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const CoreFeatures = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-6">
          We Have Lots of Theme Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
