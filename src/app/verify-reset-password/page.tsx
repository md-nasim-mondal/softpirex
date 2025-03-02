"use client";
import {
  verifyPasswordResetAction,
  verifyTokenAction,
} from "@/actions/verifyActions";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [valid, setValid] = useState<boolean | null>(true);
  const [formData, setFormData] = useState({
    password: "",
    cPassword: "",
  });
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
    e.preventDefault();
    if (!token) return toast.error("Invalid token!");

    if (formData.password !== formData.cPassword) {
      return toast.error("Passwords do not match!");
    }

    try {
      setIsLoading(true);
      const data = await verifyPasswordResetAction(token, {
        password: formData?.password,
      });

      if (data?.status === 200 && data?.message === "Password successfully reset!") {
        toast.success("Password successfully reset!");
        router.push("/login");
      } else {
        toast.error(data?.message || "Password Reset failed!!");
      }
    } catch (error) {
      toast.error("An error occurred while verifying the email");
      console.error("Verification error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
<>
  {!valid ? (
    <div className="container min-h-[calc(100vh-30rem)] flex flex-col justify-center items-center mx-auto border w-full my-16 rounded-3xl shadow-xl bg-gray-900 border-gray-700 p-8 text-center relative">
  <div className="absolute inset-0 bg-red-500 opacity-10 blur-3xl rounded-3xl"></div>

  <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full shadow-lg animate-pulse">
    ⚠️
  </div>


  <h1 className="text-red-500 text-2xl font-bold mt-4">Invalid Token</h1>
  <p className="text-gray-400 mt-2">
    The token you provided is either expired or incorrect. <br /> Please check and try again.
  </p>

           


<Link  href='/login' className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
    Go to Login
</Link>
</div>

  ) : (
    <div className="min-h-[calc(100vh-30rem)] flex justify-center items-center mx-auto w-full my-16 p-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-gray-900 to-black opacity-40 blur-2xl rounded-3xl"></div>

      <div className="relative w-full max-w-lg border border-gray-700 rounded-3xl shadow-xl bg-gray-900 bg-opacity-95 backdrop-blur-lg p-8 transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-white text-3xl font-bold text-center mb-4 animate-fade-in">🔒 Reset Your Password</h2>

        <form onSubmit={setNewPassword} className="mt-6 space-y-6">
          <div className="relative">
            <label htmlFor="newPassword" className="block text-gray-300 font-medium mb-2">
              Enter Your New Password
            </label>
            <div className="relative">
              <input
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type="password"
                name="newPassword"
                id="newPassword"
                className="w-full px-4 py-3 pl-10 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md"
                placeholder="Enter Your New Password"
              />
              <span className="absolute left-3 top-3 text-gray-400">🔑</span>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-gray-300 font-medium mb-2">
              Re-Type Your Password
            </label>
            <div className="relative">
              <input
                value={formData.cPassword}
                onChange={(e) => setFormData({ ...formData, cPassword: e.target.value })}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full px-4 py-3 pl-10 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md"
                placeholder="Re-Type Your Password"
              />
              <span className="absolute left-3 top-3 text-gray-400">🔒</span>
            </div>
          </div>

          <button
  type="submit"
  className={`w-full py-3 rounded-xl font-semibold transition-all text-white text-lg ${
    isLoading
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-xl transform hover:scale-105"
  } transform duration-200 ease-in-out`}
  disabled={isLoading}
>
  {isLoading ? "Setting Password..." : "Set Password"}
</button>

        </form>
      </div>
    </div>


  )}
</>

  );
};

export default VerifyResetPassword;
