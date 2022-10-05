import express from "express";
import findAll from "../controllers/findAll.js";
import createUser from "../controllers/createUser.js";
import updateUser from "../controllers/updateUser.js";
import deleteUser from "../controllers/deleteUser.js";
import updateFavorites from "../controllers/updateFavorites.js";
import login from "../controllers/login.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ status: "Server Online" });
});
routes.get("/findAll", findAll);
routes.post("/createUser", createUser);
routes.put("/userUpdate/:id", updateUser);
routes.delete("/userDelete/:id", deleteUser);
routes.put("/updateFavorites/:id", updateFavorites);
routes.post("/login", login);

export default { routes };
