import express, { Request, Response, NextFunction } from "express";
// import { sequelize } from "./sequelize/config";
// import { TestProduct } from "./sequelize/model/testProduct";

import { doDbSync } from "./sequelize/model/doDbSync";

import testProductRouter from "./routes/testProduct";

const app = express();

const port = 3000;

// If the option is true, force the table to be dropped and recreated. If false, do nothing if the table already exists.
const dbSyncForceOption = true;
doDbSync(dbSyncForceOption);

app.use("/api", testProductRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("express api sample");
});

app.listen(port, () => {
  console.log(`server listening on port: ${port})`);
});
