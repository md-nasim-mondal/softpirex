import Image from "next/image";
import React, { FC } from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesCardType {
  index: number;
  service: Service;
}

const ServicesCard: FC<ServicesCardType> = ({ index, service }) => {
  return (
    <div
      key={index}
      className={`relative p-6 bg-gradient-to-b from-[#0A2540] to-black
 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
   index % 3 === 0 ? "mt-10" : index % 3 === 1 ? "mt-0" : "mt-[-20px]"
 }`}
    >
      <div className="absolute -top-8 left-6 bg-[#1E1E1E] p-2 rounded-full shadow-md">
        <Image
          height={50}
          width={50}
          src={service?.icon}
          alt="icon"
          className="w-12 h-12"
        />
      </div>
      <h3 className="text-xl font-semibold  mt-6">{service.title}</h3>
      <p className=" mt-2 text-sm leading-relaxed">{service.description}</p>
      <a href="#" className="mt-4 inline-block text-[#3F51B5] font-semibold">
        More Details →
      </a>
    </div>
  );
};

export default ServicesCard;
