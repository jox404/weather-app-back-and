import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  const user = await UserRepository.findOne({
    where: {
      id: req.params.id,
    },
  });

  let favoriteCities = JSON.parse(user.favoriteCities);

  const alreadyExists = favoriteCities.find((city) => {
    return city.name === req.body.favorite.name;
  });

  if (!alreadyExists) {
    favoriteCities.push(req.body.favorite);
    favoriteCities = JSON.stringify(favoriteCities);

    user.set({
      favoriteCities: favoriteCities,
    });
    await user.save();
    res.json({ menssage: "City added successfully", user: user });
  } else {
    res.json({ menssage: "City already add" });
  }
};
