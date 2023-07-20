import React from 'react'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'
import Agenda from '../Components/HomeComponent/Agenda'
import Sponsorship from './Sponsorship'
import SLider from '../Components/HomeComponent/GallerySLider'
import Footer from '../Components/HomeComponent/Footer'
import Awards from '../Components/HomeComponent/Awards'
// import Papers from './Papers'
import { Parallax } from 'react-parallax';



const Home = () => {
  return (
    
   <>
   <Nav/>
   <Parallax strength={600}>
   <Slider/>
   <Agenda/>
   <SLider/>
   <Sponsorship/>
   
 
   <Awards/>
 
   </Parallax>
   <Footer/>
   
   </>
  )
}

export default Home