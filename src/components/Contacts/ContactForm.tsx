"use client";

import React, { FC } from "react";

const ContactForm: FC = () => {
  const handleSubmit = () => {
    e.preventdefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg h-32"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg flex justify-center items-center gap-2 font-semibold"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
