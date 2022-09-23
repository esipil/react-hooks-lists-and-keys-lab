import React from "react";

function ProjectItem(props) {
  const eachTechnology = props.technologies.map((item) => {
    return <span key={item[2]}>{item}</span>
  })
  return (
    <div className="project-item">
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <div className="technologies">
        {eachTechnology}
      </div>
    </div>
  );
}

export default ProjectItem;
