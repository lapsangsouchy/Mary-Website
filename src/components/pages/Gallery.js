import React, { Fragment, useEffect } from "react";
import Video from "../layout/Video";
import Photo from "../layout/Photo";
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
            <img src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212784/blue1_ihf8ss.jpg" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212791/blue2_ljw8w8.jpg" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212795/blue3_fyfzcp.jpg" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212801/blue4_tyk0vu.jpg" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212798/blue5_mhgprj.png" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212812/blue7_y8swqb.png" />
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
