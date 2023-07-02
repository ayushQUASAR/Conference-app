import React from 'react'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'
import Agenda from '../Components/HomeComponent/Agenda'
import Sponsorship from './Sponsorship'
import SLider from '../Components/HomeComponent/GallerySLider'
import Footer from '../Components/HomeComponent/Footer'
import Awards from '../Components/HomeComponent/Awards'
import Papers from './Papers'

const Home = () => {
  return (
    
   <>
   <Nav/>
   <Slider/>
   <Agenda/>
   <Sponsorship/>
   <SLider/>
   <Awards/>
   <Footer/>
   
   </>
  )
}

export default Home