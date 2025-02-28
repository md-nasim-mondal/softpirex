import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Title Section */}
      <div className="w-full h-40 text-center flex flex-col items-center justify-center relative">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat "
          style={{ backgroundImage: "url('/assets/images/title.jpg')" }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 mt-6 md:mt-0">
          <h2 className="text-4xl text-white font-bold">Our Gallery</h2>
          <p className="text-lg font-semibold text-white mt-5">
            We are a team of talented developers making the best web and mobile
            applications.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative min-h-screen py-10 md:py-16">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/assets/images/section.jpg')" }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-4 md:px-0">
          <div className="grid my-10 md:my-16 lg:my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Image
              src="/assets/images/o1.jpg"
              alt="img1"
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-cover transition duration-300 transform hover:scale-105"
            />
            <Image
              src="/assets/images/02.jpg"
              alt="img2"
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-cover transition duration-300 transform hover:scale-105"
            />
            <Image
              src="/assets/images/03.jpg"
              alt="img3"
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-cover transition duration-300 transform hover:scale-105"
            />
            <Image
              src="/assets/images/o1.jpg"
              alt="img1"
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-cover transition duration-300 transform hover:scale-105"
            />
            <Image
              src="/assets/images/02.jpg"
              alt="img2"
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-cover transition duration-300 transform hover:scale-105"
            />
            <Image
              src="/assets/images/03.jpg"
              alt="img3"
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-cover transition duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
