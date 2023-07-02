import React from 'react'
import '../styles/Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="nav">

                <div className="options">
                <NavLink  exact to='/'className="bar">Home</NavLink>
                <NavLink to='/Papers' className="bar">Papers</NavLink>
                <NavLink to='/Speakers' className="bar">Speakers</NavLink>
                <div className="bar">Sponsorship</div>
                <NavLink to='/Contactus' className="bar">Contact us</NavLink>
                <NavLink to='/Committee' className="bar">Committee</NavLink>
                <NavLink to='/registration' className="bar">Registration</NavLink>
                <div className="bar">Awards</div>
                </div>
                <div className="logo">Stanford</div>
            </div>
        </>
    )
}

export default Nav