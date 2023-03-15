import React from "react";
import { register } from "swiper/element/bundle";
import styles from "./carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselLeftNav from "../Sectionsongs/CarouselLeftNav/CarouselLeftNav";
import CarouselRightNav from "../Sectionsongs/CarouselRightNav/CarouselRightNav";

function Carousel({ data, renderCards }) {
  return (
    <Swiper
      style={{ marginTop: "18px", marginBottom: "32px" }}
      spaceBetween={40}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <CarouselLeftNav />
      {data.map((ele) => (
        <SwiperSlide key={ele.id}>{renderCards(ele)}</SwiperSlide>
      ))}
      <CarouselRightNav />
    </Swiper>
  );
}

export default Carousel;
