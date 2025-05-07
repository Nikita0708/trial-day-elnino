import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API Documentation",
    },
  },
  apis: ["./src/modules/**/index.ts"], // 👈 points to all module route files
};

export const swaggerSpec = swaggerJSDoc(options);
