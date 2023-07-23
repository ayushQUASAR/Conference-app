import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

import twitter from '../../Images/social/image 2.png'
import linked from '../../Images/social/image 3.png'
import fb from '../../Images/social/image 4.png'
import nitlogo from '../../Images/nitjlogo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                        <span ><LocationOnIcon/> G.T Road, Amritsar Bypass,
                            Jalandhar,
                            Punjab, India-144008</span>
                    </div>
                    <div >

                        <div >
                           <span><PhoneIcon/> +91-0181-5037855, 2690301, 2690453, 3082000</span>
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
                        <button className="twitter">
                            <img src={twitter} alt="" />
                        </button>
                        <button className="fb">
                            <img src={fb} alt="" />
                        </button>

                        <button className="linkedin">
                            <img src={linked} alt="" />
                        </button>
                    </div>
                    <div className="social-email">Email:   stanforduniversity@edu.com</div>
                    <div className="social-address">© Stanford University. Stanford, California 94305.</div>
                </div>
            </div>

        </>
    )
}

export default Footer