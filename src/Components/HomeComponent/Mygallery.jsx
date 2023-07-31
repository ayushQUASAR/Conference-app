import React, { useRef, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../../styles/mygallery.css";
import '../../styles/Galleryslider.css'

const Mygallery = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setValues] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      fetch('  https://pixelperfectnitj.onrender.com/images/647f315f62cdb3a26174fc38', {
        method: 'GET',
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch speakers.');
          }
          return res.json();
        })
        .then((data) => {
          setValues(data);
         
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchData();
  }, []);

  const handleClickNext = () => {
    // The same function to move to the next slide remains unchanged
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleClickPrev = () => {
    // The same function to move to the previous slide remains unchanged
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  // Automatic sliding effect
  useEffect(() => {
    let interval;
    const startAutoSlide = () => {
      interval = setInterval(handleClickNext, 5000);
    };

    const stopAutoSlide = () => {
      clearInterval(interval);
    };

    // Start auto sliding when the component mounts
    startAutoSlide();

    // Stop auto sliding when the component unmounts
    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <div className="gal-slider">
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgLink})` }}
          >
            <div className="gcontent">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
          <ArrowBackIosNewIcon  className="gal-icon"/>
        </button>
        <button id="next" onClick={handleClickNext}>
          {/* <FontAwesomeIcon icon={faAngleRight} /> */}
          <ArrowForwardIosIcon className="gal-icon"/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Mygallery;
