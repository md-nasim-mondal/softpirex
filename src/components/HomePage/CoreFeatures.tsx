import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import {
  FaSass,
  FaBootstrap,
  FaFontAwesome,
  FaLaptop,
  FaHeadset,
} from "react-icons/fa";
import {
  SiGreensock,
  SiSwiper,
  SiSpeedtest,
  SiGooglefonts,
} from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineBuildCircle } from "react-icons/md";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "HTML5",
    description: "Markup Language",
    icon: <IoLogoHtml5 className="text-orange-500 text-5xl mx-auto" />,
  },
  {
    title: "CSS Used",
    description: "CSS Pre-Processor",
    icon: <IoLogoCss3 className="text-blue-500 text-5xl mx-auto" />,
  },
  {
    title: "Sass Used",
    description: "CSS Pre-Processor",
    icon: <FaSass className="text-pink-500 text-5xl mx-auto" />,
  },
  {
    title: "Bootstrap 5",
    description: "Latest CSS Framework",
    icon: <FaBootstrap className="text-purple-600 text-5xl mx-auto" />,
  },
  {
    title: "JavaScript",
    description: "Language",
    icon: <IoLogoJavascript className="text-yellow-400 text-5xl mx-auto" />,
  },
  {
    title: "GSAP Animation",
    description: "Used Animation",
    icon: <SiGreensock className="text-green-500 text-5xl mx-auto" />,
  },
  {
    title: "Jquery",
    description: "JavaScript Library",
    icon: <DiJqueryLogo className="text-blue-500 text-5xl mx-auto" />,
  },
  {
    title: "Google Font Used",
    description: "Free Font Used",
    icon: <SiGooglefonts className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    title: "Swiper Slider",
    description: "Slider Style",
    icon: <SiSwiper className="text-blue-500 text-5xl mx-auto" />,
  },
  {
    title: "Clean Code",
    description: "W3C Validate Code",
    icon: <AiOutlineCode className="text-blue-500 text-5xl mx-auto" />,
  },
  {
    title: "SEO Optimized",
    description: "Optimized Code",
    icon: <TbSeo className="text-green-400 text-5xl mx-auto" />,
  },
  {
    title: "Easy To Customize",
    description: "Customize Anything",
    icon: <MdOutlineBuildCircle className="text-yellow-500 text-5xl mx-auto" />,
  },
  {
    title: "Fontawesome Pro",
    description: "Premium Icons",
    icon: <FaFontAwesome className="text-blue-600 text-5xl mx-auto" />,
  },
  {
    title: "Speed Optimization",
    description: "Super Fast Speed",
    icon: <SiSpeedtest className="text-red-500 text-5xl mx-auto" />,
  },
  {
    title: "Fully Responsive",
    description: "Working Any Device",
    icon: <FaLaptop className="text-green-500 text-5xl mx-auto" />,
  },
  {
    title: "Customer Support",
    description: "24/7 Free Support",
    icon: <FaHeadset className="text-blue-400 text-5xl mx-auto" />,
  },
];

// Feature Card Component
const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => (
  <div className="p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
    <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-white rounded-full">
      {icon}
    </div>
    <h3 className="text-white font-bold text-lg">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

// Core Features Component
const CoreFeatures: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <p className="text-white uppercase mb-4 text-center">
          Build With Incredible
        </p>
        <h2 className="md:text-6xl font-bold leading-tight w-full lg:w-[660px] mx-auto text-center mb-6">
          We Have Lots Of Theme Core Features
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
