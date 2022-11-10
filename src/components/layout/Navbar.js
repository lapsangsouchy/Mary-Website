import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div className='navbar bg-primary'>
            <Link to='/' className='brand-logo center x-large'>
              Mary Mondlock
            </Link>
          </div>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='left hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <ul
            className='right hide-on-med-and-down'
            style={{ margin: '0', height: '3rem' }}
          >
            <li>
              <a
                href='https://www.instagram.com/marylouisemondlock/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i
                  className='fab fa-instagram'
                  style={{
                    fontSize: '2rem',
                    position: 'relative',
                    top: '5px',
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href='https://tiktok.com/@marylouisemondlock'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i
                  className='fa-brands fa-tiktok'
                  style={{
                    fontSize: '1.7rem',
                    position: 'relative',
                    top: '2px',
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.ringofkeys.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ring of Keys
              </a>
            </li>
          </ul>
        </nav>

        <ul className='sidenav' id='mobile-demo'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <a href='https://www.instagram.com/marylouisemondlock/'>
              <i className='fab fa-instagram' style={{ fontSize: '2rem' }} />
            </a>
          </li>
          <li>
            <a
              href='https://tiktok.com/@marylouisemondlock'
              target='_blank'
              rel='noopener noreferrer'
              style={{ alignSelf: 'center' }}
            >
              <i
                className='fa-brands fa-tiktok'
                style={{
                  fontSize: '1.7rem',
                  position: 'relative',
                  bottom: '2px',
                }}
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.ringofkeys.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ring of Keys
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
