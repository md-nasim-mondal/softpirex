import axios from "axios";
import toast from "react-hot-toast";

export async function registerAction(
  name: string,
  email: string,
  password: string,
  photoUrl: string
) {
  if (!photoUrl) {
    toast.error("Profile photo is required!");
    return { success: false, message: "Profile photo is required!" };
  }

  try {
    const userData = { name, email, image: photoUrl, password };

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`,
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
    console.error("Registration Error:", error);
    return {
      success: false,
      message: "Registration failed",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
