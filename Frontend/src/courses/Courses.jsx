import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";

function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Course />
      </div>
    </>
  );
}

export default Courses;
