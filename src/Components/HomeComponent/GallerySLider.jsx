import React from 'react'
import { useEffect, useState } from "react";
import "../../styles/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import '../../styles/Galleryslider.css'
import g1 from '../../Images/Gallery/g1.jpg'
import g2 from '../../Images/Gallery/g2.jpg'
import g3 from '../../Images/Gallery/g3.jpg'
import g4 from '../../Images/Gallery/g4.jpg'




const SLider = () => {
    const [slideper, setslideper] = useState(2)
    useEffect(() => {
        setslideper(window.innerWidth < 500 ? 1 : 2)
    }, [])
    return (
        <>  <div className="gal-slider">
                     <h2>Conference Gallery</h2>
            <div className="innergal">
                <Swiper
                    slidesPerView={slideper}

                    spaceBetween={30}
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000 }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper-card"
                >
                    <SwiperSlide>
                        <img className='gimg' src={g1} alt="img" />

                    </SwiperSlide>  <SwiperSlide>
                        <img className='gimg' src={g2} alt="img" />

                    </SwiperSlide>  <SwiperSlide>
                        <img className='gimg'src={g3} alt="img" />

                    </SwiperSlide>  <SwiperSlide>
                        <img className='gimg'src={g4} alt="img" />

                    </SwiperSlide>


                </Swiper>
            </div>
        </div></>
    )
}

export default SLider