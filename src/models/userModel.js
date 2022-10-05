import { DataTypes, Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("user", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "[]",
    /*     set(value) {
      return this.setDataValue("favoriteCities", JSON.stringify(value));
    }, */
  },
  mainCity: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "São paulo",
  },
});
