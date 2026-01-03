import Board from "../models/Board.js";

export async function getBoards(req, res) {
  try {
    const boards = await Board.find().sort({ createdAt: -1 });
    res.status(200).json(boards);
  } catch (error) {
    console.error("Get ERROR: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSpecificBoard(req, res) {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) return res.status(404).json({ message: "Board not found" });
    res.status(200).json(board);
  } catch (error) {
    console.error("Get ERROR: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createBoard(req, res) {
  try {
    const { title, content } = req.body;
    const newBoard = new Board({ title, content });

    await newBoard.save();
    res.status(201).json({ message: "Board created" });
  } catch (error) {
    console.error("post ERROR: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateBoard(req, res) {
  try {
    const { title, content } = req.body;
    const updatedBoard = await Board.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedBoard)
      return res.status(404).json({ message: "Board not found" });
    res.status(200).json({ message: "Board Updated" });
  } catch (error) {
    console.error("put ERROR: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteBoard(req, res) {
  try {
    const { title, content } = req.body;
    const deletedBoard = await Board.findByIdAndDelete(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!deletedBoard)
      return res.status(404).json({ message: "Board not found" });
    res.status(200).json({ message: "Board Deleted" });
  } catch (error) {
    console.error("delete ERROR: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
