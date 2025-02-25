
'use client';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const Services = () => {


  return (
    <section className="bg-gray-900 text-white py-16 px-8 flex flex-col md:flex-row justify-center items-center gap-12">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-semibold text-blue-400">Get in Touch</h2>
        <p className="mt-2 text-gray-400">Have a question or want to work together? Drop us a message!</p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <MdMarkEmailUnread 
              className="text-white" />
            </div>
            <div>
              <p className="text-gray-300 font-semibold">Email</p>
              <p className="text-gray-400">mostasirmahim@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <FaPhoneAlt
 
              className="text-white" />
            </div>
            <div>
              <p className="text-gray-300 font-semibold">Phone</p>
              <p className="text-gray-400">01571419493</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg">
            <FaLocationDot
            className="text-white" />
            </div>
            <div>
              <p className="text-gray-300 font-semibold">Location</p>
              <p className="text-gray-400">Mirpur-13, Block D, Dhaka</p>
            </div>
          </div>
        </div>
      </div>
      <form  className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"  />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"  />
        <input type="text" name="subject" placeholder="Subject" className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg"  />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 mb-3 bg-gray-700 text-white rounded-lg h-32" ></textarea>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg flex justify-center items-center gap-2 font-semibold">
          Send Message  
        </button>
      </form>
    </section>
  );
};

export default Services;
