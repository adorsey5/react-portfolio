import React from "react";

function Nav() {
  const categories = [
    {
      name: "Portfolio",
      description: "portfolio of full stack developer projects",
    },
    // { name: "portraits", description: "Portraits of people in my life" },
    // { name: "food", description: "Delicious delicacies" },
    {
      name: "Resume",
      description: "resume of Asha Dorsey",
    },
  ];
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }
  return (
    <header>
      <h2>
        <a href="/">
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
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={categorySelected}>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
