import mongoose from "mongoose";

const connectDB = (connectionStr: string) => {
  return mongoose.connect(connectionStr);
}

export default connectDB;