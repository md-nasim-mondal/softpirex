'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  'https://i.ibb.co.com/xqJ721ZZ/demo.png',
  'https://i.ibb.co.com/xqJ721ZZ/demo.png',
  'https://i.ibb.co.com/xqJ721ZZ/demo.png',
  'https://i.ibb.co.com/xqJ721ZZ/demo.png',
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#0A0A14] text-white py-16 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative text-center">
        <p className="text-white uppercase mb-4">Build With Incredible</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="relative inline-block">
            <span className="text-blue-300 text-stroke font-extrabold text-[6rem] md:text-[12rem] absolute left-1/2 top-[-3rem] -translate-x-1/2 opacity-20">
              20+
            </span>
            Dark & Light Demos
          </span>
        </h1>

        {/* Features */}
        <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">
          {[ 
            'Unique design',
            'Free Life Time Update',
            'Fast & Friendly Support',
            'Easy to Customize',
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#0A0A14] px-4 py-2 rounded-full border border-gray-700">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">✔</span>
              <span className="text-white text-base font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers every time
            >
              <div className="relative group">
                <Image
                  src={img}
                  alt={`Demo Image ${index + 1}`}
                  width={500} 
                  height={450} 
                  className="rounded-xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">View Demo</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
