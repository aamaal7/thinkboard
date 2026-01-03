export const getBoards = (req, res) => {
  res.status(200).send("There are 10 boards");
};

export const createBoard = (req, res) => {
  res.status(201).json({ message: "Board created" });
};

export const updateBoard = (req, res) => {
  res.status(200).json({ message: "Board updated" });
};

export const deleteBoard = (req, res) => {
  res.status(200).json({ message: "Board deleted" });
};
