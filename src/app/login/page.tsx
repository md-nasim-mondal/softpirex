"use client";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { buttonLoader } from "@/components/LoadingSpinners/Loaders";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import ResetPasswordModal from "@/components/Modal/ResetPasswordModal";

// Define the form input types
interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const from = "/"; // Default redirect path after login

  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message || "Email is required", {
        duration: 2000,
      });
    }
    if (errors.password) {
      toast.error(errors.password.message || "Password is required", {
        duration: 2000,
      });
    }
  }, [errors]);

  const handleLogin: SubmitHandler<LoginFormInputs> = async (userData) => {
    setUserLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: userData.email,
        password: userData.password,
      });

      if (res?.status === 200) {
        toast.success("Successfully Login!");
        router.push(from);
      } else {
        const err = res?.error as string;
        toast.error(err.replace("Error:", "").trim());
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setUserLoading(false);
    }
  };

  return (
    <>
      <section className='py-2 md:py-8 p-2 md:px-4 flex flex-col items-center  bg-gradient-to-r from-gray-900 to-black text-white min-h-screen'>
        <h2 className='text-2xl md:text-4xl font-semibold text-center mb-8 font-kreonSerif'>
          Please, Login
        </h2>
        <div className='flex-1 flex flex-col items-center gap-2  lg:w-1/2'>
          <SocialLogin />
          <div className='flex items-center w-full my-4'>
            <hr className='w-full dark:text-gray-600' />
            <p className='px-3 dark:text-gray-600'>OR</p>
            <hr className='w-full dark:text-gray-600' />
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className='w-full flex flex-col px-4 lg:px-8 py-4 lg:py-6 shadow-custom rounded-lg'>
            <h2 className='text-xl md:text-2xl font-medium font-kreonSerif'>
              Login with Email & Password
            </h2>
            {/* Email */}
            <div className='flex flex-col gap-3 my-6'>
              <div className='flex items-center gap-2 pl-2 bg-transparent rounded-lg border border-white'>
                <label htmlFor='email'>
                  <MdEmail />
                </label>
                <input
                  {...register("email", {
                    required: "Provide your email address.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className='px-2 rounded-r-lg py-1 bg-transparent w-full border-l border-white focus:outline-0'
                  type='email'
                  id='email'
                  placeholder='Your Email'
                />
              </div>
              {errors.email && (
                <p className='text-red-700'>{errors.email.message}</p>
              )}
            </div>
            {/* Password */}
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2 bg-transparent pl-2 rounded-lg border border-white'>
                <label htmlFor='password'>
                  <RiLockPasswordFill />
                </label>
                <div className='relative w-full'>
                  <input
                    {...register("password", {
                      required: "Provide a valid password.",
                    })}
                    className='px-2 rounded-r-lg py-1 bg-transparent w-full border-l border-white focus:outline-0'
                    type={showPassword ? "text" : "password"}
                    id='password'
                    placeholder='Your Password'
                  />
                  <span
                    className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              {errors.password && (
                <p className='text-red-700'>{errors.password.message}</p>
              )}
            </div>
            <div onClick={() => setIsOpen(true)} className='text-sm font-medium text-[#3F51B5] text-end mt-2 hover:underline hover:text-white'>
              forgot password?
            </div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2 text-center dark:bg-[#3F51B5] dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-6'
              disabled={userLoading}>
              {userLoading ? buttonLoader : "Login!"}
            </button>
            <p className='text-center text-sm md:text-base font-medium'>
              New to this site?{" "}
              <Link
                href='/register'
                className='hover:pl-4 text-[#3c5cc3] font-bold hover:text-white transition-all duration-500'>
                Register Here!
              </Link>
            </p>
          </form>
        </div>
      </section>
      <ResetPasswordModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Login;
