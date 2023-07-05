import React from 'react'
import '../../styles/home.css'
import Arr from './Agenda_dt'
import Reveal from './Reveal'
import Polygon from '../../Images/Polygon 6.png'
const Agenda = () => {
  return (
    <>
      
      <div className='agenda-box'>
      <div className="agenda-title-box">
        Agenda
      </div>

        {
          Arr.map((val, indx) => {
            return <>
              <Reveal>
                <div className={`section `}>

                  <div key={indx} className='polygon'>
                    <img src={Polygon} alt="" />
                  </div>


                  <div className="box">
                    <h2 className="time">{val.time}</h2>
                    <div className="content">{val.content}</div>
                    {(val.speakers) ? <div className="speakers">{val.speakers}</div> : ''}
                  </div>
                </div>
              </Reveal>
            </>
          })
        }

      </div>
    </>
  )
}

export default Agenda