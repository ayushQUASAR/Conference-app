import React from 'react'
import rect from '../../Images/Rectangle 8.png'
import { NavLink } from 'react-router-dom'

const Awards = () => {
    return (
        <>
            <div id='awards' className="awards">
                <div className="award-h2"><h2>Awards and Prizes</h2></div>
                <p>

                    "In recognition of excellence and innovation in research, our conference offers prestigious awards for outstanding papers. These awards honor the contributions of researchers who have made significant advancements in their respective fields. The awards menu showcases the various categories and criteria for recognition, highlighting the diversity of research areas covered in our conference. From Best Paper Awards to Special Recognition Awards, we celebrate the exceptional work of researchers who have made significant contributions to their domains. The awards program aims to inspire and encourage researchers to pursue excellence and push the boundaries of knowledge in their respective fields. Join us in celebrating the achievements of these remarkable individuals who have made a lasting impact in the world of research."

                </p>
                <div className="prize-section">
                    <div className="first-sec">

                        <div className="best-paper prize-box ">
                            <div className='overlay'>
                            <img src={rect} alt="" />
                            </div>
                            <NavLink  to='/bestpaper'>
                            <div className="prize-btn-container">  <button className='prize-btn'>Best Paper</button></div>
                            </NavLink>


                        </div>

                        <div className="session-paper prize-box">
                        <div className='overlay'>
                            <img src={rect} alt="img" />
                            </div>
                            <NavLink  to='/sessionpaper'>
                            <div className="prize-btn-container">   <button className='prize-btn'>Session Paper</button></div>
                            </NavLink>

                        </div>

                      
                    </div>
                    <div className="second-sec">
                            <div className="assoc-awards prize-box">
                            <div className='overlay'>
                                <img src={rect} alt="" />
                                </div>
                                <NavLink  to='/associationawards'>
                                    <div className="prize-btn-container">  <button className='prize-btn' >Association Awards</button></div>
                                  
                                </NavLink>
                            </div>
                            <div className="other prize-box">
                            <div className='overlay'>
                                <img src={rect} alt="img" />
                                </div>
                                <NavLink  to='/otherprizes'>
                                <div className="prize-btn-container">  <button className='prize-btn'>Other Prizes</button></div>
                                </NavLink>

                            </div>
                        </div>
                </div>
                </div>

            </>
            )
}

            export default Awards