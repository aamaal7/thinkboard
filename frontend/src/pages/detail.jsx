import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/api";
import { ArrowLeft, Loader2, Save, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const Detail = () => {
  const [board, setBoard] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await api.get(`/boards/${id}`);
        setBoard(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        toast.error("Failed to load board");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchBoard();
  }, [id, navigate]);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content cannot be empty");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/boards/${id}`, { title, content });
      toast.success("Board updated successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete this board? This action cannot be undone."
      )
    ) {
      return;
    }

    setDeleting(true);
    try {
      await api.delete(`/boards/${id}`);
      toast.success("Board deleted successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete board");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-950 to-black">
        <div className="flex items-center gap-3 text-blue-400 text-xl">
          <Loader2 className="size-8 animate-spin" />
          <span>Loading board...</span>
        </div>
      </div>
    );
  }

  if (!board) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black text-white">
      <div className="p-6 md:p-8">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft className="size-6 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Boards</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Edit Board
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="
                inline-flex items-center gap-3
                px-8 py-4
                bg-green-600 hover:bg-green-500 disabled:bg-green-800
                text-white font-medium text-lg
                rounded-full
                shadow-lg shadow-green-700/40 hover:shadow-xl hover:shadow-green-600/60
                border border-green-400/30
                backdrop-blur-md
                transition-all duration-300
                hover:scale-105 active:scale-95
                disabled:scale-100 disabled:cursor-not-allowed
              "
            >
              {saving ? (
                <>
                  <Loader2 className="size-6 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="size-6" />
                  Save Changes
                </>
              )}
            </button>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="
                inline-flex items-center gap-3
                px-8 py-4
                bg-red-600 hover:bg-red-500 disabled:bg-red-800
                text-white font-medium text-lg
                rounded-full
                shadow-lg shadow-red-700/40 hover:shadow-xl hover:shadow-red-600/60
                border border-red-400/30
                backdrop-blur-md
                transition-all duration-300
                hover:scale-105 active:scale-95
                disabled:scale-100 disabled:cursor-not-allowed
              "
            >
              {deleting ? (
                <>
                  <Loader2 className="size-6 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="size-6" />
                  Delete Board
                </>
              )}
            </button>
          </div>
        </div>

        <div className="space-y-8">
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
              placeholder="Board title..."
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
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Your board content goes here..."
              rows={12}
              className="
                w-full px-5 py-4
                bg-black/40 backdrop-blur-xl
                border border-blue-500/30
                rounded-xl
                text-white text-lg
                placeholder:text-gray-500
                resize-y min-h-75
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30
                transition-all duration-300
              "
            />
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          Last updated:{" "}
          {new Date(board.updatedAt || board.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Detail;
