import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-blue-600/30">
      <div className="flex justify-between items-center w-7xl p-5">
        <h1 className="font-logo tracking-tighter font-bold text-3xl">
          ThinkBoard
        </h1>
        <div className="flex justify-center items-center">
          <h2 className="text-xl">Hello, User</h2>
          <img
            className="object-cover h-10 ml-3 w-10 rounded-full border-1 hover:cursor-pointer"
            src="profile.png"
            alt="profile photo"
          />
        </div>
      </div>
    </div>
  );
};
