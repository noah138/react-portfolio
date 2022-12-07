import React from "react";
import { BsGithub } from "react-icons/bs";

function Project({ image, name }) {
  return (
    <div className="project">
        <img src={image} alt={name} className="image"/>
      <h1 target="_blank" href="#">
        <BsGithub /> {name}
      </h1>
    </div>
  );
}

export default Project;
