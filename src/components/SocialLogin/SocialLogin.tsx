import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
	const handleClick = () => {
		signIn("google", { callbackUrl: "/" });
	}
  return (
    <div className='text-white'>
      <h3 className='text-lg md:text-xl font-medium text-center mb-6 font-kreonSerif'>
        Continue with Social Media
      </h3>
      <div className='flex flex-col md:flex-row md:items-center gap-4 text-xl font-bold tracking-wider'>
        <button
          aria-label='Login with Google'
          type='button'
		  onClick={() => handleClick()}
          className='flex items-center justify-center w-full px-2 py-1 gap-2 border rounded-md border-blue-600 bg-blue-600 text-[#fff] hover:text-blue-600 hover:bg-transparent transition-all duration-500'>
          <FaGoogle />
          <p>Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
