import React, { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <div className='container'>
        <h3>Contact Me</h3>
        <div className='row'>
          <div className='col l6 s12'>
            <div className='card'>
              <div className='card-image'>
                <img
                  src='https://res.cloudinary.com/dl3kdouns/image/upload/v1664828274/mary/IMG_1145_w7nnek.jpg'
                  alt='mary mondlock headshot'
                />
              </div>
            </div>
            <div className='card'>
              <div className='card-content'>
                <span className='card-title'>Social Media</span>
              </div>
              <div className='card-action'>
                <a
                  href='https://www.instagram.com/marymondlock/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i
                    className='fab fa-instagram'
                    style={{ fontSize: '1.5rem' }}
                  />
                </a>
                <a
                  href='https://tiktok.com/@marylouisemondlock'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i
                    className='fa-brands fa-tiktok'
                    style={{
                      fontSize: '1.3rem',
                      position: 'relative',
                      bottom: '1px',
                    }}
                  />
                </a>
                <a
                  href='https://www.facebook.com/mary.mondlock'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i
                    className='fab fa-facebook'
                    style={{ fontSize: '1.5rem' }}
                  />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCDIjB-2_HjGRYfv5Tm0sYNw'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i
                    className='fab fa-youtube'
                    style={{ fontSize: '1.5rem' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='col l6 s12'>
            <div className='card'>
              <div className='card-content'>
                <span className='card-title'>Professional Inquiries</span>
                <p>
                  <i className='tiny material-icons'>email</i>
                  marymondlock@gmail.com
                </p>
                <p>
                  <i className='tiny material-icons'>phone</i>
                  715-308-6236
                </p>
                <br />
                <p>Or click the links below.</p>
              </div>
              <div className='card-action'>
                <a
                  href='mailto:marymondlock@gmail.com'
                  style={{ fontSize: '1.25rem' }}
                >
                  Email
                </a>
                <a href='tel:7153086236' style={{ fontSize: '1.25rem' }}>
                  Call
                </a>
              </div>
            </div>

            <div className='card'>
              <div className='card-content'>
                <span className='card-title'>Ring of Keys</span>
                <p>
                  I'm also a member of the incredible Ring of Keys organization
                  that advocates for all professional artists who self-identify
                  as queer women, transgender, and gender non-conforming.
                </p>
              </div>
              <div className='card-action'>
                <a
                  href='https://www.ringofkeys.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='https://res.cloudinary.com/dl3kdouns/image/upload/v1603212815/ringofkeys_zjb5w2.png'
                    alt='ring of keys logo'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
