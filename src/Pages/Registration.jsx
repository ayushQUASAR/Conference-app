import React from 'react'
import pic1 from '../Images/reg/conferegdetail1.jpg'
import pic2 from '../Images/reg/confregdetail2.jpg'
import Nav from '../Components/Nav'
import '../styles/registration.css'

const Registration = () => {
  return (
    <>
    <Nav/>
    <div className="registration-box">
      <h1>Registration Details</h1>
      <div className="reg-box1">
        <img src={pic1} alt="" />
      </div>
      <hr/>
      <div className="reg-box2">
        <img src={pic2} alt="" />
      </div>
    </div>
    </>
  )
}

export default Registration;