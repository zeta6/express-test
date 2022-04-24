import express, { Request, Response, NextFunction } from "express";

import { TestProduct } from "../sequelize/model/testProduct";

interface Condition {
  order: Array<any>;
  offset: number;
  limit: number;
}

// Inside the response is products array and products total.
// 10 products from curOffset are included, sorted by the highest ID number. To fix this part, edit the condition.
export const getTestProducts = async (req: Request, res: Response) => {
  const curOffset = parseInt(req.query.curOffset as string) | 0;
  try {
    const condition: Condition = {
      order: [["id", "DESC"]],
      offset: curOffset,
      limit: 10,
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
  const { name, code, discountRate, price, category } = req.body;
  try {
    const categorys = ["other", "ring", "necklace", "earring"];
    if (!categorys.includes(category)) {
      throw `error: Invalid category value.`;
    }
    await TestProduct.create({
      name: name,
      code: code,
      discountRate: discountRate,
      price: price,
      category: category,
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
  const id = req.params.id;
  const { name, code, discountRate, price, category } = req.body;
  try {
    const categorys = ["other", "ring", "necklace", "earring"];
    if (!categorys.includes(category)) {
      throw `error: Invalid category value.`;
    }
    await TestProduct.update(
      {
        name: name,
        code: code,
        discountRate: discountRate,
        price: price,
        category: category,
      },
      {
        where: { id: id },
      }
    );
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
  const id = req.params.id;
  try {
    await TestProduct.destroy({
      where: { id: id },
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
