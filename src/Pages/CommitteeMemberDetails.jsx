 import React from 'react'
 import ContactsIcon from '@mui/icons-material/Contacts';

 const CommitteeMemberDetails = ({el}) => {
   return (
     <> <div className='profile-test'>
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
       <ContactsIcon sx={{ fontSize: 40, margin: '10px 3px' ,color:'white' }} />
       </span>
       </div>
   </div></>
   )
 }
 
 export default CommitteeMemberDetails