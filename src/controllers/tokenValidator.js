import jwt from "jsonwebtoken";
import dovenv from "dotenv/config.js";

export default async (req, res, next) => {
  const token = req.headers["x-access-token"];
  jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: error });
    } else {
      next();
    }
  });
};
