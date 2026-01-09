import React from "react";
import { FileText, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const NotesNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <FileText
          className="size-24 md:size-32 text-blue-400/70 relative"
          strokeWidth={1.2}
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        No Boards Found
      </h2>

      <p className="text-lg text-gray-400 max-w-md mb-10">
        It appears there are no boards available at this time. Create one to get
        started.
      </p>

      <Link
        to="/create"
        className="
          inline-flex items-center gap-3
          px-8 py-4
          bg-linear-to-r from-blue-600 to-blue-700
          hover:from-blue-500 hover:to-blue-600
          text-white font-medium text-lg
          rounded-full
          shadow-xl shadow-blue-700/40
          hover:shadow-2xl hover:shadow-blue-600/60
          border border-blue-400/30
          backdrop-blur-md
          transition-all duration-300
          hover:scale-105 active:scale-95
          group
        "
      >
        <PlusCircle className="size-6 group-hover:rotate-12 transition-transform" />
        Create New Board
      </Link>

      <p className="mt-8 text-sm text-gray-500">
        Your workspace is ready whenever you're prepared to begin.
      </p>
    </div>
  );
};
