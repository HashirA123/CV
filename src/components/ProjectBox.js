import React from "react";
import "../styles/ProjectBox.css";

function ProjectBox({ link, img, title }) {
  return (
    <article className="projectbox">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} />
      </a>
      <div className="details">
        <p>{title}</p>
      </div>
    </article>
  );
}

export default ProjectBox;
