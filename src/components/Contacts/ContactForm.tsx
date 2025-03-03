"use client";
import React, { FC } from "react";

interface ContactFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  setFormData: (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => void;
  isLoading: boolean;
}

const ContactForm: FC<ContactFormProps> = ({
  handleSubmit,
  formData,
  setFormData,
  isLoading,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg h-32"
      ></textarea>
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full bg-gradient-to-r from-blue-800 to-[#3F51B5] text-white p-3 rounded-lg flex justify-center items-center gap-2 font-semibold ${
          isLoading ? "bg-red-300 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
