import React from 'react'
import univ from '../../Images/University.png'
import stanford from '../../Images/image 1.png'
import twitter from '../../Images/social/image 2.png'
import linked from '../../Images/social/image 3.png'
import fb from '../../Images/social/image 4.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src={stanford} alt="" />
                    <img src={univ} alt="" />
                </div>
                <div className="footer-content">
                    <div className="foot-content-head">
                    <div>Stanford Home</div>
                    <div>Maps</div>
                    <div>links</div>
                    </div>
                    <div className="foot-legal">
                        <span>Terms of Use</span>
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