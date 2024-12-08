import React from "react";
import "./NotesStoreHeaderImage.css";
import bg from "../assets/1.png";
import ug from "../assets/2.png";

const NotesStoreHeaderImage = () => {
  return (
    <div className="homepageimg">
      <img src={bg} alt="blue square" className="firstimg" />
      <img src={ug} alt="red square" className="secondimg" />
    </div>
  );
};

export default NotesStoreHeaderImage;
