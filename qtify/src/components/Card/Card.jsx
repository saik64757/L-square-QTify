import React from "react";
import styles from "./Card.module.css";

function Card({ Album }) {
  console.log(Album);
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.cardContent}>
        <img src={Album.image} alt="" />
        <p>{Album.follows} Follows</p>
      </div>
      <p>{Album.title}</p>
    </div>
  );
}

export default Card;
