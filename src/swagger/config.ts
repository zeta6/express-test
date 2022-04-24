import swaggereJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "express.js api sample docs",
      version: "1.0.0",
      description: "express.js api sample.",
    },
    host: "http://localhost:3000/",
    basePath: "/",
  },
  apis: ["./src/swagger/yml/*"],
};

export const specs = swaggereJsdoc(options);
