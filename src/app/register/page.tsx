"use client";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaUserEdit } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { MdEmail, MdImage } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { buttonLoader } from "@/components/LoadingSpinners/Loaders";
import useUploadImage from "@/hooks/useUploadImage";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerAction } from "@/actions/registerActions";
// Define the form input types
interface RegistrationFormInputs {
  name: string;
  email: string;
  picture: FileList;
  password: string;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [photoUrl, setPhotoURL] = useState("");
  const { uploadImage, imageUploading, imageUploadError } = useUploadImage();
  const router = useRouter();
  const [imageFileName, setImageFileName] = useState(
    "Upload Your Profile Picture"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormInputs>();

  const from = "/login"; // Default redirect path after registration

  useEffect(() => {
    if (errors.name) {
      toast.error(errors.name.message || "Name is required!", {
        duration: 2000,
      });
    }
    if (errors.picture) {
      toast.error(errors.picture.message || "Profile picture is required!", {
        duration: 2000,
      });
    }
    if (errors.email) {
      toast.error(errors.email.message || "Email is required!", {
        duration: 2000,
      });
    }
    if (errors.password) {
      toast.error(errors.password.message || "Password is required!", {
        duration: 2000,
      });
    }
    if (imageUploadError) {
      toast.error(imageUploadError || "Cannot upload image, try again later!", {
        duration: 2000,
      });
    }
  }, [errors, imageUploadError]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const image = e.target.files?.[0];
    if (!image) return;

    const imageUrl = await uploadImage(image);
    setPhotoURL(imageUrl);
    setImageFileName(image.name || "Upload Your Profile Picture");
  };

  const handleRegister: SubmitHandler<RegistrationFormInputs> = async (
    data
  ) => {
    const { name, email, password } = data;

    if (!photoUrl) {
      Swal.fire({
        title: "Error!",
        text: "Profile photo is required!",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    try {
      setRegisterLoading(true);

      const response = await registerAction(name, email, password, photoUrl);

      if (response.success) {
        reset();
        router.push(from);
      } else {
        Swal.fire({
          title: "Error!",
          text: response.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred!",
        icon: "error",
        confirmButtonText: "Close",
      });
      console.log(error);
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <section className='mx-6 md:mx-10 py-2 md:py-8 p-2 md:px-4 flex flex-col items-center'>
      <h2 className='text-2xl md:text-4xl font-semibold text-center mb-8 font-kreonSerif'>
        Please, Register
      </h2>
      <div className='flex-1 flex flex-col items-center gap-2 lg:w-1/2'>
        <div className='flex items-center w-full my-4'>
          <hr className='w-full dark:text-gray-600' />
          <p className='px-3 dark:text-gray-600'>OR</p>
          <hr className='w-full dark:text-gray-600' />
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className='w-full flex flex-col gap-6 px-4 lg:px-8 py-4 lg:py-6 shadow-lg shadow-blue-500 border border-blue-500 rounded-md'>
          <h3 className='text-lg md:text-xl font-medium text-center'>
            Register with Email & Password
          </h3>
          {/* Name */}
          <div className='flex flex-col gap-3'>
            <label className='font-medium' htmlFor='name'>
              Your Name *
            </label>
            <div className='flex items-center gap-2 bg-transparent pl-2 rounded-lg border border-white'>
              <FaUserEdit className='text-gray-500' />
              <input
                {...register("name", {
                  required: "You must provide your name.",
                })}
                className='px-2 rounded-r-lg py-1 bg-transparent w-full focus:outline-0'
                type='text'
                id='name'
                placeholder='Enter Your Name'
              />
            </div>
            {errors.name && (
              <p className='text-red-700'>{errors.name.message}</p>
            )}
          </div>
          {/* Email */}
          <div className='flex flex-col gap-3'>
            <label className='font-medium' htmlFor='email'>
              Your Email *
            </label>
            <div className='flex items-center gap-2 bg-transparent pl-2 rounded-lg border border-white'>
              <MdEmail className='text-gray-500' />
              <input
                {...register("email", {
                  required: "Provide a valid email address!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className='px-2 rounded-r-lg py-1 bg-transparent w-full focus:outline-0'
                type='email'
                id='email'
                placeholder='Enter Your Email'
              />
            </div>
            {errors.email && (
              <p className='text-red-700'>{errors.email.message}</p>
            )}
          </div>
          {/* Profile Picture */}
          <div className='flex flex-col gap-3'>
            <label className='font-medium' htmlFor='picture'>
              Choose Your Profile Picture *
            </label>
            <div className='flex items-center gap-2 bg-transparent pl-2 py-2 rounded-lg border border-white'>
              <MdImage className='text-gray-500' />
              <div className='w-full'>
                <div className='relative w-full'>
                  <input
                    {...register("picture", {
                      required: "Provide an Image File!",
                    })}
                    className='absolute w-full h-full opacity-0 cursor-pointer bg-transparent focus:outline-0'
                    type='file'
                    id='picture'
                    accept='image/jpeg, image/bmp, image/png, image/gif'
                    onChange={(e) => handleImageChange(e)}
                  />
                  <label
                    htmlFor='picture'
                    className='px-2 rounded-r-lg py-1 text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-500 block w-full overflow-hidden whitespace-nowrap overflow-ellipsis absolute top-1/2 left-0 -translate-y-1/2 bg-transparent cursor-pointer'>
                    {imageUploading ? "Image Uploading" : imageFileName}
                  </label>
                </div>
              </div>
            </div>
            {errors.picture && (
              <p className='text-red-700'>{errors.picture.message}</p>
            )}
          </div>
          {/* Password */}
          <div className='flex flex-col gap-3'>
            <label className='font-medium' htmlFor='password'>
              Your Password *
            </label>
            <div className='flex items-center gap-2 bg-transparent pl-2 rounded-lg border border-white'>
              <RiLockPasswordFill className='text-gray-500' />
              <div className='relative w-full'>
                <input
                  {...register("password", {
                    required: "You must choose a password.",
                    minLength: {
                      value: 6,
                      message: "Password must contain 6 characters!",
                    },
                    validate: {
                      isCapital: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain uppercase!",
                      isNumeric: (value) =>
                        /[0-9]/.test(value) ||
                        "Password must contain a number!",
                      isSpecialChar: (value) =>
                        /[!@#$%^&*()_+\-~=[\]{};'`:"\\|,.<>/?]/.test(value) ||
                        "Password must contain a symbol!",
                    },
                  })}
                  className='px-2 rounded-r-lg py-1 bg-transparent w-full focus:outline-0'
                  type={showPassword ? "text" : "password"}
                  id='password'
                  placeholder='Enter Your Password'
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
          <button
            type='submit'
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
              registerLoading || (imageUploading && "bg-gray-200 text-black")
            }`}
            disabled={registerLoading || imageUploading}>
            {registerLoading
              ? buttonLoader
              : imageUploading
              ? "Image Uploading"
              : "Register New Account"}
          </button>
          <p className='text-center text-sm md:text-base font-medium'>
            Already have an Account?{" "}
            <Link
              href='/login'
              className='hover:pl-4 text-[#3c5cc3] font-bold hover:text-white transition-all duration-500'>
              Login Here!
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
