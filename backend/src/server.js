import express from "express";
import boardsRoutes from "./routes/boardsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
connectDB();

app.use("/actions/boards", boardsRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//
