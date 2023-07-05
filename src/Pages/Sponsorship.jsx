import React from 'react'
import open from '../Images/sponsor/OpenAI_Logo.png'
import google from '../Images/sponsor/google_logo.png'
import meta from '../Images/sponsor/Meta-Logo.png'
import micro from '../Images/sponsor/microsoft_logo.png'
import deep from '../Images/sponsor/deepmind_logo.png'
import ibm from '../Images/sponsor/ibm_logo.png'
import amazon from '../Images/sponsor/amazon_logo.png'

const Sponsorship = () => {
  return (
    <>
    <div id ='sponsorship'className="sponsorship">
        <div className="sponsor-slide">
             <h1>Sponsors</h1>
        <div className="sponsor-box">
            <div className="platinum-sponsor">
                <img src={open} alt="OpenAI"  />
                <img src={google} alt="google"  />
            </div>
            <div className='sponsor-title'>Platinum Sponsor</div>
            <div className="gold-sponsor">
                <img src={meta} alt="" className="src" />
                <img src={micro} alt="" className="src" />
                <img src={deep} alt="" className="src" />
            </div>
            <div className='sponsor-title'>Gold Sponsor</div>
            <div className="silver-sponsor">
                <img src={amazon} alt="" className="src" />
            </div>
            <div className='sponsor-title'>Silver Sponsor</div>
            <div className="community-sponsor">
                <img src={ibm} alt="" className="src" />
            </div>
            <div className='sponsor-title'>Community Sponsor</div>
            </div>

        </div>
        </div></>
  )
}

export default Sponsorship