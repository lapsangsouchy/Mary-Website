import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import resume from "../../MaryMondlockResume.pdf";
import photo2 from "../../photos/homeimage.jpeg";
import photo3 from "../../photos/middle.jpeg";
import photo4 from "../../photos/footer.jpeg";

const Parallax = () => {
  useEffect(() => {
    let elem = document.querySelectorAll(".parallax");
    M.Parallax.init(elem);
  }, []);

  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={photo2} />
        </div>
      </div>
      <div className="section mainsect">
        <div className="row container">
          <h2 className="header">Actor Singer Model</h2>
          <p className="lead text-darken-3 lighten-3">
            Mary Mondlock is the coolest. She sings, she dances, she acts, she
            does tarot, she travels, she gets it. I'm gonna put these links here
            to all this cool stuff cuz you need to CHECK HER OUT! Please!!
          </p>

          <a
            className="btn-large col s5 offset-s1"
            href={resume}
            target="_blank"
          >
            Resume
          </a>
          <Link className="btn-large col s5" to="/gallery">
            Gallery
          </Link>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={photo3} />
        </div>
      </div>
      <div className="section mainsect">
        <div className="row container">
          <h2 className="header">Sample Text</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Wow look at all this sample text. You could put whatever you want in
            here! Like literally anything!!! WOW! HOLY SHIT!
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div
          className="parallax"
          style={{
            height: "1000px",
            width: "100%",
            transform: "scale(0.75, 0.75)",
          }}
        >
          <img src={photo4} />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
