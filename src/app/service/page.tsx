import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Web Application Development",
    description:
      "Experience the magic of digital transformation with Bug Finder, your trusted partner for Affordable Web Application Development. We craft tailor-made, innovative web solutions that drive business growth.",
    icon: "https://bug-finder.s3.ap-southeast-1.amazonaws.com/service/QCSDQ5f7rVdIHhJEsV1Mo6R9YAqseg.avif",
  },
  {
    title: "Mobile Application Development",
    description:
      "Bring your ideas to life with Bug Finder. We expertly craft Swift iOS and Android Mobile Application Development, turning your vision into a tangible reality.",
    icon: "https://bug-finder.s3.ap-southeast-1.amazonaws.com/service/f0F2EQ9DB4WoJPmZxu5SYEqRIeaVaj.avif",
  },
  {
    title: "Plugin & SDK Development",
    description:
      "Bug Finder specializes in custom plugin and SDK development, providing tailored solutions to enhance software functionality and integration capabilities.",
    icon: "https://bug-finder.s3.ap-southeast-1.amazonaws.com/service/3fBfNcPMDGWXyoiTz11Fk83uQ4vj3X.avif",
  },
  {
    title: "WordPress Themes & Plugins",
    description:
      "Bug Finder specializes in SEO-optimized WordPress theme and plugin development, designed to enhance your website’s performance and search engine visibility.",
    icon: "https://bug-finder.s3.ap-southeast-1.amazonaws.com/service/9h0LWjNdoYHYDbXmRkGb5aCApga1DF.avif",
  },
  {
    title: "Shopify Themes & Apps",
    description:
      "Bug Finder excels in developing custom Shopify themes and apps, crafted to boost the functionality and aesthetic appeal of your eCommerce store.",
    icon: "https://bug-finder.s3.ap-southeast-1.amazonaws.com/service/CstVhqZWNwgXFk4CvsamkEkGP5fyoa.avif",
  },
  {
    title: "UI/UX Design",
    description:
      "Bug Finder specializes in UI/UX design development, creating intuitive and visually stunning user experiences tailored to your brand.",
    icon: "https://bug-finder.s3.ap-southeast-1.amazonaws.com/service/UFMN8z7u8Za8cO2UQHhfXwjiPb9Vtx.avif",
  },
];

const ServiceSection = () => {
  return (
    <div className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-xl font-bold ">
         <span className="text-blue-600">  Our Services</span>
        </h2>
        <h2 className="text-4xl mt-2 font-bold ">
        What We  <span className="text-blue-600">  Served</span>
        </h2>
        <p className="mt-4 text-sm max-w-full md:max-w-[60%]">
        We are totally focused on delivering high quality Cloud Service & software solution. Bug Finder is one of the pioneers in providing I.T. infrastructure and solutions on various platforms.
        </p>

        <div className="grid md:grid-cols-3 gap-16 mt-12 md:mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 bg-gradient-to-b from-[#0A2540] to-black
 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${index % 3 === 0 ? "mt-10" : index % 3 === 1 ? "mt-0" : "mt-[-20px]"}`}
            >
              <div className="absolute -top-8 left-6 bg-[#1E1E1E] p-2 rounded-full shadow-md">
                <Image height={50} width={50} src={service?.icon} alt="icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold  mt-6">
                {service.title}
              </h3>
              <p className=" mt-2 text-sm leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold"
              >
                More Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
