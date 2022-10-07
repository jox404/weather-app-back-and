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

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ status: "Server Online" });
});
routes.get("/findAll", tokenValidator, findAll);
routes.post("/createUser", createUser);
routes.put("/userUpdate/:id", updateUser);
routes.delete("/userDelete/:id", deleteUser);
routes.get("/favorites", getFavorites);
routes.post("/addFavorites", addFavorite); /* mudar nome para singular */
/* routes.put("/updateFavorites", updateFavorites); */
routes.delete("/removeFavorite/:index", removeFavorite);
routes.post("/login", login);

export default { routes };
