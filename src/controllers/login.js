import UserRepository from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dovenv from "dotenv/config.js";

const generateAccessToken = (userId) => {
  return jwt.sign(userId, process.env.TOKEN_SECRET);
};

export default async (req, res) => {
  const user = await UserRepository.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user) {
    console.log(user);
    if (user.password === req.body.password) {
      const token = await generateAccessToken(user.id);
      res.json({ menssage: "User find", user: user, token: token });
    } else {
      res.json({ menssage: "incorrect password" });
    }
  } else {
    res.json({ menssage: "User don't find" });
  }
};
