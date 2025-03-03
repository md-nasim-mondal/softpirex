"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Banner() {
  const countUpRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = countUpRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-black text-white px-10 py-24 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
    >
      {/* Container for images and text */}
      <div className="flex container flex-col md:flex-row items-center justify-between w-full mt-12 space-y-6 md:space-y-0">
        {/* Text Section */}
        <div className="text-left md:w-2/3">
          <p className="text-lg text-gray-400 font-bold uppercase">
            Created by Creative Heroes
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4">
            We Are Development <br />
            Agency Softpirex
          </h1>

          <Link href="/projects">
            <motion.button
              className="mt-6 lg:mt-12 mb-8 md:mb-16 bg-blue-600 hover:bg-blue-700 px-4 py-1 md:px-6 lg:py-3 text-lg font-semibold rounded-lg transition"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ amount: 0.2 }}
            >
              Pre-Made Demos ↗
            </motion.button>
          </Link>

          {/* Stats Section */}
          <div
            ref={countUpRef}
            className="flex mt-10 md:mt-4 lg:mt-10 space-x-6 text-center"
          >
            {[
              { number: 24, text: "Dark & Light Demo" },
              { number: 25, text: "Dark & Light Inner Pages" },
              { number: 150, text: "Section Elements" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ amount: 0.2 }}
              >
                <p className="text-4xl font-bold">
                  {isVisible ? (
                    <CountUp start={0} end={item.number} duration={2} />
                  ) : (
                    0
                  )}
                  +
                </p>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-20">
          <motion.div
            className="hidden md:block relative transform rotate-[-10deg] shadow-lg mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ amount: 0.2 }}
          >
            <Image
              src="https://i.ibb.co/MyLHmh42/banner2.png"
              alt="Mobile View"
              layout="intrinsic"
              width={200}
              height={400}
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            className="relative  transform rotate-[10deg] shadow-lg mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ amount: 0.2 }}
          >
            <Image
              src="https://i.ibb.co/yzVv18L/banner1.png"
              alt="Laptop View"
              layout="intrinsic"
              width={700}
              height={400}
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
