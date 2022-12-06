import React from "react";
import { ProjectArray } from "../../helpers/ProjectArray";
import { useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Project() {
  const { id } = useParams();
  const project = ProjectArray[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt=""/>
      <BsGithub />
    </div>
  );
}

export default Project;
