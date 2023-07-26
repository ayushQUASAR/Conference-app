import React from 'react'
import '../styles/Memberdetail.css'
import CloseIcon from '@mui/icons-material/Close';

import { useSpeakerContext } from './Speakers';
const Popup = ({el,showprofile}) => {

  const { toggleMemberDetails} = useSpeakerContext();
  const handleinfo = () => {
    toggleMemberDetails(el);
  };
 
  return (
    <>  <div  className={`test-cbox ${showprofile ? 'showtestbox' : ''}   ${showprofile ? 'active-member' : ''} `}>
    <div className={`cimg ${showprofile ? 'imgactive' : ''}`}>
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
        <div className={showprofile ? 'infoshow' : 'info'} onClick={handleinfo}>
          <CloseIcon style={{fontSize:'20px'}} />
        </div>
        <div className='tdesignation'>
      <h3>{el.Designation}</h3>
      <h4 style={{textAlign:'center'}}>{el.Institute}</h4>
    </div>
    <div className='tname'>
      <h2>{el.Name}</h2>
    

    </div>
 
    {/* <div className='links'>Render your social media links here</div> */}
    <div className='content'>
     
     <div className="talktitle"> <p>TalkType:</p> {el.TalkType}</div>
     <div className="talktitle"> <p>TalkTitle:</p>{el.TalkTitle}</div>
     <div className="abstract">
      <div className='abstractpara'>
        <p style={{textAlign:'center'}}>Abstract</p>
        {el.Abstract}</div>
     </div>
    </div>
  </div></>
  )
}

export default Popup