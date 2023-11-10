import React from "react";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Accommodation } from "./pages/Accommodation.jsx";
import { Error } from "./pages/Error.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
