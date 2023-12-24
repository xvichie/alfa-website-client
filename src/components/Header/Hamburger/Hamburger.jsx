import React, { useState, useEffect } from 'react';
import './Hamburger.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Button, ButtonGroup } from '@mui/material';
import { useDispatch } from 'react-redux';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { logoutUser } from '../../../redux/slices/authSlice';


function Hamburger({loggedIn}) {
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();


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

  const [scrolled, setScrolled] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1400) {
        // setIsOpen(false); // Close the menu if the screen size is larger than 767px
        // // console.log("nigga");
      }
    };
    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <div className={`Hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className={`Burger Burger1 ${scrolled ? '' : 'White' }`} />
            <div className={`Burger Burger1 ${scrolled ? '' : 'White' }`} />
            <div className={`Burger Burger1 ${scrolled ? '' : 'White' }`} />
        </div>
        <div className={`Sidebar ${isOpen ? 'Sidebar-Open' : ''}`}>
            <ul className='Header-Wrapper-Navigation-Sidebar'>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <NavLink to={'/'}>
                    <img src={process.env.PUBLIC_URL+'/images/Logo-White-Text.png'} height={92} alt="" />
                  </NavLink>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <NavLink 
                  className={`Navigation-Link`} 
                  to={`/Services`}>Services</NavLink>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <NavLink className={`Navigation-Link`} to={`/Projects`}>Projects</NavLink>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <NavLink className={`Navigation-Link`} to={`/Insights`}>Insights</NavLink>
                </li>
                <li id='Hamburger-Navigation-Buttons'>
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
                      <Link to={`/Dashboard`}> 
                        <Button 
                            variant='contained'
                            onClick={() => setIsOpen(!isOpen)}
                          >
                          Dashboard
                        </Button>
                      </Link>
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
                                  onClick={() => {handleLogOut(); setIsOpen(!isOpen)}}
                                  
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
    </>
  );
}

export default Hamburger;
