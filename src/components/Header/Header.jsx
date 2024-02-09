import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Header.scss'; // Import your CSS file for header styles

import { Button, ClickAwayListener, Grow, InputLabel, MenuItem, MenuList, Paper, Popper, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import { slide as Menu } from 'react-burger-menu'

import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useSelector, useDispatch } from 'react-redux';
import { ButtonGroup, Container, Nav, NavDropdown, Navbar, Offcanvas, Button as BsButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
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
    <header>
      <Navbar expand="lg" collapseOnSelect fixed='top' className={`Header ${scrolled ? 'HeaderScrolled' : ''} bg-body-tertiary`} variant="outline-success">
        <Container className='Container'>
          <>
          <Link to={`/`}>
            <Navbar.Brand className='Navbar-Brand'>
              {scrolled ?
                <img src={process.env.PUBLIC_URL + '/images/Logo-Black-Text.png'} alt="" />
                :
                <img src={process.env.PUBLIC_URL + '/images/Logo-White-Text.png'} alt="" />
              }
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      <img className='OffCanvas-Img' src={process.env.PUBLIC_URL + '/images/Logo-Black-Text.png'} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 a align-items-center">
              <>
                <div className='Nav-Links'>
                  <Nav.Link onClick={() => navigate('/Projects')}>
                    <NavLink to={'/Projects'} className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`}>
                          Projects
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate('/Services')}>
                    <NavLink to={'/Services'} className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`}>
                        Services
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate('/Insights')}>
                    <NavLink to={'/Insights'} className={`Navigation-Link ${scrolled ? 'scrolled' : ''}`}>
                        Insights
                    </NavLink>
                  </Nav.Link>
                </div>
              {!loggedIn ? (
                <div className='NavButton'>
                  <Button color='primary' variant='outlined' className='fill-button' style={{marginRight: '10px'}} onClick={() => {
              const element = document.getElementById(`ContactUs`);
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }}}>
                    Contact Us
                  </Button>
                  <Link to={`/Login`}>
                    <Button color='primary' variant='contained'>
                      Login
                    </Button>
                  </Link>
                </div>
              ) : (
                isAdmin ?
                (
                  <>
                    <Dropdown as={ButtonGroup} variant="success">
                        <BsButton variant="success" onClick={() => navigate('/Dashboard')}>Dashboard</BsButton>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                )
                :
                (
                <Dropdown as={ButtonGroup} variant="success">
                  <BsButton variant="success">Account</BsButton>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            )
              )}
              </>
            </Nav>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
          </>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header