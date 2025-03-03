import React, { FC } from "react";

const ServicesHeader: FC = () => {
  return (
    <section
      className="inset-0 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/title.jpg')" }}
    >
      <article className="container mx-auto text-center py-6">
        <h2 className="text-xl font-bold text-blue-600 underline ">
          Our Services
        </h2>
        <h2 className="text-4xl mt-2 font-bold ">
          What We <span className="text-blue-600"> Served</span>
        </h2>
        <p className="mt-4 text-sm w-full md:w-[80%] mx-auto">
          We are totally focused on delivering high quality Cloud Service &
          software solution. Bug Finder is one of the pioneers in providing I.T.
          infrastructure and solutions on various platforms.
        </p>
      </article>
    </section>
  );
};

export default ServicesHeader;
