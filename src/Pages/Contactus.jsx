import React,{useEffect,useState} from 'react'
import Nav from '../Components/Nav'
import '../styles/Contact.css'
import Footer from '../Components/HomeComponent/Footer';

import ContactCard from '../Components/ContactCard';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contactus = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  let about=null;
   useEffect(() => {
       const fetchData = () => {
         fetch('https://pixelperfectnitj.onrender.com/contacts/647f315f62cdb3a26174fc38', {
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
    let about1=values.filter((el)=>( el.title==='For registration related queries'))
    let about2=values.filter((el)=>( el.title==='For accomodation related queries'))
    let about3=values.filter((el)=>( el.title==='For guest house booking'))
    about=<>

  {
    about1.map((el)=>(<ContactCard el={el}/>))
  }


 
  {
    about2.map((el)=>(<ContactCard el={el}/>))
  }

  {
    about3.map((el)=>(<ContactCard el={el}/>))
  }
    </>
  
}
else {
   about=<div className="error">{error}</div>
}
  return (
    <>
      <Nav />
      <div className="contact">
        {about}
      </div>
      <Footer />
    </>
  )
}

export default Contactus