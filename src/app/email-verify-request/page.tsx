import Link from 'next/link';
import React from 'react';

const VerifyEmailResend = () => {
    return (
        <div className='container min-h-[calc(100vh-30rem)] flex flex-col justify-center items-center mx-auto border w-full my-16 rounded-3xl bg-gray-900  p-8 text-center relative'>
        <div className='absolute inset-0 bg-[#3F51B5] opacity-10 blur-3xl rounded-3xl'></div>

        <div className='flex items-center justify-center w-16 h-16 bg-[#3F51B5] text-white rounded-full shadow-lg animate-pulse'>
          📧
        </div>

        <h1 className='text-[#3F51B5] text-2xl font-bold mt-4'>
          Verify Your Email
        </h1>
        <p className='text-gray-400 mt-2'>
          We have sent a verification link to your email address. <br /> Please
          check your inbox and click on the link to verify your email.
        </p>

        <p className='text-gray-400 mt-4'>
          Didn&apos;t receive the email? <br />
          <span className='text-[#3F51B5] font-medium cursor-pointer hover:underline'>
            Resend Email
          </span>
        </p>

        <Link
          href='/login'
          className='mt-6 px-6 py-2 text-white bg-[#3F51B5] hover:bg-blue-700 rounded-lg font-semibold transition'>
          Go to Login
        </Link>
      </div>
    );
};

export default VerifyEmailResend;