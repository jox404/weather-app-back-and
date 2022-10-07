import UserModel from "../models/userModel.js";

export default async (req, res) => {
  const user = await UserModel.findOne({
    where: {
      token: req.headers["x-access-token"],
    },
  });
  const newFavorite = req.body.favorite;
  let favoritesPrev = JSON.parse(user.favoriteCities);

  let updateCityIndex = favoritesPrev.findIndex((city) => {
    return city.name === newFavorite.name;
  });

  if (updateCityIndex !== -1) {
    favoritesPrev[updateCityIndex] = newFavorite;

    favoritesPrev = JSON.stringify(favoritesPrev);
    try {
      user.update({
        favoriteCities: favoritesPrev,
      });
      await user.save();
      let favorites = await user.getDataValue("favoriteCities");
      favorites = JSON.parse(favorites);
      res.json({ message: "update favorites", favorites: favorites });
    } catch (error) {
      res.json({ message: "unable to update favorites", error: error });
    }
  } else {
    res.json({
      message: "unable to update favorites, city not found",
    });
  }
};
