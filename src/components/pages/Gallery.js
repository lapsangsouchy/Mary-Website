import React, { Fragment } from 'react';
import Video from '../layout/Video';
import Photo from '../layout/Photo';

const Gallery = () => {
  return (
    <Fragment>
      <div className='container'>
        <div>
          <img
            src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666803373/mary/IMG_2219_il4ple.jpg'
            className='responsive-img'
            alt='54 below concert shot of mary'
          />
        </div>

        <div className='row'>
          <div className='s12 m9 l10'>
            <div id='videos' className='section'>
              <h2>Videos</h2>
              <Video />
            </div>
            <div id='photos' className='section'>
              <h2>Photos</h2>
              <Photo />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
