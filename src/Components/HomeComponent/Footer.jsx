import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import Iframe from 'react-iframe';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import nitlogo from '../../Images/nitjlogo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Diversity1 } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="nit-content">
                    <div className="footer-logo">
                        <img src={nitlogo} alt="" />

                        <p>Dr B R Ambedkar National Institute of Technology Jalandhar
                        </p>
                    </div>
                    <div className='address' >
                        <div >
                            <span ><LocationOnIcon /> G.T Road, Amritsar Bypass,
                                Jalandhar,
                                Punjab, India-144008</span>
                        </div>
                        <div >

                            <div >
                                <span><PhoneIcon /> +91-0181-5037855, 2690301, 2690453, 3082000</span>
                            </div>
                        </div>
                        <div id="social-links" >
                            <div >
                                <div >
                                    <a href="https://www.facebook.com/NITJofficial/" target="_blank">
                                    </a>
                                </div>
                                <div >
                                    <a href="https://twitter.com/NITJofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                                    </a>
                                </div>
                                <div >
                                    <a href="https://in.linkedin.com/school/dr-b-r-ambedkar-national-institute-of-technology-jalandhar-official/" target="_blank">
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/nitjofficial/?hl=en" target="_blank">
                                    </a>
                                </div>
                                <div >
                                    <a href="https://www.youtube.com/c/NITJOfficial" target="_blank">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="foot-content-head">
                        <div>Rules</div>
                        <div>Maps</div>
                        <div>links</div>
                    </div>
                    <div className="foot-legal">
                        <span> <p>Terms of Use</p></span>
                        <span>Privacy</span>
                        <span>Copyright</span>
                        <span>Trademarks</span>
                        <span>Programs</span>
                    </div>
                </div>
                <div className="social-link">
                    <div className="social-icon">
                        <div className="gmap">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6621069083862!2d75.53326897638748!3d31.3958791532808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1690828329197!5m2!1sen!2sin"
                                width="300"
                                height="200"
                    
                                frameBorder="0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            />
                        </div>
   <div>
                        <button className="twitter">
                            <TwitterIcon className='icon-footer' sx={{ color: '#239ba8' }} />
                        </button>
                        <button className="fb">
                            <FacebookIcon className='icon-footer' sx={{ color: '#239ba8' }} />                        </button>

                        <button className="linkedin">
                            <LinkedInIcon className='icon-footer' sx={{ color: '#239ba8' }} />        </button>
                    </div>
                    </div>

                    <div className="social-address"> © Copyright 2023, All Rights Reserved NIT Jalandhar </div>
                </div>
            </div>

        </>
    )
}

export default Footer