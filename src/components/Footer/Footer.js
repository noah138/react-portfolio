import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="icons">
        <BsLinkedin />
        <BsGithub />
        <SiLeetcode />
      </div>
      <p> &copy; 2022 by Noah Schwartz</p>
    </div>
  );
}

export default footer;
