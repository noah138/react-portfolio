import React from "react";
import Project from "../Project/Project";


function Portfolio() {
  return (
    <div className="portfolio">
      <h1> My Portfolio</h1>
      <div className="projectList">
        <Project name='website' />
        <Project />
      </div>
    </div>
  );
}

export default Portfolio;
