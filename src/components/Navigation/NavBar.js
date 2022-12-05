import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  );
}

export default NavBar;
