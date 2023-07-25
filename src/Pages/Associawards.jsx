import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/HomeComponent/Footer'
import '../styles/Confpaperaward.css'

const Associawards = () => {
  const [paper_type, setPaper_type] = useState('')
  const [values, setValues] = useState([])
  const [specificconf, setSpecificconf] = useState('')
  const [error, setError] = useState(null)
  const [serror, setSError] = useState(null)
  useEffect(() => {
    fetch('https://conference.cyclic.app/conf', {
      method: 'GET',
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch Details of conference.')
        }
        return res.json()
      })
      .then(data => {
        setValues(data)
      })
      .catch(err => {
        setError(err.message)
      })
  
  }, [])

  const handleoption = e => {
    setPaper_type(e.target.value)

    fetch(`https://conference.cyclic.app/awards/conference/${paper_type}`, {
      method: 'GET',
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch Details of awards.')
        }
        return res.json()
      })
      .then(data => {
        setSpecificconf(data)
      })
      .catch(serr => {
        setSError(serr.message)
      })
  }
  console.log('hiii', specificconf)

  let paper_info = null;
  let section = null;
  if (!error) {
    section = <select name='conftype' onChange={handleoption} value={paper_type}>
       <option value='Select Conferences'>
            Select Conferences
          </option>
      {values.map((val, indx) => {
        return (
          <option key={indx} value={val.id}>
            {val.name}
          </option>
        )
      })}
    </select>
  }
  else {
    section = <div className="error">Error :{error}
      <div className='error-icon'><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/broken-robot.png" alt="broken-robot" /></div></div>
  }


  if (serror) {
    paper_info = <div className="error">Error :{serror}
      <div className='error-icon'><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/broken-robot.png" alt="broken-robot" /></div>
    </div>
  }
  else {

    if (Array.isArray(specificconf)) {
      // specificconf is an array
      paper_info = specificconf.map((e, indx) => {
        return <>
          <div key={indx} className="award-card">
            <div className="title">
              <h1> {e.title1}</h1>
            </div>
            <div className="sub-title">{e.title2}</div>
            <div>
              <h2>{e.description}</h2></div>

          </div>
        </>
      });
    }
    else {
      // specificconf is not an array
      console.log('specificconf is not an array');
    }

  }




  return (
    <>
      <Nav />
      <div className='paper-input'>
        {section}

        <div className='conf-award-details'>
          <div className="conf-box">
            {paper_info}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Associawards;
