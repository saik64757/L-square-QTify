import React from "react";
import Styles from "../HeroSection/HeroSection.module.css";

function HeroSection() {
  return (
    <>
      <div className={Styles.heroSectionwrapper}>
        <div className={Styles.heroTitle}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <img src={require("../../Assetes/vibrating-headphone.png")} alt="" />
      </div>
    </>
  );
}

export default HeroSection;
