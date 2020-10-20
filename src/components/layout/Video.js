import React, { useState, useEffect } from "react";
import M from "materialize-css";

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
              src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212814/reel_cuu5k0.png"
            />
          </a>
          <a className="col s2" href="#!" onClick={video1}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="What The Hell"
              src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212816/wth_kejuuo.png"
            />
          </a>
          <a className="col s2" href="#!" onClick={video2}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="HAL Highlights"
              src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212793/dress_gyrf8t.png"
            />
          </a>
          <a className="col s2" href="#!" onClick={video3}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="If I Ain't Got You"
              src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212784/alicia_w50tgj.png"
            />
          </a>
          <a className="col s2" href="#!" onClick={video4}>
            <img
              className="circle thumbnail tooltipped"
              data-position="bottom"
              data-tooltip="At The Ballet"
              src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212786/ballet_shtidc.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
