import { DataTypes, Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("user", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  favoriteCities: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: "[]",
  },
  mainCity: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {},
  },
  lastUpdateWeather: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
