import React, { useState, useEffect } from 'react'
import '../styles/slider.css'
import Button from '@mui/material/Button'
import YouTubeIcon from '@mui/icons-material/YouTube';
import Plx from "react-plx";
import nit from '../Images/nitj.jpeg'
import nit2 from '../Images/nitj2.JPG'
import nit3 from '../Images/nitj3.jpeg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom'
import { easeIn } from 'framer-motion';
import Aboutconf from './HomeComponent/Aboutconf';

const Slider = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  const [startdateObject,setStartDate]= useState('');
  const [EnddateObject,setEndDate]= useState('');
 
  const arimg = [
    {
      imgs:  nit ,
    }, {
      imgs:  nit2 ,
    }, {
      imgs:  nit3 ,
    }
  ]
  const [nitimg, setImg] = useState(arimg[0].imgs)
  const symposiumData = values;
  let i=0;
  const changeImage = () => {
    if (i < arimg.length - 1) {
      setImg(arimg[++i].imgs);
    } else {
      setImg(arimg[0].imgs);
    }
  };
  useEffect(() => {
    // Set up the interval when the component is mounted
    const interval = setInterval(changeImage, 4000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const fetchData = () => {
      fetch('https://pixelperfectnitj.onrender.com/home', {
        method: 'GET',
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch speakers.');
          }
          return res.json();
        })
        .then((data) => {
          setValues(data);
          const startdateString = data[0].confStartDate;
          const enddateString = data[0].confEndDate;
          setStartDate(new Date(startdateString));
          setEndDate(new Date(enddateString));
        
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchData();
  }, []);

  let innerslide = null;
  if (!error  &&values.length > 0) {

   
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedStartDate = startdateObject.toLocaleDateString(undefined, options);
    const formattedEndDate = EnddateObject.toLocaleDateString(undefined, options);
  
   
    
    innerslide =<> <div className="innerslider">

      <div className='banner'>   <img src={symposiumData[0].logo} alt="logo" className="slider-logo" /> <div> {symposiumData[0].confName}</div>
      </div> 
      <div className="date">
        <div className='date-1 ' >  Start Date:{formattedStartDate}</div>


        <div className='date-2 '> End Date:{formattedEndDate}</div>


      </div>
     
      <div className='uname'>
        <a href={symposiumData[0].youtubeLink} rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
          target='_blank'>    <YouTubeIcon className='unameicon'style={{ color: '#4573DF', fontSize: '2.5rem' }} /></a>
        <a href={symposiumData[0].instaLink} rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
          target='_blank'>  <InstagramIcon className='unameicon'style={{ color: '#4573DF', fontSize: '2.5rem' }} /></a>
        <a href={symposiumData[0].facebookLink} rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
          target='_blank'> <FacebookIcon className='unameicon'style={{ color: '#4573DF', fontSize: '2.5rem' }} /></a>
        <a href={symposiumData[0].twitterLink} rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
          target='_blank'>    <TwitterIcon className='unameicon'style={{ color: '#4573DF', fontSize: '2.5rem' }} /></a>
        
      </div>
      <div className="reg">
        <p> Link to Register</p>
        <NavLink to='/registration'>
          <Button variant="contained">Register</Button>
        </NavLink>
      </div>
      
    </div>
   
    </>

  } 
 

  else {
    innerslide = <><div style={{ position: 'absolute', top: '50%' }} className="error">{error}</div></>
  }


  return (
    <>
      <Plx parallaxData={[{
        start: 0,
        end: 500,
        properties: [
          {
            startValue: 1,
            endValue: 1.3,
            property: "scale",
            easing: [0.25, 0.1, 0.53, 3],


          }, {
            startValue: 0,
            endValue: 5,
            property: 'blur',
            easing: easeIn,
          }
        ],
      }]} >
        <div className='slider'>
          {/* <img src={nit} alt="nit img" className="slider-img" />
           */}
          <div
            className="slider-img"
            style={{
              background: ` url(${nitimg}) no-repeat center/cover`,
              filter:'brightness(40%)',
              animation:'0.5s ease'
            }}
          ></div>
          




          {innerslide}
        </div>
      </Plx>
    </>)
}
export default Slider;