'use client';

import { motion } from 'framer-motion';

const cards = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

export default function SlidingCards() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <h2 className="text-white text-center text-4xl font-bold mb-6">Pre-Built Inner Pages Ready</h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {cards.concat(cards).map((card, index) => (
            <motion.div 
              key={index} 
              className="bg-[#121212] text-white w-[320px] px-6 py-5 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-xl font-semibold">Page {card.id}</h1>
              <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vitae.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="relative w-full overflow-hidden mt-10">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {cards.concat(cards).map((card, index) => (
            <motion.div 
              key={index} 
              className="bg-[#121212] text-white w-[320px] px-6 py-5 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-xl font-semibold">Page {card.id}</h1>
              <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vitae.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}