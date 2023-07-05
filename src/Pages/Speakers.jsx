import React from 'react'
import Nav from '../Components/Nav'
import '../styles/speakers.css'
import p1 from '../Images/speaker/p1.jpg'
import p2 from '../Images/speaker/p2.jpg'
import p3 from '../Images/speaker/p3.jpg'
import p4 from '../Images/speaker/p4.jpg'
import p5 from '../Images/speaker/p5.jpg'
import Footer from '../Components/HomeComponent/Footer'
import Person from '../Components/Person'
// data directly taken from the api
import speakerData from '../data/speaker_data';

const keyNote = speakerData.filter((obj) => obj.TalkType === "Key note session");
  const tutorial = speakerData.filter((obj)=> obj.TalkType === "Tutorial");
  const workshop = speakerData.filter((obj) => obj.TalkType === "Workshop");

  

  const keyNoteSpeakers = keyNote.map((el) => {
    return (
     <Person el={el}/>
    )
  });

  const tutSpeakers = tutorial.map((el)=> {
   return <Person el={el}/>
  });

  const workshopSpeakers = workshop.map((el) => {
   return <Person el={el}/>
  })


const Speakers = () => {
  return (
    <>
      <Nav />
      <div id='speaker'>
      <div className="speaker-page">
        <div className="inner-sp-page">
         <div className="h2-speaker"> <h2>KeyNote Speakers</h2></div>

       <div className="p-section">{keyNoteSpeakers}
          {/* <div className="profile">
            <div className="img"><img src={p1} alt="" /> </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div>


          <div className="profile">
            <div className="img"> <img src={p2} alt="" /></div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div> */}
          </div>

          <div className="h2-speaker"> <h2>Speakers for Tutorials</h2></div>
         <div className="p-section">{tutSpeakers}
       
          {/* <div className="profile">
            <div className="img">
              <img src={p3} alt="" />
            </div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div>

          <div className="profile">
            <div className="img"> <img src={p4} alt="" /></div>
            <div className="content-p">
              <div className="sname">Marcus Albers</div>
              <div className="post">Co-President PM Club</div>
              <div className="col-name">Stanford University USA</div>
            </div>
          </div> */}

          </div>
          <div className="h2-speaker"><h2>Industrial Panel Session</h2></div> 
          <div className="p-section">{workshopSpeakers}

          {/* <div className="profile">
            <div className="img">
              <img src={p5} alt="" />
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
      <Footer/>
      </div>
    </>
  )
}

export default Speakers;