import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NotesStoreHomepageimg from "./NotesStoreHeaderImage";
import MathImage from "../assets/MathImage.png";
import BETImage from "../assets/BETImage.png";
import ChemistryImage from "../assets/ChemistryImage.png";
import "./Banner.css";

function Banner() {
  const navigate = useNavigate();
  const CourseLink = () => {
    navigate("/course");
  };
  return (
    <div className="bg-[#EBEFFF] px-4 py-8 lg:px-20">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold text-black">
            View and Download{" "}
            <span className="text-[#2A33FE] underline">Notes</span> Anytime
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-neutral-900">
            Welcome to Notes Stores, your one-stop destination for academic
            resources. Download a wide range of notes, including
            assignments, handwritten notes, question papers, and previous year
            papers. Our platform simplifies your educational journey by making
            it easy to access and organize study materials.
          </p>
          <div className="mt-6 flex space-x-4">
            <button
              className="btn bg-[#2A33FE] text-[#fff] border-none"
              onClick={CourseLink}
            >
              Get started
            </button>
          </div>
        </div>
        {/* Header Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          {/* <img
              src={NotesStoresHeaderImage}
              alt="Kids on a pencil"
              className="w-full max-w-md"
            /> */}
          <NotesStoreHomepageimg />
        </div>
      </header>
      <hr className="rounded h-0.5 my-8 bg-[#a4a4a4] border-0"></hr>

      {/* Main Content Section */}
      <section className="mt-12">
        <h2 className="text-center text-3xl  text-black lg:text-4xl font-bold mb-12">
          Top-Quality Notes, Completely{" "}
          <span className="text-[#2A33FE] underline">Free</span>
        </h2>
        {/* Subject Cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mathematics Card */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <img src={MathImage} alt="Mathematics" className="w-full mb-4" />
            <h3 className="text-xl font-semibold text-black">Mathematics</h3>
            <p className="mt-2 text-neutral-900">
              Simplify integration and differentiation with our detailed notes.
              Ace your B.Tech Math exams with the help you deserve!
            </p>
            <button
              className="mt-4 btn bg-[#2A33FE] text-[#fff] border-none"
              onClick={CourseLink}
            >
              Explore Now
            </button>
          </div>
          {/* BET Card */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <img
              src={BETImage}
              alt="Basic Electrical Technology"
              className="w-full mb-4"
            />
            <h3 className="text-xl font-semibold text-black">
              Basic Electrical Technology
            </h3>
            <p className="mt-2 text-neutral-900">
              Simplify your studies with our clear, concise notes and excel in
              your B.Tech BET exams.
            </p>
            <button className="mt-4 btn bg-[#2A33FE] text-[#fff] border-none" onClick={CourseLink}>
              Explore Now
            </button>
          </div>
          {/* Chemistry Card */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <img src={ChemistryImage} alt="Chemistry" className="w-full mb-4" />
            <h3 className="text-xl font-semibold text-black">Chemistry</h3>
            <p className="mt-2 text-neutral-900">
              Make complex topics simple with our easy-to-understand notes.
              Elevate your study game today!
            </p>
            <button className="mt-4 btn bg-[#2A33FE] text-[#fff] border-none" onClick={CourseLink}>
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* Login Section */}
      {/* <section className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-black">
            Log In to Explore More Free Notes
          </h3>
          <div className="mt-4 flex justify-center space-x-4">
            <NavLink
              to="/login"
              className="btn bg-[#2A33FE] text-[#fff] border-none"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn bg-[#2A33FE] border-none text-[#fff] hover:text-[#ffffff]"
            >
              Signup
            </NavLink>
          </div>
        </section> */}
      <hr className="rounded h-0.5 my-16 bg-[#a4a4a4] border-0"></hr>
      {/* About Us Section */}
      <section className="mt-12 mb-16 bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-[#2A33FE]">About Us</h3>
        <p className="lyrics mt-2 text-neutral-900">
          Notes Stores offers a comprehensive library of notes, from in-depth
          subject guides to previous exam papers, all easily accessible in one
          place. We aim to make academic journey simpler by providing the
          essential resources...
        </p>
        <Link
          to="/about"
          className="mt-4 btn bg-[#2A33FE] text-[#fff] border-none"
        >
          Read More
        </Link>
      </section>
    </div>
  );
}

export default Banner;
