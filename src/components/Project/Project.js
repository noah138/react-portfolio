import React from "react";

function Project({ image, name }) {
  return (
    <div className="project">
      <div style={{ backgroundImage: `url(${image})` }} className="image" />
      <h1> {name} </h1>
    </div>
  );
}

export default Project;
