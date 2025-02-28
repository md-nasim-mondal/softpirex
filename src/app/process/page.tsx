"use client";

import WorkProcess from "@/components/Process/WorkProcess";
import Image from "next/image";
import React from "react";

const LandingSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray- mt-20 py-20 container mx-auto px-4">
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-blue-600">
        This is <span className="line-through">not</span> the{" "}
        <span className="italic font-serif">genuine</span> <br /> story
      </h1>
      <div className="mt-8 md:mt-24 flex flex-col md:flex-row justify-between items-center px-4 md:px-40">
        <div className="">
          <Image
            src="/assets/pro.svg"
            alt="landing"
            width={200}
            height={200}
            className="slow-spin"
          />
        </div>

        <div className=" w-full md:max-w-4xl ">
          <p className="mt-6  text-lg">
            We are a web design and development company, building websites that
            drive traffic, engagement, and conversion for industry-leading
            brands and startups in Silicon Valley.
          </p>
          <p className="mt-2  text-lg">
            Our cross-disciplinary team combines strategy, branding, UX design,
            and technology for swift, impactful results. Working as one team
            with our clients, we merge human creativity with AI-driven
            efficiency to consistently exceed expectations.
          </p>
        </div>
      </div>

      <WorkProcess />
    </section>
  );
};

export default LandingSection;
