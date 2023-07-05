import React from 'react'
import Nav from '../Components/Nav'
import '../styles/paper.css'
import one from '../Images/paperimgs/one.jpg'

import two from '../Images/paperimgs/two.jpg'
import three from '../Images/paperimgs/three.jpg'
import Footer from '../Components/HomeComponent/Footer'
const Papers = () => {
  return (
    <> 
          <Nav />
     
      <div className='paper'>

        <div className="cssbox">
         <div className="paper-h1"><h1>Theme of Technical Papers</h1></div>
          <div className="paper-details">
           <div className="ulone">
           <div className='PAPER-IMG' > <img src={two} alt="img" /></div>
            <ul> 
             <div className="h2"> <h2>Modern Power and Smart Energy Systems</h2></div>
              <li>     Power and energy systems - stability, operation, and control</li>
              <li>Power system economics and electricity markets</li>
              <li>Wide-area monitoring and system protection</li>
              <li>  Smart grid architectures, networking and models</li>
              <li>Cyber-physical systems, security and privacy</li>
              <li>Computational intelligence in power and energy systems</li>


            </ul>
            </div>
            <div className="ulone">
           <div className='PAPER-IMG'> <img src={three} alt="img" /></div>
            <ul>
             <div className="h2"><h2>Renewable Energy Systems and Distributed Generation</h2></div> 
              <li> Renewable power generation & clean energy technologies</li>
              <li>Integration of renewables and energy storage systems </li>
              <li>Renewable power generation forecasting </li>
              <li>  Power electronics interface and control</li>
              <li>Active  distribution networks and AC/DC microgrids</li>
              <li>Demand side energy management & prosumers participation</li>
              <li>Smart Buildings, IoT and Resource Aggregation</li>


            </ul>
            </div>
            
            <div className="ulone">
           <div className='PAPER-IMG'> <img src={one} alt="img" /></div>
             <ul>
             <div className="h2"> <h2>Power Electronics, Electrical Machines & System Integrations</h2></div>
              <li>Renewable power generation & clean energy technologies </li>
              <li>Integration of renewables and energy storage systems </li>
              <li>Renewable power generation forecasting </li>
              <li>Power electronics interface and control </li>
              <li>Active distribution networks and AC/DC microgrids</li>
              <li>Demand side energy management & prosumers participation</li>
              <li>Smart Buildings, IoT and Resource Aggregation</li>


            </ul>

          </div>
        </div >
      </div >
      </div>
      <div className='paper-foot'>
        <Footer/>
      </div>

    </>
  )
}

export default Papers