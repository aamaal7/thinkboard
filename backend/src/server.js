import express from "express";
import boardsRoutes from "./routes/boardsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB();

app.use("/actions/boards", boardsRoutes);

app.listen(5001, () => {
  console.log("Server started on port 5001");
});

//
