import React, { Fragment, useEffect } from "react";
import M from "materialize-css";

const Photo = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems);
  }, []);
  return (
    <Fragment>
      <div className="row">
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212821/raincoat_o58nrf.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212784/heathers1_eixmol.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212818/wall_znkbii.jpg"
        />
      </div>
      <div className="row">
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212786/homeimage_bpcq9r.png"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212812/neon_on23wt.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212830/lookback_z7uryy.jpg"
        />
      </div>

      <div className="row">
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212831/sweater_n1lt92.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212813/pretz_xdai5f.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212803/denim_h7jdgw.jpg"
        />
      </div>
      <div className="row">
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212813/cuffs_ctdky8.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212802/jumpsuit_anfjtv.png"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212793/iconic_igmq43.jpg"
        />
      </div>

      <div className="row">
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212804/city_v3oiy2.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212815/partner_wdiq98.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212787/elephant_pyv1tf.jpg"
        />
      </div>
      <div className="row">
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212829/rocker_wh1qgk.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212800/classy_be6jtm.jpg"
        />
        <img
          className="col s4 materialboxed responsive-img"
          src="https://res.cloudinary.com/dl3kdouns/image/upload/v1603212787/footer_qxslyv.jpg"
        />
      </div>
    </Fragment>
  );
};

export default Photo;
