import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://www.linkedin.com/in/noahschwartz99/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/noah138/" target="_blank">
          <BsGithub />
        </a>
        <a href="https://leetcode.com/noah138/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
      <p> &copy; 2022 by Noah Schwartz</p>
    </div>
  );
}

export default footer;
