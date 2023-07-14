import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlane } from "@fortawesome/free-solid-svg-icons";
library.add(faPlane);

export default function Navbar(props) {
  return (
    <section>
      <header className="my-header">
        <nav className="navbar navbar-light bg-primary">
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/noah-rubin1/"
          >
            <FontAwesomeIcon
              className="brand-icon"
              icon="fa-solid fa-plane"
              style={{ color: "white" }}
            />
          </a>
        </nav>
      </header>
    </section>
  );
}
