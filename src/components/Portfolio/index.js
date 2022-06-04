import React from "react";
import Projects from "../Projects";

const projects = [
  {
    id: "run-buddy",
    title: "Run Buddy",
    languages: "HTML, CSS",
    description: "A static site which is landing page for a running company ",
    gitHub: "https://github.com/adorsey5/run-buddy",
    liveSite: "https://adorsey5.github.io/run-buddy/",
  },
  {
    id: "the-spot",
    title: "The Spot",
    languages: "HTML, CSS, Javascript, MERN, GraphQL",
    description:
      "An interactive MERN SPA project that serves as a social networking app for music professionals",
    gitHub: "https://github.com/adorsey5/the-spot",
    liveSite: "https://the-spot-group.herokuapp.com/",
  },
  {
    id: "love-match-calculator",
    title: "Love Match Calculator",
    languages: "HTML, CSS, Javascript, APIs",
    description:
      "A parody site in which the user can see if they are a match with their significant other",
    gitHub: "https://github.com/adorsey5/love-match-calculator",
    liveSite: "https://zela7alex.github.io/love-match-calculator/",
  },
  {
    id: "ouiii",
    title: "OUiii",
    languages: "HTML, CSS, Javascript, MVC",
    description:
      "A social media application that allows a user to search for parties in their area as well as create parties which they can host",
    gitHub: "https://github.com/adorsey5/OUiii-1",
    liveSite: "https://ouiii-party.herokuapp.com/",
  },
  {
    id: "readme",
    title: "README Generator",
    languages: "HTML, CSS, Nodejs",
    description:
      "a command-line application that dynamically generates a professional README",
    gitHub: "https://github.com/adorsey5/README-generator",
    liveSite:
      "https://drive.google.com/file/d/1M46HDs_kjA2SzV0v7zH_ZlWSck7NUUdi/view",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    languages: "HTML, CSS, Javascript",
    description:
      "Use of a 5-day weather API to retrieve weather data for cities",
    gitHub: "https://github.com/adorsey5/weather-dashboard",
    liveSite: "https://adorsey5.github.io/weather-dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <h2 className="my-3 text-center fw-bold">Full Stack Projects</h2>
      <hr />

      <Projects projects={projects} />
    </div>
  );
}

export default Portfolio;
