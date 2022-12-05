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
          <BsLinkedin />
          <BsGithub />
          <SiLeetcode />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front End </h2>
            <span> ReactJS, HTML, CSS, NPM, BootStrap, TailWindCss</span>
          </li>
          <li className="item">
            <h2> Back End </h2>
            <span>NodeJS, ExpressJS, GraphQL, MySQL, MongoDB,</span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default about;
