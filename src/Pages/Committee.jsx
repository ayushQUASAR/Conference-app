import React from 'react'
import'../styles/commit.css'
import Nav from '../Components/Nav'
import p1 from '../Images/speaker/p1.jpg'
import p2 from '../Images/speaker/p2.jpg'
const Committee = () => {
  return (
    <>
        <div className="committee">
    <Nav/>

      
      
      <div className="inner-committee">
        <h2>Committee</h2>
        <div className="organising-commit">
          <h2>Organising Committee</h2>
          <div className="p-section">
          <div className="profile">
            <div className="img">
              <img src={p1} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div><div className="profile">
            <div className="img">
              <img src={p2} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div>
          </div>
        </div>
        <div className="advisory"></div>
        <div className="core-commit"></div>
      </div>
      </div></>
  )
}

export default Committee