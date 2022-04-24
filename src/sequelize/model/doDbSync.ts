import { TestProduct } from "./testProduct";

export const doDbSync = async (forceOption: boolean) => {
  await TestProduct.sync({ force: forceOption });
  console.log("TestProduct model were synchronized successfully.");
};
