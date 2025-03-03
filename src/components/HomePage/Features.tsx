'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    image: 'https://i.ibb.co.com/VpWxRSZP/features1.png',
    title: 'Premium Figma File Included',
    description: 'These files include all the design elements, layouts, and assets used in the HTML Template, allowing for customization.',
  },
  {
    image: 'https://i.ibb.co.com/7dPVWvz9/features2.png',
    title: 'Fast & Friendly Support',
    description: 'No need to manually create pages or configure settings. Your site will look like the demo in minutes.',
  },
  {
    image: 'https://i.ibb.co.com/R40XSxrx/features3.png',
    title: 'Top Notch Performance',
    description: 'A high-performing theme is crucial for retaining visitors, improving search engine rankings, and enhancing overall site performance.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-[radial-gradient(circle_at_bottom,rgba(10,10,20,1)_0%,rgba(5,5,10,1)_40%,rgba(0,0,0,1)_100%)] text-white pt-16 md:pt-28 pb-24 md:pb-44 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-gray-400 uppercase">Build With Incredible</p>
        <h2 className="text-4xl font-bold">Incredible Unique Features</h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl flex flex-col items-start text-left shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers every time
          >
            <div className="w-20 h-20 border bg-black rounded-full flex items-center justify-center mb-4">
              <Image src={feature.image} alt={feature.title} width={40} height={40} className="rounded-full" />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Scrolling Text Animation */}
      <motion.div
        className="absolute bottom-8 inset-x-0 text-center text-white font-bold bg-gradient-to-r from-transparent to-transparent 
        text-[2rem] md:text-[4rem] whitespace-nowrap"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        CUSTOMER TESTIMONIAL. CLIENT FEEDBACKS CUSTOM
      </motion.div>
    </section>
  );
}
