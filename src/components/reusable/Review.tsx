import Image from "next/image";
import React, { FC } from "react";
import { FaQuoteRight } from "react-icons/fa";

interface ReviewType{
    img: string;
    name: string;
    designation: string
    feedback: string
}

const Review: FC<ReviewType> = ({img, name, designation, feedback}) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-md shadow-lg text-center mx-8 max-w-80 md:max-w-96">
      <div className="flex items-center gap-4">
        <Image
          src={img} // Replace with actual image path
          alt={name}
          width={60}
          height={60}
          className="rounded-full w-14 h-14 bg-sky-500"
        />
        <section className="text-left">
          <h3 className="text-lg font-semibold mt-3">{name}</h3>
          <p className="text-xs text-sky-600">{designation}</p>
        </section>
        <FaQuoteRight className="text-4xl text-gray-600" />
      </div>
      <p className="mt-4 text-sm text-gray-300 italic">
        “{feedback}”
      </p>
    </div>
  );
};

export default Review;
