import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import P2 from "./pages/about";
import P3 from "./pages/submit";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<P2 />} />
        <Route path="/submit" element={<P3 />} />
      </Routes>
    </div>
  );
}
export default App;
