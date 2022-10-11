import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  try {
    const user = await UserRepository.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      const mainCity = user.mainCity;

      if (mainCity) {
        res.json({ mainCity });
      } else {
        res.json({ menssage: "mainCity don't find" });
      }
    } else {
      res.json({ menssage: "USer don't find" });
    }
  } catch (error) {
    console.log(error);
    res.end();
  }
};
