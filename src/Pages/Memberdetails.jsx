import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {  useSpeakerContext } from '../Pages/Speakers';
import '../styles/Memberdetail.css';

const Memberdetails = ({ el }) => {
  const { memberDetails,toggleMemberDetails,showprofile} = useSpeakerContext();
  const show = memberDetails[el.id] ||false;
  // console.log('show',show)
  const handleinfo = () => {
    toggleMemberDetails(el);
  };

  return (
    <>
    {/* <SpeakerContextProvider> */}
      <div className='profile-test'>
        <div className='cimg'>
          {/* {console.log(el)} */}
          <a
            href={el.ProfileLink}
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}
            target='_blank'
          >
            <img src={el.ImgLink} alt='img' />
          </a>
        </div>
        <div className={show ? 'infoshow' : 'info'} onClick={handleinfo}>
          <InfoIcon style={{fontSize:'30px'}}/>
        </div>
        <div className='content-p'>
          <div className='sname'>
            <p>{el.Name}</p>
            <div className='post'>
            <p>{el.Designation}</p>
          </div>
          <div className='col-name'>
            <p>{el.Institute}</p>
          </div>
        </div>
  
          </div>
        
          <div className='links'>
          <span>
            <LinkedInIcon sx={{ fontSize: 40, margin: '10px 3px' }} />
          </span>
          <span>
            <InstagramIcon sx={{ fontSize: 40, margin: '10px 3px' }} />
          </span>
          </div>
      </div>
     
      {/* </SpeakerContextProvider> */}
    </>
  );
};

export default Memberdetails;