import express from "express";
import {
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../controllers/boardsControllers.js";

const router = express.Router();

router.get("/", getBoards);

router.post("/", createBoard);

router.put("/:id", updateBoard);

router.delete("/:id", deleteBoard);

export default router;
