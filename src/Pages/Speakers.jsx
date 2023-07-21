import React, { useEffect, useState, createContext, useContext } from 'react';
import Nav from '../Components/Nav';
import '../styles/speakers.css';
import Footer from '../Components/HomeComponent/Footer';
import Memberdetails from './Memberdetails';
import Popup from './Popup';

const SpeakerContext = createContext();

const useSpeakerContext = () => {
  return useContext(SpeakerContext);
};

const Speakers = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  const [memberDetails, setMemberDetails] = useState({});
  const [showprofile, setShow] = useState(false);
  const [Id,setId]=useState(null);
 
 

  const toggleMemberDetails = ( el) => {
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      [el.id]: !prevDetails[el.id],
    }));
    setShow(!showprofile);
    setId(el)
   
   
  };
  useEffect(()=>{
    console.log('id',showprofile)
  })


  const contextValue = {
    memberDetails,
    toggleMemberDetails,
    showprofile,
  };

  useEffect(() => {
    const fetchData = () => {
      fetch('https://conference.cyclic.app/speakers', {
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

  let tutSpeakers = null;
  let workSpeakers = null;
  let keyNoteSpeakers = null;

  if (!error) {
    const keyNote = values.filter((el) => el.TalkType === 'Key note session');
    const workshop = values.filter((el) => el.TalkType === 'Workshop');
    const tutorial = values.filter((el) => el.TalkType === 'Tutorial');

    keyNoteSpeakers = keyNote.map((el) => <Memberdetails el={el} key={el.id} />);
    workSpeakers = workshop.map((el) => <Memberdetails el={el} key={el.id} />);
    tutSpeakers = tutorial.map((el) => <Memberdetails el={el} key={el.id} />);
  } else {
    tutSpeakers = <div className='error'>Error: {error}</div>;
    workSpeakers = <div className='error'>Error: {error}</div>;
    keyNoteSpeakers = <div className='error'>Error: {error}</div>;
  }
  // style={showprofile?{filter:'blur(20px)'}:{}}

  return (
    <>
      <Nav />
      <SpeakerContext.Provider value={contextValue}>
        <div id='speaker' style={showprofile ? { filter: 'blur(20px)' } : {}}>
          <div className='speaker-page'  >
            <div className='inner-sp-page' >
              <div className='h2-speaker'>
                <h2>KeyNote Speakers</h2>
              </div>
              <div className='p-section'>{keyNoteSpeakers}</div>
              <div className='h2-speaker'>
                <h2>Speakers for Tutorials</h2>
              </div>
              <div className='p-section'>{tutSpeakers}</div>
              <div className='h2-speaker'>
                <h2>Industrial Panel Session</h2>
              </div>
              <div className='p-section'>{workSpeakers}</div>
            </div>
          </div>
 
        </div>
        {/* <div> */}
        {Id&&<Popup showprofile={showprofile} el={Id}/>}
        
           {/* </div> */}
        
      </SpeakerContext.Provider>
      <Footer />
    </>
  );
};

export { useSpeakerContext, Speakers };
