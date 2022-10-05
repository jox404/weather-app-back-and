import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  const user = await UserRepository.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user) {
    console.log(user);
    if (user.password === req.body.password) {
      res.json({ menssage: "User find", user: user, token: user.token });
    } else {
      res.json({ menssage: "incorrect password" });
    }
  } else {
    res.json({ menssage: "User don't find" });
  }
};
