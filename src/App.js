import React from "react";
import Home from "./pages/Home/Home";
import Place from "./pages/Place/Place";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/place" element={<Place />} />
    </Routes>
  );
}

export default App;
