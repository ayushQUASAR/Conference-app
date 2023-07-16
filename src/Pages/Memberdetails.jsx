import React, { useState } from 'react';
// import img from '../Images/speaker/p2.jpg';
import '../styles/Memberdetail.css';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import zIndex from '@mui/material/styles/zIndex';
const Memberdetails = ({el}) => {


 const [show,setShow]=useState(false);
const handleinfo=()=>{
  setShow(!show)
}
  return (
    <>
      <div className='profile-test'>
        <div className={`cimg ${show?'imgactive':''}`}>
          {console.log(el)}
        <a href={el.ProfileLink} rel="noopener noreferrer"style={{textDecoration:"none"}} target="_blank"> <img  src={el.ImgLink} alt="img" /></a>  
     
        </div>
        <div className={show?'infoshow':'info'}onClick={handleinfo}>
          <InfoIcon />
         
        </div>
        <div className="content-p">
              <div className="sname"> <p>{el.Name}</p></div>
              <div className="post"><p>{el.Designation}</p></div>
              <div className="col-name"><p>{el.Institute}</p></div>
            </div>
        <div className="links">
          <span>
            <LinkedInIcon sx={{ fontSize: 40, margin: '10px 3px' }} />
          </span>
          <span>
            <InstagramIcon sx={{ fontSize: 40, margin: '10px 3px' }} />
          </span>
        </div>
       

          <div className={`test-cbox ${show?'showtestbox':''}`}>
          {/* <div className='info'onClick={handleinfo}>
          <InfoIcon />
         
        </div> */}
            <div className="tname">
              <h2>{el.Name}</h2>
            </div>
            <div className="tdesignation">
            <h3>{el.Designation}</h3>

            </div>
            <div className="links">{/* Render your social media links here */}
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorem quam laudantium deserunt corrupti
              ipsum ab. Expedita laborum deleniti quasi natus voluptatem, tempore repudiandae excepturi possimus
              voluptatum, harum nostrum eaque consequuntur exercitationem eligendi ab vel numquam libero minima mollitia,
              qui animi magni. A repellat voluptate voluptas odit nobis facere odio architecto, animi, perspiciatis
              earum temporibus cupiditate commodi nesciunt fugiat reiciendis, voluptates eveniet! Doloremque vero
              voluptatibus ex nobis? Atque in aliquid quisquam nostrum ipsa corrupti, dolores impedit mollitia, a quia
              aspernatur.
            </div>
          </div>
       
    </div>
      
    </>
  );
};

export default Memberdetails;