import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    address: String,
    email: String,
    phone: Number,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("userModel", userSchema);
