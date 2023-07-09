import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/HomeComponent/Footer'
import '../styles/Confpaperaward.css'

const Bestpaper = () => {
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
          throw new Error('Failed to fetch Details.')
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
        if (!res.ok){
          throw new Error('Failed to fetch Details.')
        }
          return res.json()
      })
      .then(data => {
        setSpecificconf(data)
      })
      .catch(err => {
        setSError(err.message)
      })
  }

  let paper_info = null;
  if (serror) {
    paper_info = <div className="error">Error :{serror}</div>
  }
  else {
    paper_info = specificconf;
  }
  let section = null;
  if (!error) {
    section = <select name='conftype' onChange={handleoption} value={paper_type}>
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
    section = <div className="error">Error :{serror}</div>
  }



  return (
    <>
      <Nav />
      <div className='paper-input'>
        {section}

        <div className='conf-award-details'>
          <div className="conf-box">
            <div className="title">
              {paper_info.title}
            </div>
            <div>{paper_info.description}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bestpaper
