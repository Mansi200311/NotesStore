import React from "react";
import { FaLinkedin, FaGithub, FaUserAlt } from "react-icons/fa";
import Mohitimg from "../assets/Mohitimg.png";
import MansiIMG from "../assets/MansiImg.jpg"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Mansi Sharma",
      role: "Creative Visionary: Leading Design and Documentation",
      description:
        "As the creative mind behind Notes Store, I design intuitive and visually appealing interfaces using Figma. I also manage essential paperwork like synopses to keep our project organized. My goal is to create a user experience that enhances your learning journey.",
      imgSrc: MansiIMG, // Replace with actual image source
      linkedin: "https://www.linkedin.com/in/mansi-sharma-566225241/",
      github: "https://github.com/Mansi200311",
      portfolio: "#",
    },
    {
      name: "Mohit Maurya",
      role: "Technical Architect: Mastering MERN for Seamless Performance",
      description:
        "As the technical architect of Notes Store, I manage both frontend and backend development using the MERN stack. I ensure the platform runs smoothly and efficiently, providing a seamless user experience. My focus is on delivering reliable and effective solutions to enhance your academic success.",
      imgSrc: Mohitimg, // Replace with actual image source
      linkedin: "https://www.linkedin.com/in/mohit-maurya-76a282204/",
      github: "https://github.com/Mohit138928",
      portfolio: "https://mohit-maurya-portfolio.vercel.app/",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-[#EBEFFF] py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-center text-4xl font-bold mb-12 text-black">
        The Team Behind{" "}
        <span className="text-[#2A33FE] underline">Notes Store</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 mb-[60px]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-black">{member.name}</h3>
            <p className="text-sm text-neutral-900 mb-4 font-light">
              {member.role}
            </p>
            <p className="text-[#152e4a] font-normal">{member.description}</p>
            <div className="mt-4 flex space-x-4">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl text-[#2A33FE] hover:text-blue-800 hover:scale-110 transition duration-200 ease-in-out" />
              </a>
              <a href={member.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl text-[#2A33FE] hover:text-gray-900 hover:scale-110 transition duration-200 ease-in-out" />
              </a>
              <a href={member.portfolio} target="_blank" rel="noreferrer">
                <FaUserAlt className="text-2xl text-[#2A33FE] hover:text-gray-900 hover:scale-110 transition duration-200 ease-in-out" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Team;
