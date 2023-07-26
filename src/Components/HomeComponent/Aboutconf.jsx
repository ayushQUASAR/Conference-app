import React, { useEffect, useState } from 'react'
import img from '../../Images/engineer.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Aboutconf = () => {
  const [values, setValues] = useState([]);
  const [startdateObject, setStartDate] = useState('');
  const [EnddateObject, setEndDate] = useState('');
  const [error, setError] = useState(null);
  let about = null;
  let schedule=null;
  useEffect(() => {
    const fetchData = () => {
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
          const enddateString = data[0].confEndDate;
          setStartDate(new Date(startdateString));
          setEndDate(new Date(enddateString));


        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchData();

  }, []);
  if (!error && values.length > 0) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedStartDate = startdateObject.toLocaleDateString(undefined, options);
    const formattedEndDate = EnddateObject.toLocaleDateString(undefined, options);
   
   schedule= <div className="rschedule">
   <div className="when">
     <div > <CalendarMonthIcon className='slider-icon' /></div>
     <div className="when-wrap">
       <p className='when-1'>When</p>
       <hr />
       <p className='when-date'>{formattedStartDate}-{formattedEndDate}</p>
     </div>

   </div>
   <div className="where">
     <div className='icon-div'> <LocationOnIcon className='slider-icon' /></div>
     <div className="where-wrap">
       <p className='when-1'>Where</p>
       <hr />
       <p className='when-date'>NIT Jalandhar</p>
     </div>
   </div>
 </div>
    about =
      <p className='Detailpara'>{values[0].aboutConf}</p>;
  }
  else {
    about = <div className="error">{error}</div>
  }
  return (
    <> <div className="comm">
  
      <div className="about-content">
        <h3>About</h3>{about}
      </div>
      <div className='confaboutimg'>
        <img src={img} alt="" />
      </div>
      {schedule}

    </div></>
  )
}

export default Aboutconf