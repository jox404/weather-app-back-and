import UserModel from "../models/userModel.js";

export default async (req, res) => {
  const user = await UserModel.findByPk(req.params.id);
  const newFavorite = await req.body.favorite;
  let newFavoritesList = [];
  let favoritesPrev = await user.favoriteCities;
  favoritesPrev = JSON.parse(favoritesPrev);
  favoritesPrev.push(newFavorite);
  newFavoritesList = favoritesPrev;
  newFavoritesList = JSON.stringify(newFavoritesList);
  if (typeof JSON.parse(newFavoritesList) != typeof []) {
    res.json({
      message: "update favorites, invalid JSON ",
      favorites: newFavoritesList,
    });
  } else {
    try {
      await user.update({
        favoriteCities: newFavoritesList,
      });
      let favorites = await user.getDataValue("favoriteCities");
      res.json({ message: "update favorites", favorites: favorites });
    } catch (error) {
      res.json({ message: "unable to update favorites", error: error });
    }
  }
};
