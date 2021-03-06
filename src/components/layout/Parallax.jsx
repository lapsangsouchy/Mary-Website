import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import resume from "../../MaryMondlockResume.pdf";

import headshot from "../../photos/headshot.JPG";

const Parallax = () => {
  useEffect(() => {
    let elem = document.querySelectorAll(".parallax");
    M.Parallax.init(elem);
  }, []);

  return (
    <div>
      <div className="parallax-container">
        <div
          className="parallax"
          style={{
            height: "500px",
          }}
        >
          <img src={headshot} />
        </div>
      </div>
      <div className="section mainsect">
        <div className="row container">
          <h2 className="header">Well, hey!</h2>
          <p className="lead text-darken-3 lighten-3">
            My name is Mary and I’m an actor, singer, and (strong) mover, based
            out of NYC. Originally from the northern woods of Wisconsin, I moved
            away to Interlochen Arts Academy at 17 and then headed over to Ohio
            where I studied Musical Theater at Baldwin Wallace Conservatory of
            Music.
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
          <img src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603560195/56213891_426632311469872_3087741105325514987_n_rovjpn.jpg" />
        </div>
      </div>
      <div className="section mainsect">
        <div className="row container">
          <h2 className="header">Some favorite stage moments of mine:</h2>
          <p className="lead text-darken-3 lighten-3">
            Sally Bowles (Cabaret), Carrie Pipperidge (Carousel), and Heather
            McNamara (Heathers). I’ve most recently returned from a year
            performing at sea on Holland America Line through RWS Entertainment
            Group, and plan to keep my feet on solid ground for the foreseeable
            future. On top of being a performer, I’m a major advocate for Body
            Positivity, avid reader, and a podcast enthusiast. Hope to see you
            (with our masks on) soon! Stay safe and strong.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div
          className="parallax"
          style={{
            height: 850,
          }}
        >
          <img src="https://res.cloudinary.com/dl3kdouns/image/upload/c_crop,g_north,w_1126,x_0,y_0/v1603212802/jumpsuit_anfjtv.png" />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
