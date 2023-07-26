import React, { useState, useEffect, useRef } from 'react';
import ParticleBg from '../Pcomponents/ParticleBg';
import '../../styles/timer.css';

const Time = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  const [startDateObject, setStartDate] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchData = () => {
      console.log('Fetching API...');
      fetch('https://pixelperfectnitj.onrender.com/home', {
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
          const startdateString = data[0].confStartDate;
          const startDate = new Date(startdateString);
          setStartDate(startDate);
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchData();

    // Clear interval on component unmount to avoid memory leaks
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (startDateObject) {
      // Start the countdown once the startDateObject is set
      intervalRef.current = setInterval(() => {
        const currentTime = new Date();
        const timeRemaining = startDateObject - currentTime;

        if (timeRemaining <= 0) {
          clearInterval(intervalRef.current);
          setCountdown(null);
        } else {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
          setCountdown({ days, hours, minutes, seconds });
        }
      }, 1000); // Update countdown every second
    }
  }, [startDateObject]);

  return (
    <div className="timer-wrapper">
      {countdown ? (
          <div className='counter'>
                  <h2>Event Will Start  In</h2>
                  <hr/>

            <div >
              <span><p>{countdown.days}</p> <p>
                Days </p></span> <span><p>  {countdown.hours}</p> <p>hours</p> </span> <span> <p>{countdown.minutes} </p> <p>Minutes</p> </span> <span> <p>{countdown.seconds}</p> <p>Seconds</p></span>
            </div>
          </div>
        ) : (
          <p>Countdown expired</p>
        )}
      <div className="timer">
        
        <ParticleBg />
      </div>
    </div>
  );
};

export default Time;
