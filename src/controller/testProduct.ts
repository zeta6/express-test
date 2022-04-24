import express, { Request, Response, NextFunction } from "express";

import { TestProduct } from "../sequelize/model/testProduct";

export const createTestProduct = async (req: Request, res: Response) => {
  TestProduct.create({
    name: "test-001",
    price: 100000,
    category: "ring",
  });
  res.send("tested");
};
