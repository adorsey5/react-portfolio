//Needs to include Name and pull in Navigation component
import React, { useState } from "react";
import Navigation from "../Nav";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <h1 style={{ color: "purple" }}>Asha Dorsey</h1>
    // <div>
    //   <nav className="nav-item">
    //     <div className="nav-item-brand">
    //       <a className="nav-link" rel="noreferrer" target="_blank" href="/">
    //         <span className="nav-link fw-bold">Asha Dorsey</span>
    //       </a>
    //     </div>
    //   </nav>
    //   {/* Pass the state value and the setter as props to NavTabs */}
    //   <Navigation
    //     currentPage={currentPage}
    //     handlePageChange={handlePageChange}
    //   />
    //   {/* Call the renderPage function passing in the currentPage */}
    //   <main>
    //     <div>{renderPage(currentPage)}</div>
    //   </main>
    // </div>
  );
}

export default Header;
