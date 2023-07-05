import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Nav = () => {
    const [x, setX] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);
    const [isBurgerMoved, setIsBurgerMoved] = useState(false);


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
                setIsBurgerMoved(!isBurgerMoved);
            };
            const burgerClassName = isBurgerMoved ? 'burger unto' : 'burger';

    const loc = useLocation();
//   useEffect(()=>{
//     

//   })
  
    return (
        <>
            <div className="nav">
                {x < 500  ? (
                    <div className={burgerClassName} onClick={toggleMenu}>
                        <Button variant="outlined">
                            <MenuIcon style={{ color: 'white' }} />
                        </Button>
                    </div>
                ) : null}
                {showMenu && x < 500 ? (
                    <div className="menu">
                        <NavLink exact to="/" className="bar">
                            <p>Home</p>
                        </NavLink>
                        <NavLink to="/Papers" className="bar">
                            <p>Papers</p>
                        </NavLink>
                        <NavLink to="/Speakers" className="bar">
                            <p>Speakers</p>
                        </NavLink>
                        {loc.pathname === '/' ? (
                            <div className="bar">
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
                            </div>
                        ) : (
                            <NavLink exact to="/" className="bar">
                                <p>sponsorship</p>
                            </NavLink>
                        )}
                        <NavLink to="/Contactus" className="bar">
                            <p>Contact us</p>
                        </NavLink>
                        <NavLink to="/Committee" className="bar">
                            <p>Committee</p>
                        </NavLink>
                        <NavLink to="/registration" className="bar">
                            <p>Registration</p>
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
                            <NavLink exact to="/" className="bar">
                                <p>Awards</p>
                            </NavLink>
                        )}
                    </div>
                ) : null}
                {x >= 500 ? (
                              <div className="options">
                              <NavLink exact to="/" className="bar">
                                <p>Home</p>
                              </NavLink>
                              <NavLink to="/Papers" className="bar">
                                <p>Papers</p>
                              </NavLink>
                              <NavLink to="/Speakers" className="bar">
                                <p>Speakers</p>
                              </NavLink>
                              {loc.pathname === '/' ? (
                                <div className="bar">
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
                                </div>
                              ) : (
                                <NavLink exact to="/" className="bar">
                                  <p>sponsorship</p>
                                </NavLink>
                              )}
                              <NavLink to="/Contactus" className="bar">
                                <p>Contact us</p>
                              </NavLink>
                              <NavLink to="/Committee" className="bar">
                                <p>Committee</p>
                              </NavLink>
                              <NavLink to="/registration" className="bar">
                                <p>Registration</p>
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
                                <NavLink exact to="/" className="bar">
                                  <p>Awards</p>
                                </NavLink>
                              )}
                            </div>
                         
                  
                ) : null}
                <div className="logo">Stanford</div>
            </div>
        </>
    );
};

export default Nav;
