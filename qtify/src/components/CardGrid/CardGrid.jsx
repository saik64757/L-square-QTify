import React from "react";
import Card from "../Card/Card";
import Styles from "./CardGrid.module.css";

function CardGrid({ topAlbums }) {
  return (
    <>
      <div className={Styles.GridWrapper}>
        <div className={Styles.gridHead}>
          <p>Top Albums</p>
          <button>Collapse</button>
        </div>
        <div className={Styles.CardGridWrapper}>
          {topAlbums.map((Album) => (
            <Card Album={Album} key={Album.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardGrid;
