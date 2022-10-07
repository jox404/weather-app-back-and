import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  const user = await UserRepository.build(req.body);

  user.set({ lastUpdateWeather: Date.now() });
  try {
    await user.save();
    res.json({ menssage: "user saved" });
  } catch (error) {
    res.json({ menssage: "unable to create user", error: error });
  }
};
