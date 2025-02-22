import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Validate environment variable
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined");
    }

    const connection = mongoose.connection;

    // Set up event listeners
    connection.on("connected", () => {
      console.log("MongoDB connected successfully with mongoose!!");
    });

    connection.on("error", (error: unknown) => {
      console.error("MongoDB connection error: ", error);
      process.exit(1);
    });

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "softpirexDB",
    });

    // Return the connection object (optional)
    return connection;
  } catch (err: unknown) {
    console.error("Failed to connect to MongoDB:", err);
    throw err; // Rethrow the error to prevent the application from starting
  }
};