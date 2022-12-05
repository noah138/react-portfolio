import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function about() {
  return (
    <div className="about">
      <h2> Hello, my name is Noah! </h2>
      <div className="bio">
        <p> A beginner web developer </p>
        <BsLinkedin />
        <BsGithub />
        <SiLeetcode />
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
        
        </ol>
      </div>
    </div>
  );
}

export default about;
