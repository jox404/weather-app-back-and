import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  /* const user = await UserRepository.findOne({
    where: {
      name: req.body.name,
      password: req.body.password,
    },
  }); */
  try {
    await UserRepository.update(
      {
        name: req.body.name,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const user = await UserRepository.findByPk(req.params.id);
    res.status(200).json({ message: "user updated", user: user });
  } catch (error) {
    res.json({ menssage: "unable to update", error: error });
  }
};
