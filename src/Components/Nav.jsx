import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import nitlogo from '../Images/nitjlogo.png'

const Nav = () => {
  const [x, setX] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setX(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setShowMenu(!showMenu);

  };

  const handleContainerClick = (e) => {
    e.stopPropagation(); // Stop event propagation
  };
  const loc = useLocation();
  //   useEffect(()=>{
  //     

  //   })

  return (
    <>
      <div className="nav" onClick={handleContainerClick}>
      <div className="logo">
        <div>  <img src={nitlogo} alt="nitjlogo" /></div>
          <div className="nitname">
            <p className='nitjname'>डॉ बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर

            </p>
            <p className='nitjname'>

              Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR
            </p>
          </div>
        </div>
        {x < 1000 ? (
          <div className='burger' onClick={toggleMenu}>
            <Button variant="outlined">
              <MenuIcon style={{ color: 'white' }} />
            </Button>
          </div>
        ) : null}
        {showMenu && x < 1000 ? (
          <div className="menu">
            <NavLink contenteditable="false" exact to="/" className={loc.pathname === '/' ? 'active-tab' : 'bar'}>
              Home
            </NavLink>
            <NavLink to="/Papers" className={loc.pathname === '/Papers' ? 'active-tab' : 'bar'}>
              Papers
            </NavLink>
            <NavLink to="/Speakers" className={loc.pathname === '/Speakers' ? 'active-tab' : 'bar'}>
              Speakers
            </NavLink>
            {loc.pathname === '/' ? (
              <div className="bar">
                <Link
                  activeClass="active"
                  className='bar'
                  to="sponsorship"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Sponsorship
                </Link>
              </div>
            ) : (
              <NavLink exact to="/" className="bar">
                sponsorship
              </NavLink>
            )}
            <NavLink to="/Contactus" className={loc.pathname === '/Contactus' ? 'active-tab' : 'bar'}>{

            }
              Contact us
            </NavLink>
            <NavLink to="/Committee" className={loc.pathname === '/Committee' ? 'active-tab' : 'bar'}>
              Committee
            </NavLink>
            <NavLink to="/registration" className={loc.pathname === '/registration' ? 'active-tab' : 'bar'}>
              Registration
            </NavLink>
            {loc.pathname === '/' ? (
              <div className="bar">
                <Link
                  activeClass="active"
                  className="bar"
                  to="awards"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Awards
                </Link>
              </div>
            ) : (
              <NavLink exact to="/" className={loc.pathname === '/awards' ? 'active-tab' : 'bar'}>
                Awards
              </NavLink>
            )}
          </div>
        ) : null}
        {x >= 1000 ? (
          <div className="options">
            <NavLink exact to="/" className={loc.pathname === '/' ? 'active-tab' : 'bar'}>
              Home
            </NavLink>
            <NavLink to="/Papers" className={loc.pathname === '/Papers' ? 'active-tab' : 'bar'}>
              Papers
            </NavLink>
            <NavLink to="/Speakers" className={loc.pathname === '/Speakers' ? 'active-tab' : 'bar'}>
              Speakers
            </NavLink>
            {loc.pathname === '/' ? (
              // <div className="bar">
                <Link
                  activeClass="active"
                  className="bar"
                  to="sponsorship"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Sponsorship
                </Link>
              // </div>
            ) : (
              <NavLink exact to="/" className={loc.pathname === '/sponsorship' ? 'active-tab' : 'bar'}>
                sponsorship
              </NavLink>
            )}
            <NavLink to="/Contactus" className={loc.pathname === '/Contactus' ? 'active-tab' : 'bar'}>
              Contact us
            </NavLink>
            <NavLink to="/Committee" className={loc.pathname === '/committee' ? 'active-tab' : 'bar'}>
              Committee
            </NavLink>
            <NavLink to="/registration" className={loc.pathname === '/registration' ? 'active-tab' : 'bar'}>
              Registration
            </NavLink>
            {loc.pathname === '/' ? (
              // <div className='bar'>
                <Link
                  activeClass="active"
                  className="bar"
                  to="awards"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Awards
                </Link>
              // </div>
            ) : (
              <NavLink exact to="/" className={loc.pathname === '' ? 'active-tab' : 'bar'}>
                Awards
              </NavLink>
            )}
          </div>


        ) : null}
   
      </div>
    </>
  );
};

export default Nav;
