import connection from "../config/sequelize-config.js";
import { DataTypes } from "sequelize";

const Personagem = connection.define("personagens", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  papel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Personagem;
