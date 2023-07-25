import React, { useState } from 'react';

const AnnouncementCard = ({ val }) => {
  const dateString = val.date;
  const dateObject = new Date(dateString); // Set the dateObject directly as a Date object

  const formattedDate = dateObject.toLocaleDateString();

  return (
    <>
      <div className="ann-card">
        <div className="anno-title">
          <div>{val.title}</div>
          {val.metaDescription && <div>{val.metaDescription}</div>}
          {val.date && <div>{formattedDate}</div>}
        </div>
      </div>
    </>
  );
};

export default AnnouncementCard;
