import React from "react";
import Course from "../components/Course";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Courses() {
  return (
    <>
      <div className="min-h-screen">
        <Course />
      </div>
      <Navbar />
      <Footer />
    </>
  );
}

export default Courses;
