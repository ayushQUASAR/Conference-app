import React, { useEffect } from 'react';
import open from '../Images/sponsor/OpenAI_Logo.png';
import google from '../Images/sponsor/google_logo.png';
import meta from '../Images/sponsor/Meta-Logo.png';
import micro from '../Images/sponsor/microsoft_logo.png';
import deep from '../Images/sponsor/deepmind_logo.png';
import ibm from '../Images/sponsor/ibm_logo.png';
import amazon from '../Images/sponsor/amazon_logo.png';
import { useState } from 'react';
import Comp from '../Components/Comp';

const Sponsorship = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://conference.cyclic.app/sponsors", {
      method: "GET",
      headers: {
        "Authorization": "W1cD9V",
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch sponsors.");
        }
        return res.json();
      })
      .then((data) => setValues(data))
      .catch((err) => setError(err.message));
  }, []);

  console.log('val', values);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const platinum = values.filter((el) => el.type === "Platinum Sponsors");
  const plat = platinum.slice(0, 2);
  console.log(plat);
  const platSponsors = plat.map((el) => <Comp el={el} />);

  return (
    <>
      <div id='sponsorship' className="sponsorship">
        <div className="sponsor-slide">
          <h1>Sponsors</h1>
          <div className="sponsor-box">
            <div className="platinum-sponsor">
              {platSponsors}
              <img src={open} alt="OpenAI" />
              <img src={google} alt="google" />
            </div>
            <div className='sponsor-title'>Platinum Sponsor</div>
            <div className="gold-sponsor">
              <img src={meta} alt="" className="src" />
              <img src={deep} alt="" className="src" />
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
