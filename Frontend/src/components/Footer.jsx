import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css"; // Custom CSS file for wave animation

const Footer = () => {
  return (
    <footer className="relative bg-[#3586FF] text-[#fff] flex justify-center align-middle py-5 mt-6 ">
      {/* Wave Animation */}
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 text-center">
        <nav className="flex justify-center space-x-4 font-medium mb-2 text-xs sm:text-base">
          <NavLink
            to="/privacy-policy"
            className="transition hover:text-[#9ebdff]"
          >
            Privacy Policy
          </NavLink>
          <p>|</p>
          <NavLink to="/disclaimer" className="transition hover:text-[#a39eff]">
            Disclaimer
          </NavLink>
          <p>|</p>
          <NavLink to="/about" className="transition hover:text-[#a39eff]">
            About Us
          </NavLink>
          <p>|</p>
          <NavLink to="/team" className="transition hover:text-[#a39eff]">
            Team
          </NavLink>
        </nav>
        <p className="text-xs sm:text-sm">
          &copy; Notes Store 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
