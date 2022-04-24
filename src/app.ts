import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

// import { sequelize } from "./sequelize/config";
// import { TestProduct } from "./sequelize/model/testProduct";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger/config";
// import { swaggerUi, specs } from "./src/swagger/config.ts";
import { doDbSync } from "./sequelize/model/doDbSync";
import testProductRouter from "./routes/testProduct";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = 3000;

// If the option is true, force the table to be dropped and recreated. If false, do nothing if the table already exists.
const dbSyncForceOption = false;
doDbSync(dbSyncForceOption);

app.use("/api", testProductRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("express api sample");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`server listening on port: ${port})`);
});
