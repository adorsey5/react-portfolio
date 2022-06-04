import React from "react";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="d-flex p-2 bd-highlight justify-content-around">
        <h4 className="fw-bold text-center my-auto text-light">
          Check Me Out!
        </h4>
        <ul className="my-auto text-center fs-4 list-inline ">
          <li className="fw-bold list-inline-item ">
            <a
              className="text-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/adorsey5"
            >
              GitHub
            </a>
          </li>
          <li className="fw-bold list-inline-item ">
            <a
              className="text-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/asha-dorsey5/"
            >
              LinkedIn
            </a>
          </li>
          <li className="fw-bold list-inline-item ">
            <a
              className="text-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/19122265/asha-dorsey"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
