import React from "react";
import Projects from "../Projects";
// import { capitalizeFirstLetter } from "../../utils/helpers";
// import photo from "../../assets/images/run buddy-screen shot.png";

const projects = [
  {
    id: "run-buddy",
    title: "Run Buddy",
    languages: "html, css",
    description: "A static site which is landing page for a running company ",
    gitHub: "https://github.com/adorsey5/run-buddy",
    liveSite: "https://adorsey5.github.io/run-buddy/",
  },
  {
    id: "horiseon",
    title: "Horiseon",
    languages: "html, css",
    description:
      "A refactored webpage in order to build on accessibility and search engine optimization (SEO) by structuring HTML semantic elements and consolidating CSS selectors.",
    gitHub: "https://github.com/adorsey5/revise-the-sunrise",
    liveSite: "https://adorsey5.github.io/revise-the-sunrise/",
  },
  {
    id: "love-match-calculator",
    title: "Love Match Calculator",
    languages: "html, css, javascript",
    description:
      "A parody site in which the user can see if they are a match with their significant other",
    gitHub: "https://github.com/adorsey5/love-match-calculator",
    liveSite: "https://zela7alex.github.io/love-match-calculator/",
  },
  {
    id: "ouiii",
    title: "OUiii",
    languages: "html, css, javascript, handlebars",
    description:
      "A social media application that allows a user to search for parties in their area as well as create parties which they can host",
    gitHub: "https://github.com/adorsey5/OUiii-1",
    liveSite: "https://ouiii-party.herokuapp.com/",
  },
  {
    id: "readme",
    title: "README Generator",
    languages: "html, css, nodejs",
    description:
      "a command-line application that dynamically generates a professional README",
    gitHub: "https://github.com/adorsey5/README-generator",
    liveSite:
      "https://drive.google.com/file/d/1M46HDs_kjA2SzV0v7zH_ZlWSck7NUUdi/view",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    languages: "html, css, javascript",
    description:
      "Use of a 5-day weather API to retrieve weather data for cities",
    gitHub: "https://github.com/adorsey5/weather-dashboard",
    liveSite: "https://adorsey5.github.io/weather-dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="text-center fw-bold my-3">Full Stack Projects</p>
      <hr />

      <Projects projects={projects} />
    </div>
  );
}

export default Portfolio;

// function Portfolio(props) {
//   const currentCategory = {
//     name: "Portfolio",
//     description: "portfolio of full stack developer projects",
//   };
//   return (
//     <section>
//       <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.name}</p>
//       <div className="flex-row">
//         <img src={photo} alt="Project Example" className="img-thumbnail mx-1" />
//       </div>
//     </section>
//   );
// }
// export default Portfolio;
