import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const TestProduct = sequelize.define(
  "TestProduct",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    category: {
      type: DataTypes.ENUM("other", "ring", "necklace", "earring"),
      allowNull: false,
      defaultValue: "other",
    },
  },
  {
    // Other model options go here
  }
);
