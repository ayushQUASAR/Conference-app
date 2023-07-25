import React, { useRef, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/mygallery.css";

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
//   const data = [
//     {
//       id: 1,
//       imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 2,
//       imgUrl:
//         "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 3,
//       imgUrl:
//         "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 5,
//       imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//     {
//       id: 6,
//       imgUrl:
//         "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
//       desc: "Some beautiful roads cannot be discovered without getting loss.",
//       name: "EXPLORE NATURE",
//     },
//   ];
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
            <div className="content">
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
        </button>
        <button id="next" onClick={handleClickNext}>
          {/* <FontAwesomeIcon icon={faAngleRight} /> */}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Mygallery;
