import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from "./models/userSchema.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_DB = process.env.MONGO_DB;
//console.log(process.env);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

//Route to save the new book
app.post("/users", async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      lastName: req.body.lastName,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
    };
    const user = await User.create(newUser);
    return res.status(201).send(user);
  } catch (err) {
    console.log(error.message);
  }
});

//Route to get the users
app.get("/users", async (re, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log("app is running at " + PORT);
});

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database is facing issues" + err);
  });
