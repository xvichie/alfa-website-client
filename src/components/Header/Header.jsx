import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Header.scss'; // Import your CSS file for header styles

import { Button, ClickAwayListener, Grow, InputLabel, MenuItem, MenuList, Paper, Popper, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import { slide as Menu } from 'react-burger-menu'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useSelector, useDispatch } from 'react-redux';
import { ButtonGroup } from 'react-bootstrap';
import { logoutUser, setIsAdmin, setIsLoggedIn } from '../../redux/slices/authSlice';
import Hamburger from './Hamburger/Hamburger';
import { ENDPOINTS, createAPIEndpoint } from '../../api/api';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const [loggedIn,setLoggedIn] = useState(false);


  const [HamburgerStyle,SetHamburgerStyle] = useState("Hidden");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(state => state.auth.token);
  const isAdmin = useSelector(state => state.auth.isAdmin);

  useEffect(() => {

    const SetAdmin = async () => {
      try{
        console.log(token.accessToken);
          const response = await createAPIEndpoint(ENDPOINTS.admin,token.accessToken).getWithToken();

          if(response.status === 200){
              console.log()
              dispatch(setIsAdmin(true));
          }else{
            dispatch(setIsAdmin(false));
          }
      }
      catch{
        console.error("Not Admin Error!");
      }
  };

    console.log(token);

    if(!token){
      setLoggedIn(false);
      dispatch(setIsLoggedIn(false));
    }
    else{

      const isTokenExpired = token.expiresIn * 1000 > Date.now();
      console.log(token.expiresIn);
      console.log(Date.now());

      if ((!isTokenExpired)) {
        setLoggedIn(true);
        dispatch(setIsLoggedIn(true));

        SetAdmin();

      } else {
        setLoggedIn(false);
        dispatch(setIsLoggedIn(false));
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

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1400) {
        SetHamburgerStyle("Hidden")
      }else {
        SetHamburgerStyle("Open")
      }
    };

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`Header ${scrolled ? 'HeaderScrolled' : ''}`} >
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
            {HamburgerStyle == "Hidden" ?
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
                      {isAdmin ? 
                      <Link to={`/Dashboard`}> 
                        <Button 
                            variant='contained'
                          >
                          Dashboard
                        </Button>
                      </Link>
                      :
                      ""
                      }
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
              :
              <>
                <div className="HamburgerDiv">
                  <Hamburger loggedIn={loggedIn}></Hamburger>
                </div>
              </>
            }
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header