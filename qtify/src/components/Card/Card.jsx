import React from "react";
import styles from "./Card.module.css";

function Card({ data }) {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.cardContent}>
        <img src={data.image} alt="" />
        {data.follows ? (
          <p>{data.follows} Follows</p>
        ) : (
          <p>{data.likes} Likes</p>
        )}
      </div>
      <p>{data.title}</p>
    </div>
  );
}

export default Card;
