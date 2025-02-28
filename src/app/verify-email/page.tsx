"use client";
import React from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const isValidate = true;
const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  // console.log(token);
  const verifyEmail = async () => {
    try {
      const response = await axios(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${token}`
      );
      if (response.data.message === "Email successfully verified!") {
        router.push("/login");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
  return (
    <>
      {isValidate ? (
        <div className="container min-h-[calc(100vh-10rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-[#85bdd7] shadow-2xl">
          your token is not valid
        </div>
      ) : (
        <div className="container min-h-[calc(100vh-10rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-[#85bdd7] shadow-2xl">
          <button className="btn bg-[#85bdd7]" onClick={verifyEmail}>
            Verify now
          </button>
        </div>
      )}
    </>
  );
};

export default VerifyEmail;
