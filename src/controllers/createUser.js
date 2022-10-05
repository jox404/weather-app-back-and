import UserRepository from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dovenv from "dotenv/config.js";

const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET);
};

export default async (req, res) => {
  const token = await generateAccessToken("joão");
  const user = await UserRepository.build(req.body);
  user.set({ token: token });
  try {
    await user.save();
    res.json({ menssage: "user saved", token: token });
  } catch (error) {
    res.json({ menssage: "unable to create user", error: error });
  }
};
