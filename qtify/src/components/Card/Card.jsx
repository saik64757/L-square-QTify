import React from "react";
import styles from "./Card.module.css";

function Card() {
  return (
    <>
      <div className={styles.CardWrapper}>
        <div className={styles.cardContent}>
          <img src={require("../../Assetes/Cardimage.png")} alt="" />
          <p>100M Follows</p>
        </div>
        <p>New BollyWood</p>
      </div>
    </>
  );
}

export default Card;
