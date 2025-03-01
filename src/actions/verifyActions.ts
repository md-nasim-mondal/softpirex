import axios from "axios";

export async function verifyTokenAction(token: string, tokenType: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-token?token=${token}&tokenType=${tokenType}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    return { valid: false, error: error };
  }
}

export async function verifyEmailAction(token: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${token}`
    );
    return res.data;
  } catch (error) {
    return { message: "Verification failed", status: 500, error: error };
  }
}

export async function verifyPasswordResetAction(
  token: string,
  passData: {
    password: string;
  }
) {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-reset-password?token=${token}`, passData
    );
    return res.data;
  } catch (error) {
    return { message: "Verification failed", status: 500, error: error };
  }
}
