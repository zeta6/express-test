import express, { Request, Response, NextFunction } from "express";

import { TestProduct } from "../sequelize/model/testProduct";
import { chkTestProductVal } from "../utils/TestProduct";

interface Condition {
  order: Array<any>;
  offset: number;
  limit: number;
}

// Inside the response is products array and products total.
// 10 products from curOffset are included, sorted by the highest ID number. To fix this part, edit the condition.
export const getTestProducts = async (req: Request, res: Response) => {
  const curOffset = parseInt(req.query.curOffset as string) | 0;
  const limit = parseInt(req.query.limit as string) | 10;
  try {
    const condition: Condition = {
      order: [["id", "DESC"]],
      offset: curOffset,
      limit: limit,
    };
    const resultArr: Array<object | number> = await Promise.all([
      TestProduct.findAll(condition),
      TestProduct.count(),
    ]);
    const filtered = resultArr[0];
    const total = resultArr[1];
    res.send({
      success: true,
      data: {
        filtered: filtered,
        total: total,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({
      success: false,
      error: `error: ${e}`,
    });
  }
};

// One product in the response
export const getTestProduct = async (req: Request, res: Response) => {
  const prodId = req.params.id;
  try {
    const result = await TestProduct.findOne({ where: { id: prodId } });
    if (result === null) throw `The ID:${prodId} does not exist.`;
    res.send({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.send({
      success: false,
      error: `error: ${e}`,
    });
  }
};

export const createTestProduct = async (req: Request, res: Response) => {
  const { name, code, discountRate, price, category, likes } = req.body;
  try {
    chkTestProductVal(discountRate, category);
    await TestProduct.create({
      name: name,
      code: code,
      discountRate: discountRate,
      price: price,
      category: category,
      likes: likes,
    });
    res.send({
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.send({
      success: false,
      error: `error: ${e}`,
    });
  }
};

export const updateTestProduct = async (req: Request, res: Response) => {
  const prodId = req.params.id;
  const { name, code, discountRate, price, category, likes } = req.body;
  try {
    chkTestProductVal(discountRate, category);
    const result = await TestProduct.update(
      {
        name: name,
        code: code,
        discountRate: discountRate,
        price: price,
        category: category,
        likes: likes,
      },
      {
        where: { id: prodId },
      }
    );
    if (result[0] === 0)
      throw `The ID:${prodId} does not exist or a duplicate request has been received.`;
    res.send({
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.send({
      success: false,
      error: `error: ${e}`,
    });
  }
};

export const delTestProduct = async (req: Request, res: Response) => {
  const prodId = req.params.id;
  try {
    const result = await TestProduct.destroy({
      where: { id: prodId },
    });
    if (result === 0)
      throw `The ID:${prodId} does not exist or a duplicate request has been received.`;
    res.send({
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.send({
      success: false,
      error: `error: ${e}`,
    });
  }
};
