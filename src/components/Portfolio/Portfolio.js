import React from "react";
import Project from "../Project/Project";
import { ProjectArray } from "../../helpers/ProjectArray"

import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="title"> My Portfolio</h1>
      <div className="projectArray">
        {ProjectArray.map((project) => {
          return <Project name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;


