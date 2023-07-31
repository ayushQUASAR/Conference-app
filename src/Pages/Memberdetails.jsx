import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import {  useSpeakerContext } from '../Pages/Speakers';
import '../styles/Memberdetail.css';

const Memberdetails = ({ el }) => {
  const { memberDetails,toggleMemberDetails} = useSpeakerContext();
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
          <a
            href={el.ProfileLink}
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}
            target='_blank'
          >
          <span>
            <ContactsIcon sx={{ fontSize: 40, margin: '10px 3px' ,color:'white' }} />
          </span>
         </a>
          </div>
      </div>
     
      {/* </SpeakerContextProvider> */}
    </>
  );
};

export default Memberdetails;
