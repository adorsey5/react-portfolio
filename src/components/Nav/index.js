import React from "react";

function Navigation(props) {
  const categories = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div className="sticky-top">
      <ul className="nav-item nav-item-expand-lg nav-item-light sticky-top">
        {categories.map((category, idx) => (
          <li
            className={
              props.currentPage === category ? "nav-link fw-bold" : "nav-link"
            }
            key={category}
          >
            <a
              //   href={"#" + category.toLowerCase()}
              // When a category is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.onCategoryChange(category)}
              className={
                props.currentPage === category ? "nav-link fw-bold" : "nav-link"
              }
            >
              {props.categories[idx].name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;

// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

// function Nav(props) {
//   const { categories = [], setcurrentCategory, currentCategory } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="laptop">
//             {" "}
//             💻
//           </span>{" "}
//           Asha Dorsey
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about">
//               About Me
//             </a>
//           </li>
//           <li className="mx-2">
//             <span>Contact</span>
//           </li>
//           {categories.map((Project) => (
//             <li
//               className={`mx-1 ${
//                 currentCategory.name === Project.name && "navActive" //currentCategory.name === Project.name will get evaluated, navActive, will be returned
//               }`}
//               key={Project.name}
//             >
//               <span
//                 onClick={() => {
//                   setcurrentCategory(Project);
//                 }}
//               >
//                 {capitalizeFirstLetter(Project.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;
