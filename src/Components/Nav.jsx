import React from 'react'
import '../styles/Nav.css'
import { NavLink, useLocation } from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Awards from './HomeComponent/Awards';

const Nav = () => {
    const loc=useLocation();
    return (
        <>
            <div className="nav">

                <div className="options">
                    <NavLink exact to='/' className="bar"><p>Home</p></NavLink>
                    <NavLink to='/Papers' className="bar"><p>Papers</p></NavLink>
                    <NavLink to='/Speakers' className="bar"><p>Speakers</p></NavLink>
                   {loc.pathname==='/'?<div className="bar"><Link activeClass="active" className="bar" to="sponsorship" spy={true} smooth={true} duration={500}>Sponsorship</Link></div>:<NavLink exact to='/' className="bar"> <p>sponsorship</p></NavLink>}
                    <NavLink to='/Contactus' className="bar"><p>Contact us</p></NavLink>
                    <NavLink to='/Committee' className="bar"><p>Committee</p></NavLink>
                    <NavLink to='/registration' className="bar"><p>Registration</p></NavLink>
                    {loc.pathname==='/'?<div className="bar"><Link activeClass="active" className="bar" to="awards" spy={true} smooth={true} duration={500}>Awards</Link></div>:<NavLink exact to='/' className="bar"> <p>Awards</p></NavLink>}



                </div>
                <div className="logo">Stanford</div>
            </div>
        </>
    )
}

export default Nav