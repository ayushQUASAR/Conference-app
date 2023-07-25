import React from 'react'
import '../../styles/home.css'
import lottie from 'lottie-web';
import Reveal from './Reveal'
import animationData from '../../Anim/icons8-calendar.json'
import annoicon from '../../Anim/icons8-announcement.gif'
import AnnouncementCard from './AnnouncementCard'
import { useState, useEffect } from 'react'
const Agenda = () => {
  const [values, setValues] = useState([]);
  const [Eventvalues, setValuesEvent] = useState([]);
  const [Eventerror, setEventError] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const container = document.getElementById('animation-container');

    // Load the animation data from the JSON file
    const anim = lottie.loadAnimation({
      container,
      animationData: animationData,
      loop: true, // Set loop to true if you want the animation to loop
      autoplay: true, // Set autoplay to true if you want the animation to play automatically
    });
    return () => {
      // Clean up the animation when the component unmounts
      anim.destroy();
    };


  }, []);
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

  useEffect(() => {
    const fetchData = () => {
      fetch('https://pixelperfectnitj.onrender.com/eventDates', {
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
          setValuesEvent(data);
        })
        .catch((err) => {
          setEventError(err.message);
        });
    };

    fetchData();
  }, []);
  let annodata = null;
  let eventdata = null;
  if (!error && values.length > 0) {
    const annodata1 = values.filter((val) => val.confId === '647f315f62cdb3a26174fc38')
    annodata = annodata1.map((val, indx) => {
      return <AnnouncementCard val={val} />
    })
  }
  else {
    annodata = <div className="error">{error}</div>
  } if (!Eventerror && Eventvalues.length > 0) {
    const eventdata1 = Eventvalues.filter((val) => val.confId === '647f315f62cdb3a26174fc38')
    eventdata = eventdata1.map((val, indx) => {
      return <AnnouncementCard val={val} />
    })
  }
  else {
    eventdata = <div className="error">{Eventerror}</div>
  }
  return (
    <>

      <div className='agenda-box'>
        <div className="announcement">
          <div className="anno-overlay">

          </div>
          <div className="annocircle-overlay">
          </div>
          <div className="announcement-box">
            <div className="cover-box">

              <div className='annoicon'> <img src={annoicon} alt="Announcement image" /></div>
              {/* <div className="image" style={{backgroundImage:`url(${annoicon})`}}></div> */}
              <div className="agenda-title-box">
                Announcement
              </div>
            </div>
            <div className="content-coverboxanno">

              {annodata}
            </div>
          </div>
        </div>
        <div className="events-box">
          <div className="events">

            <div className="cover-box">
              {/* <div>
                <img src={Calendar} alt="" />
              </div> */}
     <div
  id="animation-container"
  style={{ width: '100px', height: '100px' }} // Set the dimensions of the animation container
></div>


              <div className="agenda-title-box">
                Events
              </div>
            </div>
            <div className="content-coverbox">

              {eventdata}
            </div>
          </div>
          <div className="anno-overlay2">   </div>
          <div className="side-overlay"></div>
        </div>





      </div>
    </>
  )
}

export default Agenda