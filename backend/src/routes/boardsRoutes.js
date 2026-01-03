import express from "express";
import {
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard,
  getSpecificBoard,
} from "../controllers/boardsControllers.js";

const router = express.Router();

router.get("/", getBoards);

router.get("/:id", getSpecificBoard);

router.post("/", createBoard);

router.put("/:id", updateBoard);

router.delete("/:id", deleteBoard);

export default router;
