import React, { Fragment, useEffect, useState } from "react";
import Video from "../layout/Video";
import Photo from "../layout/Photo";
import photo1 from "../../photos/blue1.jpg";
import photo2 from "../../photos/blue2.jpg";
import photo3 from "../../photos/blue3.jpg";
import photo4 from "../../photos/blue4.jpg";
import photo5 from "../../photos/blue5.png";
import photo6 from "../../photos/blue7.png";
import M from "materialize-css";

const Gallery = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(elems);
  }, []);
  useEffect(() => {
    let elem = document.querySelectorAll(".carousel");
    M.Carousel.init(elem, {
      fullWidth: true,
      indicators: true,
      duration: 400,
    });
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="carousel carousel-slider" data-indicators="true">
          <div className="carousel-item">
            <img src={photo1} />
          </div>
          <div className="carousel-item">
            <img src={photo2} />
          </div>
          <div className="carousel-item">
            <img src={photo3} />
          </div>
          <div className="carousel-item">
            <img src={photo4} />
          </div>
          <div className="carousel-item">
            <img src={photo5} />
          </div>
          <div className="carousel-item">
            <img src={photo6} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m9 l10">
            <div id="videos" className="section scrollspy">
              <h2>Videos</h2>
              <Video />
            </div>
            <div id="photos" className="section scrollspy">
              <h2>Photos</h2>
              <Photo />
            </div>
          </div>

          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li>
                <a href="#videos">videos</a>
              </li>
              <li>
                <a href="#photos">photos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
