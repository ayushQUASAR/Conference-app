import React from 'react'
import '../styles/loading.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const Loading = () => {
  return (
    <>
    <div className="load-box">
  <div className="loader">
  <div className="rock"><RocketLaunchIcon className='rocket-icon'/>
    <FilterDramaIcon style={{'--i':0}}className='cloud'/>
    <FilterDramaIcon style={{'--i':1}}className='cloud'/>
    <FilterDramaIcon style={{'--i':2}}className='cloud'/>
    <FilterDramaIcon style={{'--i':3}}className='cloud'/>
      </div>
    <span><i></i></span></div> 
    
 
    </div>

    </>
  )
}

export default Loading