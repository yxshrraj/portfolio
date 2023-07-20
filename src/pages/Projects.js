import React from "react";
import ProjectItem from '../components/ProjectItem';

import "../styles/Projects.css";

import { ProjectList } from "../helpers/ProjectList";

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <h3>Project section is under Update !!</h3>
      <div className="projectList">
        {ProjectList.map((project,idx) =>
        {
          return<ProjectItem id={idx} name={project.name} image={project.image} Github={project.github} />
        })}
      </div>
    </div>
  );
}
