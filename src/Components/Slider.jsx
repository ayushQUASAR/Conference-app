import React, { useState } from 'react'
import '../styles/slider.css'
import Button from '@mui/material/Button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import { Parallax } from 'react-parallax';
import Plx from "react-plx";

import symposiumData  from './Symposiumdata';
import img from '../Images/Univ.jpg'
import { NavLink } from 'react-router-dom'
import { easeIn } from 'framer-motion';
const Slider = () => {
   const[sindx,setSindx]=useState(0);

//    setInterval(() => {
//     let isfirst=sindx===0
    
//     isfirst?setSindx(sindx+1)?
//    }, 2000);
const lefthandleslide=()=>{
  let isfirst=sindx===0;
  setSindx(isfirst?(symposiumData.length)-1:sindx-1)
}
const righthandleslide=()=>{
  let islast=sindx===symposiumData.length-1;
  setSindx(islast?0:sindx+1)
}

setInterval(() => {
  if(symposiumData.length-1>sindx)
  setSindx(sindx+1);

  else{
    setSindx(0);
  }
  
},6000);
    return (
        <>
   <Plx parallaxData={[ {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 1.3,
        property: "scale",
        easing: [0.25, 0.1, 0.53, 3],
       

      },{
        startValue:0,
        endValue:5,
        property:'blur',
        easing:easeIn,
      }
    ],
  }]} >
                <div className='slider'>
                <img src={img} alt="" className="slider-img" />
                  <div className="innerslider">
                  <div onClick={lefthandleslide} className="leftarrow arrow">
                    <NavigateBeforeIcon/>
                    </div>
                    <div onClick={righthandleslide}className="rightarrow arrow">
                    <NavigateNextIcon/>
                    </div>
                    
                    <h1>      {symposiumData[sindx].title} {symposiumData[sindx].subTitle}</h1>

                    <div className="date">
                        <div className='date-1 ' > {symposiumData[sindx].date.pressRelease}</div>
                       
                        
                        <div className='date-2 '> {symposiumData[sindx].date.date}</div>

                        <div className='uname'>   {symposiumData[sindx].date.location}</div>
                    </div>
                    <div className="comm">
                        <p>{symposiumData[sindx].committee.commPara1}</p>
                        <p>{symposiumData[sindx].committee.commPara2}</p>
                    </div>
                    <div className="reg">
                        <p> {symposiumData[sindx].registration}</p>
                        <NavLink to='/registration'>
                            <Button variant="contained">Register</Button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </Plx>
        </>)
}
export default Slider;