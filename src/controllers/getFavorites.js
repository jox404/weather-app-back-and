import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  console.log("chamou");
  const user = await UserRepository.findOne({
    where: {
      id: req.params.id,
    },
  });
  console.log(user, "user");
  if (user) {
    let favoriteCities = user.favoriteCities;
    favoriteCities = JSON.parse(favoriteCities);

    res.json({
      favorites: favoriteCities,
      lastUpdateWeather: user.lastUpdateWeather,
    });
  } else {
    res.json({ menssage: "unable to fund favorite list of user", user: user });
  }
};
