import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentCategory, setcurrentCategory] = useState(categories[0].name);
  const handleCategoryChange = (category) => {
    setcurrentCategory(category);
  };
  return (
    <div className="all">
      <Header></Header>
      {
        <Nav
          categories={categories}
          onCategoryChange={handleCategoryChange}
          currentCategory={currentCategory}
        ></Nav>
      }
      <main>
        <div>
          {currentCategory === "About" ? (
            <About></About>
          ) : currentCategory === "Portfolio" ? (
            <Portfolio></Portfolio>
          ) : currentCategory === "Resume" ? (
            <Resume></Resume>
          ) : currentCategory === "Contact" ? (
            <Contact></Contact>
          ) : (
            alert(new Error("Error"))
          )}
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

export default App;
