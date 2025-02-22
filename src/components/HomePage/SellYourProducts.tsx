import Image from "next/image";
import React, { FC } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const SellYourProducts: FC = () => {
  return (
    <section className="bg-[#02050A] py-24">
      <div className="container bg-[#07090D] mx-auto px-6 py-16 md:p-12 lg:p-24 md:flex box-shadow rounded-sm">
        {/* Main Content Section */}
        <div className="space-y-6 mb-8 text-white  w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Sell Your Products By Commercer
          </h1>

          <p className=" text-sm md:text-lg">
            Start working with Elementor, everything will feel familiar and
            intuitive.
            <br />
            It’s free to use.
          </p>

          <ul className="text-sm md:text-lg space-y-3">
            <List info="Entire Ui Development" />
            <List info="All of the e-commerce functionality" />
            <List info="Payment Getaway Integration" />
            <List info="Domain and Hosting setup" />
          </ul>

          <button className="bg-blue-600 inline-flex items-center gap-2 text-white px-6 py-3 hover:bg-blue-700 transition-colors">
            View Details <FaArrowRight className="-rotate-45 " />
          </button>
        </div>

        <div className="relative flex items-center justify-center  w-full md:w-1/2">
          <Image
            src="https://html.rrdevs.net/preview/runok/assets/imgs/elementor/products-3.png"
            alt=""
            height={250}
            width={250}
            className="absolute top-0 right-0 animate-float-x md:top-10 md:-right-10  hidden md:block"
          />
          <Image
            src="https://html.rrdevs.net/preview/runok/assets/imgs/elementor/products-2.png"
            alt=""
            height={600}
            width={600}
            className="w-full"
          />
          <Image
            src="https://html.rrdevs.net/preview/runok/assets/imgs/elementor/products-1.png"
            alt=""
            height={150}
            width={150}
            className="absolute left-0 bottom-0 animate-float-y hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

interface InfoType {
  info: string;
}

const List: FC<InfoType> = ({ info }) => {
  return (
    <li className="flex items-center">
      <span className="mr-2">
        <FaRegCheckCircle />
      </span>
      {info}
    </li>
  );
};

export default SellYourProducts;
