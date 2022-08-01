import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import uno from "../../img/uno.png";
import dos from "../../img/dos.png";
import tres from "../../img/tres.png";
import cuatro from "../../img/cuatro.png";
import cinco from "../../img/cinco.png";
import style from "../Slider/slider.module.scss";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log()}
      onSlideChange={() => console.log()}
    >
      <SwiperSlide>
        <img src={uno} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={dos} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tres} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={cuatro} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={cinco} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
