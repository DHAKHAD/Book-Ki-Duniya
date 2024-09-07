import React from "react";

import Home from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Contect from "./components/Contect";
import About from "./components/About";
import Toaster from "react-hot-toast";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
