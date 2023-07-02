import React from 'react'
import { useEffect, useState } from "react";
import "../../styles/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import '../../styles/Galleryslider.css'





const SLider = () => {
    const [slideper, setslideper] = useState(2)
    useEffect(() => {
        setslideper(window.innerWidth < 500 ? 1 : 2)
    }, [])
    return (
        <>  <div className="gal-slider">
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
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>

                </Swiper>
            </div>
        </div></>
    )
}

export default SLider