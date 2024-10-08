import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`mongoDb connected db name ${res.connection.db.databaseName}`);
  } catch (err) {
    console.log(`mongoDB connection error: ${err}`);
  }
};
