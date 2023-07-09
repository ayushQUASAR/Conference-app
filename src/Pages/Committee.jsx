import React, { useEffect, useState } from 'react'
import'../styles/commit.css'
import Nav from '../Components/Nav'
import Footer from '../Components/HomeComponent/Footer'
import Person from '../Components/Person';


const Committee = () => {

  const [values, setValues] = useState([]);
useEffect(()=>{
  fetch("https://conference.cyclic.app/committees", {
    method:"GET",
    headers:{
      "Authorization" :process.env.REACT_APP_API_KEY,
    }
  }).then((res) => res.json())
  .then((data) => setValues(data))
  .catch((err) => console.log(err.message))
},[]);

  const inAdv = values.filter((el) => el.Subtype === "International Advisory Committe");
  const nationalAdv = values.filter ((el) => el.Subtype === "National Advisory Committe");
const pubAdv = values.filter((el)=> el.Subtype === "PUBLICATIONS COMMITTEE");

// console.log(inAdv, nationalAdv, pubAdv);
console.log(values)
const pubAdbCommittee = pubAdv.map((el)=> <Person el={el}/>);
  const nationalAdvCommittee = nationalAdv.map((el) => <Person el = {el}/>);
  const inAdvCommittee = inAdv.map((el) => <Person el={el}/>);

  return (
    <>
        <Nav/>
        <div className="committee">
      <div className="inner-committee">
        <h2>Committee</h2>
        <div className="organising-commit">
          <h2>Organising Committee</h2>
          <div className="p-section">
            {inAdvCommittee}
          {/* <div className="profile">
            <div className="img">
              <img src={p1} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div> */}
          
          {/* <div className="profile">
            <div className="img">
              <img src={p2} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div>
           */}
          </div>
        </div>
        <div className="advisory">
        <h2>Advisory Committee</h2>
          <div className="p-section">
          {nationalAdvCommittee}
          {/* <div className="profile">
            <div className="img">
              <img src={p1} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div> */}
          
          {/* <div className="profile">
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
        <div className="core-commit"> <h2>Core Committee</h2>
          <div className="p-section">
            {pubAdbCommittee}
          {/* <div className="profile">
            <div className="img">
              <img src={p1} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div> */}
          
          {/* <div className="profile">
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