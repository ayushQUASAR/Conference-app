import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactCard = ({el}) => {

  return (
    <>
    <div className="inner-contact">
         <h3>{el.title}</h3>
        <div className="profile-data">
            <div className="pic">
            <a href={el.ProfileLink}><img src={el.imgLink} alt="photo" /></a>
            <p>{el.name}</p>
            <p>{el.designation}</p>
            <p>{el.institute}</p>
            </div>
            <div className="contactinfo">
                <p className="phone"><span><PhoneIcon/>{el.phone}</span></p>
                <p className="phone"> <span><MailIcon/>{el.email}</span></p>
            </div>

        </div>
        </div></>
  )
}

export default ContactCard