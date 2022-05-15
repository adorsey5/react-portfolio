import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import photo from "../../assets/images/run buddy-screen shot.png";

function Portfolio(props) {
  const currentProject = {
    name: "Portfolio",
    description: "portfolio of full stack developer projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.name}</p>
      <div className="flex-row">
        <img src={photo} alt="Project Example" className="img-thumbnail mx-1" />
      </div>
    </section>
  );
}
export default Portfolio;
