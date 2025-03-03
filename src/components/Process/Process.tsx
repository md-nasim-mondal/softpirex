import WorkProcess from "@/components/Process/WorkProcess";
import Image from "next/image";
import React from "react";

const Process: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-black">
      <section className=" mt-20 py-20 container mx-auto px-4 text-white">
        <h1 className="text-4xl font-bold text-[#3F51B5]">
          This is the
          <br />
          <span>genuine story</span>
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
              We are a web design and development company, building websites
              that drive traffic, engagement, and conversion for
              industry-leading brands and startups in Silicon Valley.
            </p>
            <p className="mt-2  text-lg">
              Our cross-disciplinary team combines strategy, branding, UX
              design, and technology for swift, impactful results. Working as
              one team with our clients, we merge human creativity with
              AI-driven efficiency to consistently exceed expectations.
            </p>
          </div>
        </div>

        <WorkProcess />
      </section>
    </main>
  );
};

export default Process;
