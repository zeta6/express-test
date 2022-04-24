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
    code: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    discountRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM,
      values: ["other", "ring", "necklace", "earring"],
      defaultValue: "other",
    },
  },
  {
    // Other model options go here
  }
);
