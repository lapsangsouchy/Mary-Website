import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const Navbar = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div className="navbar bg-primary">
            <Link to="/" className="brand-logo center x-large">
              Mary Mondlock
            </Link>
          </div>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="left hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul
            className="right hide-on-med-and-down"
            style={{ marginBottom: "0" }}
          >
            <li>
              <a href="https://www.instagram.com/marymondlock/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.ringofkeys.org/" target="_blank">
                Ring of Keys
              </a>
            </li>
          </ul>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
