import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Header.scss'; // Import your CSS file for header styles

import { Button, ClickAwayListener, Grow, InputLabel, MenuItem, MenuList, Paper, Popper, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useSelector, useDispatch } from 'react-redux';
import { ButtonGroup } from 'react-bootstrap';
import { logoutUser } from '../../redux/slices/authSlice';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const [loggedIn,setLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    console.log(token);

    if(!token){
      setLoggedIn(false);
    }
    else{

      const isTokenExpired = token.expiresIn * 1000 > Date.now();
      console.log(token.expiresIn);
      console.log(Date.now());

      if ((!isTokenExpired)) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        console.log("false");
      }
    }
  }, []);


  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];



  const handleMenuItemClick = (event, index) => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  const handleLogOut = () => {
    console.log("mi");
    dispatch(logoutUser());
    navigate(0);
    navigate('/');
  }
  
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
                {!loggedIn ? (
                 <>
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
                </>
                ) :
                  <>
                  <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                    <Button 
                      variant='contained'
                    >
                      Dashboard
                    </Button>
                    <Button
                      size="small"
                      aria-controls={open ? 'split-button-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-label="select merge strategy"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                      variant='contained'
                      style={{height:'100% !important',padding:'6.5px'}}
                    >
                      <ArrowDropDownIcon
                      style={{margin:0,padding:0}}
                      />
                    </Button>
                  </ButtonGroup>
                  <Popper
                    sx={{
                      zIndex: 1,
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu" autoFocusItem>
                                <MenuItem
                                onClick={handleLogOut}
                                >
                                  Logout
                                </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  </>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header