import { Router } from "express";

import {
  createTestProduct,
  getTestProducts,
  getTestProduct,
  updateTestProduct,
  delTestProduct,
} from "../controller/testProduct";

const testProductRouter = Router();

testProductRouter.post("/test-product", createTestProduct);

testProductRouter.get("/test-product", getTestProducts);
testProductRouter.get("/test-product/:id", getTestProduct);

testProductRouter.put("/test-product/:id", updateTestProduct);

testProductRouter.delete("/test-product/:id", delTestProduct);

export default testProductRouter;
