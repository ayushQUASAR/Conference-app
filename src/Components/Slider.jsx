import React from 'react'
import '../styles/slider.css'
import Button from '@mui/material/Button'

import img from '../Images/Univ.jpg'
import { NavLink } from 'react-router-dom'
const Slider = () => {
    return (
        <>
            <div className='slider'>
                <img src={img} alt="" className="src" />
                <h1>        8th International Research Symposium on Transformer Architectures
                    Transformer based Learning, 2023</h1>

                    <div className="date">
                <div className='date-1 ' >June 2023 Press Release Conference Proceedings</div>
                <div className='date-2 '> June 24, 2023</div>

                <div className='uname'>  Stanford University, CA</div>
                </div>
                <div className="comm">
                    <p>Organized by School of Computer Science (SCS), Stanford University, CA</p>
                    <p>Association with Prince Sultan University - Saudi Arabia</p>
                </div>
                <div className="reg">
                  <p>  Registration upto: 15th June, 2023</p>
                  <NavLink to='/registration'>
                <Button  variant="contained">Register</Button>
                </NavLink>
</div>

            </div>
        </>)
}

export default Slider;