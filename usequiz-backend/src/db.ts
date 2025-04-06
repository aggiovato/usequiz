import mongoose from "mongoose";
import { MONGO_URI } from "./config/config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI!);
    console.log(`*** MongoDB connected *** ${conn.connection.host}`);
  } catch (err) {
    console.error("*** MongoDB connection failed ***", err);
    process.exit(1);
  }
};

const closeDB = async () => {
  await mongoose.connection.close();
  console.log("*** MongoDB connection closed ***");
  process.exit(0);
};

const disconnectDB = async () => {
  await mongoose.disconnect();
  console.log("*** MongoDB disconnected ***");
  process.exit(0);
};

export { connectDB, closeDB, disconnectDB };
export default connectDB;
