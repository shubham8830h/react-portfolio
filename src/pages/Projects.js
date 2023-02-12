import React from "react";
import ProjectItem from "../components/ProjectItem.js";
import "../styles/project.css"
import  {ProjectList}  from "../helper/ProjectList";


const Projects = () => {
  return (
    <div className="projects">
      <h1> My, Personal Projects</h1>
      <div className="projectList">
        {/* <ProjectItem name="social media" image={blog} /> */}
        {/* {ProjectList.map((projects,idx)=>{
         return (
           <ProjectItem id={idx} name={projects.name} image={projects.image} />
         );})} */}
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
