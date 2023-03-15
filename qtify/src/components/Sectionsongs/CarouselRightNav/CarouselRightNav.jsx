import React from "react";
import { useSwiper } from "swiper/react";

function CarouselRightNav() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slideNext();
      }}
      style={{
        position: "absolute",
        top: "40%",
        right: "0",
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img
        src={require("../../../Assetes/RightArrow.png")}
        alt=""
        width={"32px"}
        height={"32px"}
      />
    </div>
  );
}

export default CarouselRightNav;
