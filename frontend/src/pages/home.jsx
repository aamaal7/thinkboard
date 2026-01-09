import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import { BoardCard } from "../components/BoardCard.jsx";
import toast from "react-hot-toast";
import axios from "axios";
const Home = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await axios.get("http://localhost:5001/actions/boards/");
        console.log(res.data);
        setBoards(res.data);
      } catch (error) {
        toast.error("Failed to load boards");
      } finally {
        setLoading(false);
      }
    };
    fetchBoards();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />

      <div>
        {loading && (
          <div className="text-white font-heading text-2xl font-bold text-center m-20">
            Loading Boards.......
          </div>
        )}

        {boards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-15 mx-10">
            {boards.map((board) => (
              <BoardCard key={board._id} board={board} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
