import React from 'react'
import '../styles/loading.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import nit from '../Images/Untitled design.png'
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const Loading = () => {
  return (
    <>
    <div className="load-box">
  <div className="loader">
  {/* <div className="rock"><RocketLaunchIcon className='rocket-icon'/> */}
  {/* <div >
  <img src={nit} style={{width:'100px'}} alt="" className="rocket-icon" /></div> */}
  <div class="custom-loader"></div>
    {/* <FilterDramaIcon style={{'--i':0}}className='cloud'/>
    <FilterDramaIcon style={{'--i':1}}className='cloud'/>
    <FilterDramaIcon style={{'--i':2}}className='cloud'/>
    <FilterDramaIcon style={{'--i':3}}className='cloud'/> */}
      </div>
    <span><i></i>
    
    </span></div> 
    
 
    {/* </div> */}

    </>
  )
}

export default Loading