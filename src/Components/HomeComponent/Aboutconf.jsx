import React ,{useEffect,useState}from 'react'
import img from'../../Images/engineer.jpg'

const Aboutconf = () => {
    const [values, setValues] = useState([]);
    const [error, setError] = useState(null);
   let about=null;
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
            
            })
            .catch((err) => {
              setError(err.message);
            });
        };
    
        fetchData();
      
      }, []);
      if (!error  &&values.length > 0)
{
     about=
    <p className='Detailpara'>{values[0].aboutConf}</p>;
}
else {
    about=<div className="error">{error}</div>
}
  return (
    <> <div className="comm">
        <div className="about-content">
        <h3>About</h3>{about}
        </div>
        <div className='confaboutimg'>
            <img src={img} alt="" />
        </div>
    
  </div></>
  )
}

export default Aboutconf