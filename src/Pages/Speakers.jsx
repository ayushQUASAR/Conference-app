import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import '../styles/speakers.css'

import Footer from '../Components/HomeComponent/Footer'
// import Person from '../Components/Person'
import { useState } from 'react';
import Memberdetails from './Memberdetails'


const Speakers = () => {

  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      fetch('https://conference.cyclic.app/speakers', {
        method: 'GET',
        headers: {
          "Authorization": process.env.REACT_APP_API_KEY,
        }
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch sponsors.');
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
   

  }, [])

  let tutSpeakers = null;
  let workSpeakers = null;
  let keyNoteSpeakers = null;

  if (!error) {

      const keyNote = values.filter((el) => el.TalkType === "Key note session");
      const workshop = values.filter((el) => el.TalkType === "Workshop");
      const tutorial = values.filter((el) => el.TalkType === "Tutorial");

    keyNoteSpeakers = keyNote.map((el) => <Memberdetails el={el} />);
    workSpeakers = workshop.map((el) => <Memberdetails el={el} />);
    tutSpeakers = tutorial.map((el) => <Memberdetails el={el} />);

  }
  else {
    tutSpeakers = <div className="error">Error: {error}</div>;
    workSpeakers = <div className="error">Error: {error}</div>;
    keyNoteSpeakers = <div className="error">Error: {error}</div>;
  }
  return (
    <>
      <Nav />
      <div id='speaker'>
        <div className="speaker-page">
          <div className="inner-sp-page">
            <div className="h2-speaker"> <h2>KeyNote Speakers</h2></div>
            <div className="p-section">
              {keyNoteSpeakers}


            </div>
            <div className="h2-speaker"> <h2>Speakers for Tutorials</h2></div>
            <div className="p-section">
              {tutSpeakers}

            </div>

            <div className="h2-speaker"><h2>Industrial Panel Session</h2></div>
            <div className="p-section">
              {workSpeakers}

            </div>

          </div>
       
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Speakers