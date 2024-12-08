import React from "react";
import "./AboutUs.css"; // Custom CSS for animations
import NsLogo from "../logo/NotesStores.jpg"; // Adjust the path to your logo image
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-[#EBEFFF] min-h-screen flex items-center justify-center p-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center ">
        {/* Text Section */}
        <div className="text-section md:w-1/2 mb-[55px]">
          <h1 className="about-heading text-3xl md:text-4xl font-bold text-[#2A33FE] mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-[17px] text-neutral-900 mb-4 leading-relaxed">
            Welcome to Notes Store, your trusted companion in academic success.
            We understand the challenges students face, especially when it comes
            to finding reliable study materials. That’s why we’ve created a
            platform where you can easily store, download, and access a wealth
            of notes tailored to your educational needs.
          </p>
          <p className="text-lg md:text-[17px] text-neutral-900 mb-4 leading-relaxed">
            At Notes Store, we are committed to making learning more accessible
            and organized. Whether you need detailed notes on complex subjects,
            past question papers, or handwritten insights, we’ve got you
            covered. Our mission is to support students like you in achieving
            academic excellence by providing the resources you need to
            succeed—at your fingertips, anytime, anywhere.
          </p>
          <p className="text-lg md:text-[17px] text-neutral-900 leading-relaxed">
            Join our growing community of learners and take the first step
            towards a more streamlined, successful study experience. With
            NotesStores, your academic journey just got a whole lot easier.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-section md:w-1/2 flex justify-center">
          <img
            src={NsLogo}
            alt="Notes Stores Logo"
            className="w-64 mt-[10px] mb-[60px] md:w-72 rounded-[73px] shadow-[0px_0px_8.2px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
