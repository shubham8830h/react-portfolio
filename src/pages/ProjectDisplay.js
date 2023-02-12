import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project images on complectetd" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.link}>
        <GitHubIcon />
      </a>

    </div>
  );
}

export default ProjectDisplay;
