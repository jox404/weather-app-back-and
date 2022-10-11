import express from "express";
import findAll from "../controllers/findAll.js";
import createUser from "../controllers/createUser.js";
import updateUser from "../controllers/updateUser.js";
import deleteUser from "../controllers/deleteUser.js";
import addFavorite from "../controllers/addFavorite.js";
import updateFavorites from "../controllers/updateFavorites.js";
import login from "../controllers/login.js";
import getFavorites from "../controllers/getFavorites.js";
import removeFavorite from "../controllers/removeFavorite.js";
import tokenValidator from "../controllers/tokenValidator.js";
import setMainCity from "../controllers/setMainCity.js";
import getMainCity from "../controllers/getMainCity.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ status: "Server Online" });
});
routes.get("/findAll", findAll);
routes.post("/createUser", createUser);
routes.put("/userUpdate/:id", tokenValidator, updateUser);
routes.delete("/userDelete/:id", deleteUser);
routes.get("/favorites/:id", tokenValidator, getFavorites);
routes.post("/addFavorite/:id", tokenValidator, addFavorite);
routes.post("/setMainCity/:id", tokenValidator, setMainCity);
routes.get("/mainCity/:id", tokenValidator, getMainCity);
routes.put("/updateFavorites/:id", tokenValidator, updateFavorites);
routes.delete("/removeFavorite/:index/:id", tokenValidator, removeFavorite);
routes.post("/login", login);

export default { routes };
