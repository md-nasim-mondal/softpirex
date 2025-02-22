import axios from "axios";
import { useState } from "react";

// Define the type for the image upload response
interface ImageUploadResponse {
  data: {
    display_url: string;
  };
}

// Define the type for the hook's return value
interface UseImageUploadReturn {
  uploadImage: (image: File) => Promise<string>;
  imageUploading: boolean;
  imageUploadError: string | null;
}

const useImageUpload = (): UseImageUploadReturn => {
  const [imageUploading, setImageUploading] = useState(false); // Track loading state
  const [imageUploadError, setImageUploadError] = useState<string | null>(null); // Track errors

  const uploadImage = async (image: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", image);

    setImageUploading(true); // Set loading to true
    setImageUploadError(null); // Reset any previous errors

    try {
      const { data } = await axios.post<ImageUploadResponse>(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY as string}`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      setImageUploading(false); // Set loading to false after success
      return data.data.display_url; // Return the image URL
    } catch (error) {
      setImageUploading(false); // Set loading to false on error
      setImageUploadError("Failed to upload image. Please try again."); // Set error message
      console.error("Image upload failed:", error);
      throw error; // Re-throw the error for further handling if needed
    }
  };

  return { uploadImage, imageUploading, imageUploadError }; // Return the function and state
};

export default useImageUpload;