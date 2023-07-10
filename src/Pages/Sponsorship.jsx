import React, { useEffect, useState } from 'react';
import google from '../Images/sponsor/google_logo.png';
import meta from '../Images/sponsor/Meta-Logo.png';
import micro from '../Images/sponsor/microsoft_logo.png';
import ibm from '../Images/sponsor/ibm_logo.png';
import amazon from '../Images/sponsor/amazon_logo.png';
import Comp from '../Components/Comp';

const Sponsorship = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://conference.cyclic.app/sponsors', {
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

  }, []);
  console.log(values)
  let platSponsors = null;

 

  if (error) {
    platSponsors = <div className="error">Error: {error}
    
    <div className='error-icon'><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/broken-robot.png" alt="broken-robot"/></div></div>;
  } else {
    const platinum = values.filter((el) => el.type === "Platinum Sponsors");
    const plat = platinum;
    platSponsors = plat.map((el) => <Comp el={el} />);
  }

  return (
    <>
      <div id='sponsorship' className="sponsorship">
        <div className="sponsor-slide">
          <h1>Sponsors</h1>
          <div className="sponsor-box">
            <div className="platinum-sponsor">
              {platSponsors}
            </div>
            <div className='sponsor-title'>Platinum Sponsor</div>
            <div className="gold-sponsor">
            <img src={meta} alt="" className="src" />
            <img src={google} alt="" className="src" />
            </div>
            <div className='sponsor-title'>Gold Sponsor</div>
            <div className="silver-sponsor">
              <img src={micro} alt="" className="src" />
              <img src={amazon} alt="" className="src" />
            </div>
            <div className='sponsor-title'>Silver Sponsor</div>
            <div className="community-sponsor">
              <img src={ibm} alt="" className="src" />
            </div>
            <div className='sponsor-title'>Community Sponsor</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsorship;
