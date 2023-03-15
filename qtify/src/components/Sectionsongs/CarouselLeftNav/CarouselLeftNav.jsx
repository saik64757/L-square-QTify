import React from "react";
import { useSwiper } from "swiper/react";

function CarouselLeftNav() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
      style={{
        position: "absolute",
        top: "40%",
        left: 0,
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img
        src={require("../../../Assetes/leftArrow.png")}
        alt=""
        width={"32px"}
        height={"32px"}
      />
    </div>
  );
}

export default CarouselLeftNav;
