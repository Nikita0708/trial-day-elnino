import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";
import { toDoRoutes } from "./modules/to-do";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const swaggerOptions = {
  customSiteTitle: "El niño Trial Day To-Do app",
  configUrl: "http://localhost:4000",
  explorer: true,
};

mongoose
  .connect("")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/to-do", toDoRoutes);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerOptions)
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
