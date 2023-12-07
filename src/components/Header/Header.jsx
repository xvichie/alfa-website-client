import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to={`/`}>
              {scrolled ?
                <img src={process.env.PUBLIC_URL+'/images/Logo-Black-Text.png'} alt="" />
                :
                <img src={process.env.PUBLIC_URL+'/images/Logo-White-Text.png'} alt="" />
              }
            </NavLink>
          </div>
          <div className="Header-Wrapper-Navigation">
            <ul color='primary'>
              <li>
                <NavLink 
                className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`} 
                to={`/Services`}>Services</NavLink>
              </li>
              <li>
                <NavLink className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`} to={`/Projects`}>Projects</NavLink>
              </li>
              <li>
                <NavLink className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`} to={`/Insights`}>Insights</NavLink>
              </li>
              <li id='Navigation-Buttons'>
                <NavLink to={`/Contact`}>
                  <Button color='primary' variant='outlined' className='fill-button'>
                      Contact Us
                  </Button>
                </NavLink>
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