"use client";
import React, { FC, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import ContactForm from "./ContactForm";
import axios from "axios";
import toast from "react-hot-toast";

const Contacts: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { name, email, subject, message } = formData;
      const messageData = {
        senderName: name,
        senderEmail: email,
        subject,
        message,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts/message/send`,
        messageData
      );

      if (response?.data?.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto text-white py-16 px-8 flex flex-col md:flex-row justify-center items-center gap-12'>
      <section className='w-full md:w-1/3'>
        <h2 className='text-3xl font-semibold text-blue-400'>Get in Touch</h2>
        <p className='mt-2 text-gray-400'>
          Have a question or want to work together? Drop us a message!
        </p>
        <div className='mt-6 space-y-4'>
          <div className='flex items-center gap-4'>
            <div className='bg-blue-500 p-3 rounded-lg'>
              <MdMarkEmailUnread className='text-white' />
            </div>
            <div>
              <p className='text-gray-300 font-semibold'>Email</p>
              <p className='text-gray-400'>softpirex@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-blue-500 p-3 rounded-lg'>
              <FaPhoneAlt className='text-white' />
            </div>
            <div>
              <p className='text-gray-300 font-semibold'>Phone</p>
              <p className='text-gray-400'>01571419493</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-blue-500 p-3 rounded-lg'>
              <FaLocationDot className='text-white' />
            </div>
            <div>
              <p className='text-gray-300 font-semibold'>Location</p>
              <p className='text-gray-400'>Mirpur-13, Block D, Dhaka</p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Contacts;
