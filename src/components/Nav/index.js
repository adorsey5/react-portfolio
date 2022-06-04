import React from "react";

function Navigation(props) {
  const categories = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {categories.map((category, idx) => (
            <li
              className={
                props.currentPage === category ? "nav-item active" : "nav-item"
              }
              key={category}
            >
              <a
                onClick={() => props.onCategoryChange(category)}
                className="nav-link"
              >
                {props.categories[idx].name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
