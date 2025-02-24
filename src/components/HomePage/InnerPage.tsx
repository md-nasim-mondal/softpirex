"use client";

import React from "react"; 
import { motion } from "framer-motion";
import Image from "next/image";

// Define Card Type
interface Card {
  id: number;
}

// Generate Array of Cards
const cards: Card[] = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

// SlidingCards Component
const SlidingCards: React.FC = () => {
  return (
    <div className="relative bg-blue-500 overflow-hidden py-10">
         <p className="text-white uppercase text-center mt-6">Build With Incredible</p>
      <h2 className="text-white text-center text-4xl font-bold mb-10 mt-2">
        Pre-Built Inner Pages Ready
      </h2>

      {/* Upper Slider */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {cards.concat(cards).map((card, index) => (
            <motion.div
              key={index}
              className="relative w-[200px] h-[220px] md:h-[320px] md:w-[500px] rounded-lg shadow-lg overflow-hidden flex-shrink-0"
            >
              <Image
                src="https://i.ibb.co.com/1GK392m7/mobile-phone.jpg"
                alt="image"
                width={500} 
                height={320} 
                priority
                className="w-full h-full rounded-lg object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                  Show Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lower Slider */}
      <div className="relative w-full h-full overflow-hidden mt-6">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {cards.concat(cards).map((card, index) => (
            <motion.div
              key={index}
              className="relative w-[200px] h-[220px] md:h-[320px] md:w-[500px] rounded-lg shadow-lg overflow-hidden flex-shrink-0"
            >
              <Image
                src="https://i.ibb.co.com/1GK392m7/mobile-phone.jpg"
                alt="image"
                width={500} 
                height={320} 
                priority
                className="w-full h-full rounded-lg object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                  Show Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SlidingCards;
