import React,{useEffect,useState} from 'react'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'
import Agenda from '../Components/HomeComponent/Agenda'
import Sponsorship from './Sponsorship'
import SLider from '../Components/HomeComponent/GallerySLider'
import Footer from '../Components/HomeComponent/Footer'
import Awards from '../Components/HomeComponent/Awards'
// import Papers from './Papers'
import { Parallax } from 'react-parallax';
import Loading from '../Components/Loading'




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
   {show ? ( 
  <>
    <Nav />
    <Parallax strength={600}>
      <Slider />
      <Agenda />
      <SLider/>
      <Sponsorship />
      <Awards />
    </Parallax>
    <Footer />
  </>
) : ( 
  <Loading />
)}


   
   </>
  )
}

export default Home