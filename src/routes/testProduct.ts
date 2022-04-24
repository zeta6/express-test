import { Router } from "express";

import { createTestProduct } from "../controller/testProduct";

const testProductRouter = Router();

// router.get("/test-product", getTestProduct);
// router.get("/test-product/:id", getTestProductDetail);

testProductRouter.post("/test-product", createTestProduct);

export default testProductRouter;

// router.put("/test-product/:id", putTestProduct);

// router.delete("/test-product/:id", delTestProduct);
