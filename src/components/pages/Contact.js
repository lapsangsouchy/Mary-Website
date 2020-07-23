import React, { Fragment } from "react";
import logo from "../../photos/ringofkeys.png";
import photo from "../../photos/blue8.jpg";

const Contact = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h3>Hit Her Up!</h3>
            <p className="flow-text">
              Based in Brooklyn, Mary is just straight up chillin' in the
              apocalypse. She was also featured in one of those "At the Ballet"
              Compilation Videos. And like... She was the best one? Like how the
              fuck does someone do that? Insanity. Here are some links to hit
              her up!
            </p>
            <div className="card">
              <div className="card-image">
                <img src={photo} />
              </div>
            </div>
          </div>
          <div className="col l6 s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">For Professional Inquiries</span>
                <p>Click this link to compose an email</p>
              </div>
              <div className="card-action">
                <a
                  href="mailto:marymondlock@gmail.com"
                  style={{ fontSize: "1.25rem" }}
                >
                  Email
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <span className="card-title">For Social Media</span>
                <p>Follow her on Instagram</p>
              </div>
              <div className="card-action">
                <a href="https://www.instagram.com/marymondlock/">
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "1.5rem" }}
                  />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <span className="card-title">Ring of Keys</span>
                <p>
                  Mary is a member of the incredible Ring of Keys organization
                  that advocates for all professional artists who self-identify
                  as queer women, transgender, and gender non-conforming.
                </p>
              </div>
              <div className="card-action">
                <a href="https://www.ringofkeys.org/">
                  <img src={logo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
