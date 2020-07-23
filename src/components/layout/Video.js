import React, { Fragment, useState, useEffect } from "react";
import M from "materialize-css";
import photo from "../../photos/reel.png";
import photo1 from "../../photos/wth.png";
import photo2 from "../../photos/dress.png";
import photo3 from "../../photos/alicia.png";
import photo4 from "../../photos/ballet.png";

const Video = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems);
  }, []);
  const [url, setUrl] = useState("https://www.youtube.com/embed/bFlohzm-nDg");
  const video = () => setUrl("https://www.youtube.com/embed/bFlohzm-nDg");
  const video1 = () => setUrl("https://www.youtube.com/embed/j5qjZvG8GVc");
  const video2 = () => setUrl("https://www.youtube.com/embed/9QN1b_PVJsA");
  const video3 = () => setUrl("https://www.youtube.com/embed/9aFFwGeLo6g");
  const video4 = () =>
    setUrl("https://www.youtube.com/embed/RUotfof7FRQ?start=214");

  return (
    <div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <div className="container-small">
        <div className="row">
          <a className="col s2 offset-l1" href="#!" onClick={video}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="Reel"
              src={photo}
            />
          </a>
          <a className="col s2" href="#!" onClick={video1}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="What The Hell"
              src={photo1}
            />
          </a>
          <a className="col s2" href="#!" onClick={video2}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="HAL Highlights"
              src={photo2}
            />
          </a>
          <a className="col s2" href="#!" onClick={video3}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="If I Ain't Got You"
              src={photo3}
            />
          </a>
          <a className="col s2" href="#!" onClick={video4}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="At The Ballet"
              src={photo4}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
