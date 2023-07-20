import React from 'react'

const AnnouncementCard = ({val}) => {
  return (

    <>
    
    <div className="ann-card">
        {console.log('val',val)}
        <div className="anno-title">
            <div >{val.title}</div>
            <div>{val.metaDescription}</div>
        </div>
    </div>
    </>
  )
}

export default AnnouncementCard