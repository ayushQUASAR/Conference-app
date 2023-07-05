import React from 'react'
import'../styles/commit.css'
import Nav from '../Components/Nav'
import Footer from '../Components/HomeComponent/Footer';
import Person from '../Components/Person'
import { useState } from 'react';


const Committee = () => {
const [values, setValues] = useState([]);
  fetch("https://conference.cyclic.app/committees", {
    method:"GET",
    headers:{
      "Authorization": "W1cD9V",
    }
  }).then(res => res.json())
  .then((data) => {
    setValues(data);
  })
  .catch(err => console.log(err));

  const organiser = values.filter((el) => el.Type === "Organising Committee");
const organiserCommittee = organiser.map((el) => {
  return <Person el={el}/>
})

  return (
    <>
        <div className="committee">
    <Nav/>
      <div className="inner-committee">
        <h2 style ={{color: 'white'}}>Committee</h2>
        <div className="organising-commit">
          <h2 style ={{color: 'white'}}>Organising Committee</h2>
          <div className="p-section">
            {organiserCommittee}
          {/* <div className="profile">
            <div className="img">
              <img src={p1} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div>
          <div className="profile">
            <div className="img">
              <img src={p2} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div> */}
          </div>
        </div>
        
      </div>
      </div>
 <Footer/>
      </>
  )
}

export default Committee