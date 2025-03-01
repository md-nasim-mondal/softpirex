"use client"
import {
  verifyPasswordResetAction,
  verifyTokenAction,
} from "@/actions/verifyActions";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyResetPassword = () => {
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
        const data = await verifyTokenAction(token, "reset-password");
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

  const setNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!token) return toast.error("Invalid token!");

    try {
      const data = await verifyPasswordResetAction(token, {password: "password"});
      if (
        data?.status === 200 &&
        data?.message === "Password successfully reset!"
      ) {
        toast.success("Password successfully reset!");
        router.push("/login");
      } else {
        toast.error(data?.message || "Password Reset failed!!");
      }
    } catch (error) {
      toast.error("An error occurred while verifying the email");
      console.error("Verification error", error);
    }
  };
  return (
    <>
      {!valid ? (
      <div className='container min-h-[calc(100vh-30rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-blue-600 shadow-2xl'>
        <h1 className='text-red-500 text-xl font-bold'>
          Token isn&apos;t valid
        </h1>
      </div>
    ) : (
        <div className='container min-h-[calc(100vh-30rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-blue-600 shadow-2xl'>
          <form onSubmit={setNewPassword}>
            
          </form>
        </div>
      )}
    </>
  );
};

export default VerifyResetPassword;
