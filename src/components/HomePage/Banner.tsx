'use client';

import Image from 'next/image';

export default function WebAgencyTemplate() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-10 flex flex-col items-center justify-center">
      {/* Container for images and text */}
      <div className="flex container flex-col md:flex-row items-center justify-between w-full mt-12 space-y-6 md:space-y-0 md:space-x-12">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-2/3">
          <p className="text-lg text-gray-400 font-bold uppercase">Created by Envato Creative Heroes</p>
          <h1 className="text-4xl md:text-7xl font-bold mt-4 text-center">
            Web Agency <br /> HTML Template
          </h1>

          <button className="mt-6 md:mt-12 mb-8 md:mb-16 bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-semibold rounded-lg transition">
            Pre-Made Demos ↗
          </button>

          <div className="flex mt-10 space-x-6 text-center">
            <div>
              <p className="text-4xl font-bold">24+</p>
              <p className="text-gray-400">Dark & Light Demo</p>
            </div>
            <div>
              <p className="text-4xl font-bold">25+</p>
              <p className="text-gray-400">Dark & Light Inner Pages</p>
            </div>
            <div>
              <p className="text-4xl font-bold">150+</p>
              <p className="text-gray-400">Section Elements</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-20 "> {/* Added margin-top to move images down */}
          {/* Smaller First Image */}
          <div className="hidden md:block relative w-full h-auto md:w-80 md:h-[500px] transform rotate-[-10deg] shadow-lg mt-10"> {/* Adjusted margin-top for first image */}
            <Image
              src="https://i.ibb.co/MyLHmh42/banner2.png"
              alt="Mobile View"
              layout="intrinsic"
              width={200} // Define width based on the image's actual size
              height={400} // Define height based on the image's actual size
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full md:w-[600px] md:h-[400px] transform rotate-[10deg] shadow-lg mt-16"> {/* Adjusted margin-top for second image */}
            <Image
              src="https://i.ibb.co/yzVv18L/banner1.png"
              alt="Laptop View"
              layout="intrinsic"
              width={600}  // Set the image width to match the container size
              height={400} // Set the image height for proper scaling
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
