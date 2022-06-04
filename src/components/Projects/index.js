import React from "react";

function Project(props) {
  return (
    <section>
      <h3 className="my-3 text-center fw-bold">My Projects</h3>
      {props.projects.map((project, i) => (
        <div key={i} className="d-flex flex-column m-5 p-3 pic-border card">
          <div className="text-center">
            <img
              className="proj-pic"
              src={require(`../../assets/images/${project.id}.png`)}
              alt="project"
            ></img>
          </div>
          <div className="mx-auto text-center">
            <h4 className="fw-bold m-2">{project.title}</h4>
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
