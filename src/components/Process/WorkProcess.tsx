'use client';

import { useState } from 'react';

const WorkProcess: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      number: '01',
      title: 'Research',
      content:
        'We unearth valuable insights that inform strategic decisions, guiding you towards sustainable growth and meaningful connections.',
    },
    { number: '02', title: 'Strategy', content: `We unearth valuable insights that inform strategic decisions, guiding
you towards sustainable growth and meaningful connections` },
    { number: '03', title: 'Design', content: 
        `We unearth valuable insights that inform strategic decisions, guiding
you towards sustainable growth and meaningful connections` },
    { number: '04', title: 'Development', content: `We unearth valuable insights that inform strategic decisions, guiding
you towards sustainable growth and meaningful connections.` },
  ];

  return (
    <section className="text-white py-12 md:py-24 px-8">
      <div className=" flex justify-between flex-col md:flex-row">
       <div>
       <h2 className="text-4xl md:text-6xl font-bold">Our Work</h2>
       <h3 className="text-3xl md:text-5xl italic mt-3 mb-6">Process</h3>
       </div>

        <div className='w-full md:w-3/4'>
          {steps.map((step, index) => (
            <div key={index} className="border-b border-gray-300  py-4 ">
              <button
                className="w-full flex  justify-between items-center text-left"
                onClick={() => toggleAccordion(index)}
              >
                <div>
                  <span className="text-[#3F51B5] text-3xl font-bold mr-2">{step.number}</span>
                  <span className="text-3xl font-semibold mr-5">{step.title}</span>
                </div>
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-black">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && step.content && (
                <p className="mt-2  text-lg">{step.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
