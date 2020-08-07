import React, { Fragment, useEffect } from "react";
import M from "materialize-css";
import sweater from "../../photos/sweater.jpeg";
import cuffs from "../../photos/cuffs.JPG";
import city from "../../photos/city.jpeg";
import classy from "../../photos/classy.jpg";
import denim from "../../photos/denim.jpeg";
import photo4 from "../../photos/footer.jpeg";
import heathers1 from "../../photos/heathers1.jpg";
import homeimage from "../../photos/homeimage.png";
import iconic from "../../photos/iconic.jpeg";
import lookback from "../../photos/lookback.jpeg";
import neon from "../../photos/neon.jpeg";
import pretz from "../../photos/pretz.jpg";
import raincoat from "../../photos/raincoat.jpeg";
import elephant from "../../photos/elephant.jpeg";
import rocker from "../../photos/rocker.JPG";
import wall from "../../photos/wall.jpg";
import jumpsuit from "../../photos/jumpsuit.png";
import partner from "../../photos/partner.jpeg";

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
        <img className="col s4 materialboxed responsive-img" src={photo4} />
      </div>
    </Fragment>
  );
};

export default Photo;
