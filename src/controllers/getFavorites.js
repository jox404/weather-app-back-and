import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  const user = await UserRepository.findOne({
    where: {
      token: req.headers["x-access-token"],
    },
  });
  let favoriteCities = user.favoriteCities;
  favoriteCities = JSON.parse(favoriteCities);

  if (user) {
    res.json({
      favorites: favoriteCities,
      lastUpdateWeather: user.lastUpdateWeather,
    });
  } else {
    res.json({ menssa: "user dont find" });
  }
};
