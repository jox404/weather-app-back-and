import UserRepository from "../models/userModel.js";

export default async (req, res) => {
  try {
    const user = await UserRepository.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      let prevFavorites = user.favoriteCities;
      prevFavorites = JSON.parse(prevFavorites);
      prevFavorites.splice(req.params.index, 1);

      res.json({ teste: prevFavorites });
      let newFavorites = JSON.stringify(prevFavorites);
      await user.set({
        favoriteCities: newFavorites,
      });
      user.save();
    } else {
      res.json({ menssage: "User dont found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};
