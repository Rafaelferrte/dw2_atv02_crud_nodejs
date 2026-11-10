import connection from "../config/sequelize-config.js";
import { DataTypes } from "sequelize";

const Local = connection.define("locais", {
  local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regiao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  habitantes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Local;
