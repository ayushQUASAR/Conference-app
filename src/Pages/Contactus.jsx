import React from 'react'
import Nav from '../Components/Nav'
import '../styles/Contact.css'
import Footer from '../Components/HomeComponent/Footer';
import map from '../Images/image 8.png'
import EmailIcon from '@mui/icons-material/Email';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contactus = () => {
  return (
    <>
      <Nav />
      <div className="contact">
        <div className="edumail">
          <h2>Have any questions?</h2>
          <h2>Contact Us.</h2>
          <div className="ques-mail">
            <span className="post-logo"><EmailIcon /></span>
            <div>info.tee2023@stanford.edu</div>
          </div>
        </div>
        <div className="problem">
          <h2>Have any problem
            registering?</h2>
          <h2>Mail at:</h2>
          <div className="prob-mail">
            <span className="post-logo"><EmailIcon /></span>
            <div>tech.tee2023@stanford.edu</div>
          </div>


        </div>
        <div className="venue">Venue</div>
      </div>
      <div className="map">
        <img src={map} alt="" />
      </div>
      <Footer />
    </>
  )
}

export default Contactus