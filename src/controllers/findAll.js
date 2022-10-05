import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  const clients = await UserRepository.findAll();
  res.json(clients);
};
