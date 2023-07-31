import React,{useEffect,useState} from 'react'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'
import Agenda from '../Components/HomeComponent/Agenda'
import Sponsorship from './Sponsorship'
import Footer from '../Components/HomeComponent/Footer'
import Awards from '../Components/HomeComponent/Awards'
// import Papers from './Papers'
import Loading from '../Components/Loading'
import Aboutconf from '../Components/HomeComponent/Aboutconf'
import Mygallery from '../Components/HomeComponent/Mygallery'
import Time from '../Components/HomeComponent/Time'




const Home = () => {
  const [show,setShow]=useState(false)
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
          
          setShow(true);
        })
        .catch((err) => {
         
        });
    };

    fetchData();
  }, []);
  return (
    
   <>
    <Nav />
   {show ? ( 
  <>
   
    {/* <Parallax strength={600}> */}
      <Slider />
      <Aboutconf/>
      <Agenda />
      {/* <SLider/> */}
     <Mygallery/>
      <Sponsorship />
      <Awards />
      <Time/>
    {/* </Parallax> */}
  
  </>
) : ( 
  <Loading />
)}

<Footer />
   
   </>
  )
}

export default Home