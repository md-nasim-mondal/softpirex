import React from "react";

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="w-full pt-10 px-5 lg:px-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <h2 className="text-lg font-bold">SOFTPIREX</h2>
          <p className="text-sm text-gray-400">Made by Softpirex</p>
        </div>
        <div className="mt-5 lg:mt-0 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">
          <div>
            <h3 className="font-bold">Social Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Resources</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="/register" className="hover:text-white">
                  Register
                </a>
              </li>
              <li>
                <a href="login" className="hover:text-white">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`container mx-auto border-t border-gray-700 mt-5 pt-5 text-gray-400 text-sm`}
      >
        &copy; {year} Softpirex  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
