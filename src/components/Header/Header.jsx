import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Header.scss'; // Import your CSS file for header styles
import { Button } from '@mui/material';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);


  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${scrolled ? 'scrolled' : ''}`} >
      <nav>
        <div className="Header-Wrapper">
          <div className="Header-Wrapper-Logo">
            <Link to={`/`}>
              {scrolled ?
                <img src={process.env.PUBLIC_URL+'/images/Logo-Black-Text.png'} alt="" />
                :
                <img src={process.env.PUBLIC_URL+'/images/Logo-White-Text.png'} alt="" />
              }
            </Link>
          </div>
          <div className="Header-Wrapper-Navigation">
            <ul color='primary'>
              <li>
                <Link className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`} to={`/Services`}>Services</Link>
              </li>
              <li>
                <Link className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`} to={`/Projects`}>Projects</Link>
              </li>
              <li>
                <Link className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`} to={`/Insights`}>Insights</Link>
              </li>
              <li id='Navigation-Buttons'>
                <Link to={`/Contact`}>
                  <Button color='primary' variant='outlined' className='fill-button'>
                      Contact Us
                  </Button>
                </Link>
                <Link to={`/Login`}>
                  <Button color='primary' variant='contained'>
                      login
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header