import React from "react";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article
          className="project-card"
          key={`${project.category}-${project.img}-${index}`}
        >
          <img
            className="project-card__image"
            src={project.img}
            alt={project.category}
          />
        </article>
      ))}
    </div>
  );
}
