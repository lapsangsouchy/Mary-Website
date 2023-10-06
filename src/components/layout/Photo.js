import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css';

const Photo = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
  }, []);
  return (
    <Fragment>
      <div className='row'>
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666806145/mary/IMG_0617_gg97xj.jpg'
          alt='headshot green turtleneck'
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1603212784/heathers1_eixmol.jpg'
          alt='heathers shot'
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828274/mary/IMG_0620_jgfovl.jpg'
          alt='sunglasses shot'
        />
      </div>
      <div className='row'>
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1603212786/homeimage_bpcq9r.png'
          alt=''
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666805215/mary/IMG_2070_in6v5b.jpg'
          alt=''
        />
                <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828273/mary/36BA7BBB-9E9F-497D-ABBC-7626EBBB7F10_f6ztmp.jpg'
          alt=''
        />

      </div>

      <div className='row'>
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666806244/mary/RebeccaJMichelson-1879_ymo1n6.jpg'
          alt=''
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828000/mary/RebeccaJMichelson-1973_gh0vat.jpg'
          alt=''
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828273/mary/FE140B50-D290-4B23-9B52-5DD82B23C039_p6ejuy.jpg'
          alt=''
        />
      </div>
      <div className='row'>
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664827999/mary/MaryMondlock67437_vwpnzd.jpg'
          alt=''
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1603212788/homepage2_et9rn8.jpg'
          alt=''
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828275/mary/MaryMondlock66831_vnvreg.jpg'
          alt=''
        />
      </div>

      <div className='row'>

                <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828273/mary/IMG_0618_wochpm.jpg'
          alt=''
        />
        <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828000/mary/MaryMondlock67417_mw4sos.jpg'
          alt=''
        />
                   <img
          className='col s4 materialboxed responsive-img'
          src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664827998/mary/MaryMondlock67135_ewqojb.jpg'
          alt=''
        />

      </div>

    </Fragment>
  );
};

export default Photo;
