import ServicesCard from "@/components/ServicesPage/ServicesCard";
import ServicesHeader from "@/components/reusable/SectionHeader";
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
    <main className=" text-white">
      <ServicesHeader>
        <article className="container mx-auto text-center py-6">
          <h2 className="text-4xl mt-2 font-bold">Our Services</h2>
          <p className="text-lg font-semibold text-white mt-5 w-full md:w-[80%] mx-auto">
            We are totally focused on delivering high quality Cloud Service &
            software solution.
          </p>
        </article>
      </ServicesHeader>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto py-16 grid md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <ServicesCard key={index} index={index} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServiceSection;
