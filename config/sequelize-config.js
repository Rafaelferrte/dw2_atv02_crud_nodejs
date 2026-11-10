import "dotenv/config";
import { Sequelize } from "sequelize";

const connection = new Sequelize(
  process.env.DB_NAME || "site_senhor_dos_aneis",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    dialect: "mysql",
    timezone: "-03:00",
    logging: false,
  },
);

export default connection;
