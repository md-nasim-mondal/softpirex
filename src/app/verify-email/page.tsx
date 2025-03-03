"use client";
import { useEffect, useState } from "react";
import { verifyTokenAction, verifyEmailAction } from "@/actions/verifyActions";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [valid, setValid] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!token) {
        setValid(false);
        toast.error("Invalid URL!");
        return;
      }

      try {
        const data = await verifyTokenAction(token, "email-verification");
        setValid(data.valid);
        if (!data.valid) {
          toast.error("Invalid URL!");
        }
      } catch (error) {
        toast.error("Something went wrong!");
        console.log(error);
      }
    };

    checkTokenValidity();
  }, [token]);

  const verifyEmail = async () => {
    if (!token) return toast.error("Invalid Token!");

    try {
      const data = await verifyEmailAction(token);
      if (
        data?.status === 200 &&
        data?.message === "Email successfully verified!"
      ) {
        toast.success("Email successfully verified!");
        router.push("/login");
      } else {
        toast.error(data?.message || "Verification failed");
      }
    } catch (error) {
      toast.error("An error occurred while verifying the email");
      console.error("Verification error", error);
    }
  };

  return (
    <>
      {!valid ? (
        <div className='container min-h-[calc(100vh-30rem)] flex flex-col justify-center items-center mx-auto border w-full my-16 rounded-3xl shadow-xl bg-gray-900 border-gray-700 p-8 text-center relative'>
          <div className='absolute inset-0 bg-red-500 opacity-10 blur-3xl rounded-3xl'></div>

          <div className='flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full shadow-lg animate-pulse'>
            ⚠️
          </div>

          <h1 className='text-red-500 text-2xl font-bold mt-4'>Invalid URL!</h1>
          <p className='text-gray-400 mt-2'>
            This link either expired or incorrect. <br /> Please check and try
            again.
          </p>

          <Link
            href='/'
            className='mt-6 px-6 py-2 text-white bg-[#3F51B5] hover:bg-blue-700 rounded-lg font-semibold transition z-10'>
            Back to Home
          </Link>
        </div>
      ) : (
        <div className='container min-h-[calc(100vh-30rem)] flex flex-col justify-center items-center mx-auto w-full my-16 p-8 border bg-gray-900 rounded-3xl shadow-xl border-gray-700 relative'>
          <div className='absolute inset-0 bg-[#3F51B5] opacity-15 blur-3xl rounded-3xl'></div>

          <div className='flex items-center justify-center w-16 h-16 bg-[#3F51B5] text-white rounded-full shadow-lg animate-pulse transform hover:scale-105 transition-all'>
            ✔️
          </div>

          <h1 className='text-[#3F51B5] text-3xl font-semibold mt-6'>
            Verify Your Email
          </h1>
          <p className='text-gray-400 mt-2 text-center'>
            Please click the button below to verify your email and complete the
            process.
          </p>

          <button
            className='mt-8 px-8 py-3  text-white bg-[#3F51B5] hover:bg-blue-700 rounded-lg font-semibold shadow-md transition disabled:bg-gray-500'
            onClick={verifyEmail}
            disabled={!valid}>
            Verify Now
          </button>
        </div>
      )}
    </>
  );
};

export default VerifyEmail;
