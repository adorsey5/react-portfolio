import React from "react";
import resume from "../../assets/resume.pdf";

function Resume() {
  return (
    <section>
      <h3 className="text-center my-3 fw-bold">Download My Resume</h3>
      <div className="d-flex flex-column">
        <div className="text-center">
          <a href={resume} download>
            <img
              id="resumeIcon"
              src={require("../../assets/images/resume.jpg")}
              className="border-bottom border-dark border-3"
              alt="resume icon"
            ></img>
          </a>
        </div>
        <div>
          <h4 className="text-center my-4 fw-bold">Skills</h4>
        </div>

        <hr />
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>APIs, Node.js, OOP</li>
          <li>Express.js, SQL/No SQL, ORM</li>
          <li>MVC, PWA, React, MERN, GraphQL</li>
          <li>Git</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
