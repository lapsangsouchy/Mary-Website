import React from "react";
import logo from "../../photos/ringofkeys.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <Link to="/contact">
              <h5 className="white-text">Contact Me</h5>
            </Link>
          </div>
          <div className="col l4 offset-l2 s12" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                <a
                  href="mailto:marymondlock@gmail.com"
                  style={{ fontSize: "1.25rem" }}
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/marymondlock/"
                  target="_blank"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "1.5rem" }}
                  />
                </a>
                {"   "}
                <a
                  href="https://www.facebook.com/mary.mondlock"
                  target="_blank"
                >
                  <i
                    className="fab fa-facebook"
                    style={{ fontSize: "1.5rem" }}
                  />
                </a>
                {"   "}
                <a
                  href="https://www.youtube.com/channel/UCDIjB-2_HjGRYfv5Tm0sYNw"
                  target="_blank"
                >
                  <i
                    className="fab fa-youtube"
                    style={{ fontSize: "1.5rem" }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.ringofkeys.org/" target="_blank">
                  <img src={logo} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
