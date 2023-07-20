import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const handleGitHubClick = () => {
    if (project.github) {
      window.open(project.github, '_blank');
    }
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.github && (
        <GitHubIcon onClick={handleGitHubClick} cursor="pointer" />
      )}
      <br />
       
    </div>
  );
}

export default ProjectDisplay;