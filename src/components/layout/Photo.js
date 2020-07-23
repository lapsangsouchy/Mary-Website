import React, { Fragment, useEffect } from "react";
import M from "materialize-css";
import sweater from "../../photos/gallery/sweater.jpeg";
import cuffs from "../../photos/gallery/cuffs.JPG";
import city from "../../photos/gallery/city.jpeg";
import classy from "../../photos/gallery/classy.jpg";
import denim from "../../photos/gallery/denim.jpeg";
import headshot from "../../photos/gallery/headshot.JPG";
import heathers1 from "../../photos/gallery/heathers1.jpg";
import homeimage from "../../photos/gallery/homeimage.png";
import iconic from "../../photos/gallery/iconic.jpeg";
import lookback from "../../photos/gallery/lookback.jpeg";
import neon from "../../photos/gallery/neon.jpeg";
import pretz from "../../photos/gallery/pretz.jpg";
import raincoat from "../../photos/gallery/raincoat.jpeg";
import elephant from "../../photos/gallery/elephant.jpeg";
import rocker from "../../photos/gallery/rocker.JPG";
import wall from "../../photos/gallery/wall.jpg";
import jumpsuit from "../../photos/gallery/jumpsuit.png";
import partner from "../../photos/gallery/partner.jpeg";

const Photo = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems);
  }, []);
  return (
    <Fragment>
      <div className="row">
        <img className="col s4 materialboxed responsive-img" src={raincoat} />
        <img className="col s4 materialboxed responsive-img" src={heathers1} />
        <img className="col s4 materialboxed responsive-img" src={wall} />
      </div>
      <div className="row">
        <img className="col s4 materialboxed responsive-img" src={homeimage} />
        <img className="col s4 materialboxed responsive-img" src={neon} />
        <img className="col s4 materialboxed responsive-img" src={lookback} />
      </div>

      <div className="row">
        <img className="col s4 materialboxed responsive-img" src={sweater} />
        <img className="col s4 materialboxed responsive-img" src={pretz} />
        <img className="col s4 materialboxed responsive-img" src={denim} />
      </div>
      <div className="row">
        <img className="col s4 materialboxed responsive-img" src={cuffs} />
        <img className="col s4 materialboxed responsive-img" src={jumpsuit} />
        <img className="col s4 materialboxed responsive-img" src={iconic} />
      </div>

      <div className="row">
        <img className="col s4 materialboxed responsive-img" src={city} />
        <img className="col s4 materialboxed responsive-img" src={partner} />
        <img className="col s4 materialboxed responsive-img" src={elephant} />
      </div>
      <div className="row">
        <img className="col s4 materialboxed responsive-img" src={rocker} />
        <img className="col s4 materialboxed responsive-img" src={classy} />
        <img className="col s4 materialboxed responsive-img" src={headshot} />
      </div>
    </Fragment>
  );
};

export default Photo;
