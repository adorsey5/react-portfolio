// titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

import React from "react";

function Project(props) {
  return (
    <section>
      <h2 className="text-center fw-bold my-3">My Projects</h2>
      {props.projects.map((project, i) => (
        <div key={i} className="d-flex flex-column m-5 p-3 my-border card">
          <div className="text-center">
            <img
              className="p-image"
              src={require(`../../assets/images/${project.id}.png`)}
              alt="project image"
            ></img>
          </div>
          <div className="mx-auto text-center">
            <h3 className="fw-bold m-2">{project.name}</h3>
            <p>{project.description}</p>
            <div className="fw-bold m-3">Languages: {project.languages}</div>
            <a href={project.liveSite} target="_blank" rel="noreferrer">
              {" "}
              Deployed Site
            </a>{" "}
            <br></br>
            <a href={project.gitHub} target="_blank" rel="noreferrer">
              {" "}
              GitHub Repo
            </a>
          </div>
        </div>
      ))}
      {/*  */}
    </section>
  );
}

export default Project;
