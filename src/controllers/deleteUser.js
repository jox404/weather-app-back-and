import { where } from "sequelize";
import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  try {
    await UserRepository.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ menssage: "user deleted" });
  } catch (error) {
    res.json({ menssage: "unable to delete user" });
  }
};
