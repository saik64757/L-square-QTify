import React from "react";
import styles from "./Card.module.css";

function Card({ data }) {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.cardContent}>
        <img src={data.image} alt="" />
        <p>{data.follows} Follows</p>
      </div>
      <p>{data.title}</p>
    </div>
  );
}

export default Card;
