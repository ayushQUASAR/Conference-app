import React from 'react'
import '../../styles/home.css'
import Arr from './Agenda_dt'
import Reveal from './Reveal'
import Polygon from '../../Images/Polygon 6.png'
import AnnouncementCard from './AnnouncementCard'
import { useState,useEffect } from 'react'
const Agenda = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      fetch('https://pixelperfectnitj.onrender.com/announcement', {
        method: 'GET',
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch speakers.');
          }
          return res.json();
        })
        .then((data) => {
          setValues(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchData();
  }, []);
  let annodata=null;
  if(!error&&values.length>0){
    const annodata1=values.filter((val)=> val.confId==='647f315f62cdb3a26174fc38')
    annodata=annodata1.map((val,indx)=>{
      return <AnnouncementCard val={val}/>
    })
  }
  else{
    annodata=<div className="error">{error}</div>
  }
  return (
    <>
      
      <div className='agenda-box'>
     
      <div className="anno-overlay"></div>
      <div className="annocircle-overlay">
     </div>
        <div className="announcement-box">
        <div className="agenda-title-box">
        Announcement
      </div>
       {/* <div className="internal-annobox"> */}
       {annodata}
       {/* </div> */}
        </div>
       

      </div>
    </>
  )
}

export default Agenda