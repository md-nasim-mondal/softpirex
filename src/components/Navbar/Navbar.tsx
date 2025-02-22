"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "DEMOS", path: "/" },
    { name: "INNER PAGES", path: "/inner-pages" },
    { name: "FEATURES", path: "/features" },
    { name: "TESTIMONIAL", path: "/testimonial" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav className='bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <span className='text-blue-500 text-2xl font-bold'>SOFTPIREX</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 font-semibold tracking-wide'>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className='hover:text-blue-400 transition duration-300'>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Purchase Button */}
        <button className='hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition duration-300'>
          Purchase Now
          <motion.span
            initial={{ rotate: 45 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            ↗
          </motion.span>
        </button>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={() => setIsOpen(true)}>
          <IoMenuSharp className='text-xl' />
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col p-6 space-y-6 shadow-lg md:hidden ${
          isOpen ? "block" : "hidden"
        }`}>
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className='self-end'>
          <ImCross className='text-2xl hover:text-red-400 transition duration-300' />
        </button>

        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}>
            <Link
              href={link.path}
              className='block hover:text-blue-400 transition duration-300'
              onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          </motion.div>
        ))}

        {/* Mobile Purchase Button */}
        <button
          onClick={() => setIsOpen(false)}
          className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition duration-300'>
          Purchase Now ↗
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
