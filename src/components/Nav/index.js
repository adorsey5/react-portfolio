import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentProject, currentProject } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentProject.name);
  }, [currentProject]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="laptop">
            {" "}
            💻
          </span>{" "}
          Asha Dorsey
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((Project) => (
            <li
              className={`mx-1 ${
                currentProject.name === Project.name && "navActive" //currentProject.name === Project.name will get evaluated, navActive, will be returned
              }`}
              key={Project.name}
            >
              <span
                onClick={() => {
                  setCurrentProject(Project);
                }}
              >
                {capitalizeFirstLetter(Project.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
