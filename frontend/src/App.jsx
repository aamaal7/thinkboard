import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
