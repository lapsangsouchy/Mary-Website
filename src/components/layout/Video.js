import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

const Video = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }, []);
  const [url, setUrl] = useState('https://www.youtube.com/embed/Jzk-dSC5hdw');

  const video1 = () => setUrl('https://www.youtube.com/embed/Jzk-dSC5hdw');
  const video2 = () => setUrl('https://www.youtube.com/embed/bMJ09gRxP5M');
  const video3 = () => setUrl('https://www.youtube.com/embed/Bwh07jFWpjY');
  const video4 = () => setUrl('https://www.youtube.com/embed/PBVDAIh3p1A');
  const video5 = () =>
    setUrl('https://www.youtube.com/embed/RUotfof7FRQ?start=214');

  return (
    <div>
      <div className='video-container'>
        <iframe
          width='560'
          height='315'
          src={url}
          frameBorder='0'
          allowFullScreen
          title='video'
        ></iframe>
      </div>
      <br />
      <div className='container-small'>
        <div className='row'>
          <a className='col  m2 s4 offset-m1' href='#!' onClick={video1}>
            <img
              className='circle thumbnail tooltipped'
              data-position='bottom'
              data-tooltip='Oops!... I Did It Again'
              src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666804863/mary/oops.jpg'
              alt='oops i did it again video'
            />
          </a>
          <a className='col m2 s4' href='#!' onClick={video2}>
            <img
              className='circle thumbnail tooltipped'
              data-position='bottom'
              data-tooltip='Daydreamer'
              src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666805344/mary/Screen_Shot_2022-10-26_at_1.28.59_PM_apictg.png'
              alt='daydreamer video'
            />
          </a>
          <a className='col m2 s4' href='#!' onClick={video3}>
            <img
              className='circle thumbnail tooltipped'
              data-position='bottom'
              data-tooltip='Take Me or Leave Me'
              src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666805651/mary/Screen_Shot_2022-10-26_at_1.33.57_PM_fzn10d.png'
              alt='take me or leave me video'
            />
          </a>
          <a className='col m2 s4 offset-s2' href='#!' onClick={video4}>
            <img
              className='circle thumbnail tooltipped'
              data-position='bottom'
              data-tooltip='How Could I Ever Know'
              src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666805878/mary/Screen_Shot_2022-10-26_at_1.37.51_PM_vsgcid.png'
              alt='how could i ever know video'
            />
          </a>
          <a className='col m2 s4' href='#!' onClick={video5}>
            <img
              className='circle thumbnail tooltipped'
              data-position='bottom'
              data-tooltip='At The Ballet'
              src='https://res.cloudinary.com/dl3kdouns/image/upload/v1603212786/ballet_shtidc.png'
              alt='at the ballet video'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
