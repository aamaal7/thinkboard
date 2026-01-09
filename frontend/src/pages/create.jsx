import React, { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/api";
import toast from "react-hot-toast";
const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content can't be empty");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/boards", {
        title,
        content,
      });

      toast.success("Board created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create board");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <div className="p-6 md:p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft className="size-6 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Boards</span>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-12 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Create New Board
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-300 mb-3"
            >
              Board Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your board"
              className="
                w-full px-5 py-4 
                bg-black/40 backdrop-blur-xl 
                border border-blue-500/30 
                rounded-xl 
                text-white text-lg 
                placeholder:text-gray-500 
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30
                transition-all duration-300
              "
              maxLength={100}
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-lg font-medium text-gray-300 mb-3"
            >
              Content / Description
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the content of your board"
              rows={8}
              className="
                w-full px-5 py-4 
                bg-black/40 backdrop-blur-xl 
                border border-blue-500/30 
                rounded-xl 
                text-white text-lg 
                placeholder:text-gray-500 
                resize-y min-h-[180px]
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30
                transition-all duration-300
              "
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="
                inline-flex items-center gap-3
                px-8 py-4
                bg-blue-600 hover:bg-blue-500
                disabled:bg-blue-800 disabled:cursor-not-allowed
                text-white font-medium text-lg
                rounded-full
                shadow-lg shadow-blue-700/40
                hover:shadow-xl hover:shadow-blue-600/60
                border border-blue-400/30
                transition-all duration-300
                hover:scale-105 active:scale-95
                disabled:scale-100
              "
            >
              {loading ? (
                <>
                  <Loader2 className="size-6 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Board"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
