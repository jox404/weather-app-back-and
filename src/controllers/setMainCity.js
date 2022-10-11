import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  const user = await UserRepository.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (user) {
    console.log(req.body.mainCity);
    if (req.body.mainCity) {
      try {
        await user.update({
          mainCity: req.body.mainCity,
        });
        user.save();
        res.json({ menssage: "City added successfully", user: user });
      } catch (error) {
        console.log(error);
      }
    } else {
      res.json({ menssage: "City is not defined in Body" });
    }
  } else {
    res.json({ menssage: "User Dont find" });
  }
};
