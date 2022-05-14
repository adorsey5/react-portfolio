import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description: "portfolio of full stack developer projects",
    },
    // { name: "portraits", description: "Portraits of people in my life" },
    // { name: "food", description: "Delicious delicacies" },
    { name: "Resume", description: "resume of Asha Dorsey" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
