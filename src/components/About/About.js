import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./About.css";

function about() {
  return (
    <div className="about">
      <div className="name">
        <h2> Hi, I'm Noah </h2>
        <div className="bio">
          <p> A beginner web developer </p>
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
      </div>
      <h1>About Me</h1>
      <div className="aboutMe">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br></br>
        <br></br>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}

export default about;
