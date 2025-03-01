import axios from "axios";
import toast from "react-hot-toast";

export async function resetPasswordActions(email: string) {
  if (!email) {
    toast.error("Email is required!");
    return { success: false, message: "Email is required!" };
  }

  try {
    const userData = { email };

    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reset-password`,
      userData
    );

    if (data.status === 200) {
      toast.success(data.message);
      return { success: true, message: data.message };
    } else {
      toast.error(data.message);
      return { success: false, message: data.message };
    }
  } catch (error) {
    return {
      success: false,
      message: "Password Reset Failed!",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
