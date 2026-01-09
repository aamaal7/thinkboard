import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-blue-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="group flex items-center">
            <h1 className="font-logo tracking-tighter font-extrabold text-3xl md:text-4xl bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
              ThinkBoard
            </h1>
          </Link>

          <div className="flex items-center">
            <Link
              to="/create"
              className="
                inline-flex items-center gap-2 sm:gap-3
                px-5 sm:px-6 md:px-8 lg:px-10
                py-2.5 sm:py-3 md:py-3.5
                bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600
                text-white font-medium text-base sm:text-lg
                rounded-full
                shadow-lg shadow-blue-700/30 hover:shadow-xl hover:shadow-blue-600/50
                border border-blue-400/20
                backdrop-blur-md
                transition-all duration-300 ease-out
                hover:scale-105 active:scale-95
                group
              "
            >
              <span>New Board</span>
              <PlusIcon className="size-5 sm:size-6 group-hover:rotate-90 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
