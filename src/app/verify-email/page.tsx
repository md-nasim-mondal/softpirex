"use client";
import { useEffect, useState } from "react";
import { verifyTokenAction, verifyEmailAction } from "@/actions/verifyActions";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

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
    if (!token) return toast.error("Invalid token!");

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

  if (valid === false) {
    return (
      <div className='container min-h-[calc(100vh-10rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-[#85bdd7] shadow-2xl'>
        <h1 className='text-red-500 text-xl font-bold'>
          Token isn&apos;t valid
        </h1>
      </div>
    );
  }

  return (
    <div className='container min-h-[calc(100vh-10rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-[#85bdd7] shadow-2xl'>
      <button
        className='btn bg-[#85bdd7]'
        onClick={verifyEmail}
        disabled={!valid}>
        Verify now
      </button>
    </div>
  );
};

// This verify email page

export default VerifyEmail;
