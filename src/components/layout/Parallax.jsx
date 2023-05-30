import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import resume from '../../MaryMondlockresume2022.pdf';

const HomeParallax = () => {
  useEffect(() => {
    let elem = document.querySelectorAll('.parallax');
    M.Parallax.init(elem, {
      responsiveThreshold: 500,
    });
  }, []);

  return (
    <div>
      <div className='parallax-container' style={{ height: '500px' }}>
        <div className='parallax'>
          <img
            src='https://res.cloudinary.com/dl3kdouns/image/upload/v1666799873/mary/topimg_crop_z3qrm3.jpg'
            style={{ width: '100%' }}
            alt='mary headshot'
          />
        </div>
      </div>
      <div className='section mainsect'>
        <div className='row container'>
          <h2 className='header'>Well, hey!</h2>
          <p
            className='flow-text text-darken-3 lighten-3'
            style={{ marginBottom: '25px' }}
          >
            I’m Mary Mondlock- an actor/singer and body acceptance advocate
            based in NYC. I grew up in rural Wisconsin (there were literally
            more cows than people in my town), studied Musical Theater at
            Baldwin Wallace University in Ohio, and eventually found my way to
            New York City, where I now belt, thrive and survive.
          </p>

          <a
            className='btn-large col s5 offset-s1'
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
          <Link className='btn-large col s5' to='/gallery'>
            Gallery
          </Link>
        </div>
      </div>
      <div className='parallax-container' style={{ height: '400px' }}>
        <div className='parallax'>
          <img
            src='https://res.cloudinary.com/dl3kdouns/image/upload/c_scale,w_2817/v1664827998/mary/MaryMondlock67135_ewqojb.jpg'
            style={{ width: '80%' }}
            alt='mary headshot'
          />
        </div>
      </div>
      <div className='section mainsect'>
        <div className='row container'>
          <h2 className='header'>Some favorite theater credits include:</h2>
          <p className='flow-text text-darken-3 lighten-3'>
            Sally Bowles (Cabaret), Carrie Pipperidge (Carousel), and Heather
            McNamara (Heathers). I’ve also travelled the world performing at sea
            on Holland America Line through RWS Entertainment Group. Currently,
            you can probably catch me living my best life performing at 54 Below
            in NYC on any given weekend, in my basement self-taping until my
            neighbors kindly ask me to “shhhhh”, or being a mental health and
            body positivity advocate (acting a complete fool) on my socials.
            Hope to see you and get creative together soon!
          </p>
        </div>
      </div>
      <div className='parallax-container' style={{ height: '550px' }}>
        <div className='parallax'>
          <img
            src='https://res.cloudinary.com/dl3kdouns/image/upload/v1667842345/mary/MaryMondlock67417_durwil.jpg'
            style={{ width: '60%' }}
            alt='mary headshot'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeParallax;
