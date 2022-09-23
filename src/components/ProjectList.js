import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList(props ) {
   const project = props.projects.map( (item) =>{
    return <ProjectItem key={item.id}  name={item.name} about ={item.about} technologies={item.technologies}/>
   })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {project}
     </div>
    </div>
  );
}

export default ProjectList;
