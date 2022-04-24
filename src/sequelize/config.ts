import { Sequelize } from "sequelize";
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PWD, DB_DBNAME, DB_DIALECT } = process.env;

const dialects = ["mysql", "mariadb", "postgres", "mssql"];

const dbConfigArr = [DB_HOST, DB_USER, DB_PWD, DB_DBNAME, DB_DIALECT];

const checkCbConfig = (configArr: Array<string | undefined>): boolean => {
  let bool = true;
  configArr.forEach((config, index) => {
    if (typeof config !== "string") {
      bool = false;
    }
    if (index === 4 && typeof config === "string") {
      if (!dialects.includes(config)) bool = false;
    }
  });
  return bool;
};

try {
  if (!checkCbConfig(dbConfigArr)) {
    throw "Error: DB-related information in the environment variable is missing or incorrect";
  }
} catch (e) {
  console.log(e);
}

export const sequelize = new Sequelize(
  DB_DBNAME as string,
  DB_USER as string,
  DB_PWD as string,
  {
    host: DB_HOST as string,
    dialect: DB_DIALECT as "mysql" | "mariadb" | "postgres" | "mssql",
  }
);
