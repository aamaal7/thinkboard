import { Link } from "react-router-dom";
import { PenSquare, Trash2 } from "lucide-react";

export const BoardCard = ({ board }) => {
  return (
    <Link
      to={`/board/${board._id}`}
      className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-black/20 to-black/5 backdrop-blur-2xl border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.7)] hover:border-blue-400/50 hover:scale-[1.02] transition-all duration-400 ease-out"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-7 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-300 transition-colors">
          {board.title}
        </h3>

        <p className="text-gray-300 text-sm line-clamp-3 mb-6 flex-grow">
          {board.content}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="font-medium">
            {new Date(board.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          <div className="flex gap-3">
            <button className="p-2 rounded-lg bg-black/30 hover:bg-blue-600/30 text-blue-300 hover:text-white transition-colors">
              <PenSquare className="size-5" />
            </button>
            <button className="p-2 rounded-lg bg-black/30 hover:bg-red-600/30 text-red-300 hover:text-white transition-colors">
              <Trash2 className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
