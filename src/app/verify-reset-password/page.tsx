"use client";
import {
  verifyPasswordResetAction,
  verifyTokenAction,
} from "@/actions/verifyActions";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [valid, setValid] = useState<boolean | null>(null);
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
        <div className="container min-h-[calc(100vh-30rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-blue-600 shadow-2xl">
          <h1 className="text-red-500 text-xl font-bold">Token isn&apos;t valid</h1>
        </div>
      ) : (
        <div className="container min-h-[calc(100vh-30rem)] flex justify-center items-center mx-auto border w-full mt-16 rounded-3xl shadow-blue-600 shadow-2xl p-6">
          <form onSubmit={setNewPassword} className="w-full max-w-md space-y-4">
            <div>
              <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
                Enter Your New Password
              </label>
              <input
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type="password"
                name="newPassword"
                id="newPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter Your New Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Re-Type Your Password
              </label>
              <input
                value={formData.cPassword}
                onChange={(e) => setFormData({ ...formData, cPassword: e.target.value })}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Re-Type Your Password"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-semibold transition text-white ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Setting Password..." : "Set Password"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default VerifyResetPassword;
