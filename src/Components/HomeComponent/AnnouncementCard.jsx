import React from 'react'

const AnnouncementCard = ({val}) => {
  return (

    <>
    
    <div className="ann-card">
        {console.log('val',val)}
        <div className="anno-title">
            <div >{val.title}</div>
           {val.metaDescription&& <div>{val.metaDescription}</div>}
           {val.date && <div>{val.date}</div>}
        </div>
    </div>
    </>
  )
}

export default AnnouncementCard