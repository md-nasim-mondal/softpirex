import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!!"],
      // unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required!!"],
      unique: [true, "This email is already exists!!"],
    },
    password: {
      type: String,
      required: true,
    },
    joined_on: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifyToken: String,
    verifyTokenExpire: Date,
  },
  {
    collection: "users",
  }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
