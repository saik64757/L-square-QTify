import React, { useEffect, useState } from "react";
import styles from "./Sectionsongs.module.css";
import { fetchApitoAlbums } from "../api/api";
import Card from "../Card/Card";

function Sectionsongs() {
  const [topSongs, settopSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let data = await fetchApitoAlbums();
        settopSongs(data);
      } catch (error) {
        return error;
      }
    })();
  });

  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.SectionsongsWrapper}>
        <div>
          <h3>TopAlbums</h3>
        </div>
        <div>
          <h3 style={{ color: "#34c94b", cursor: "pointer" }}>Show All</h3>
        </div>
      </div>
      <div className={styles.cards}>
        {topSongs.map((Album) => (
          <Card Album={Album} key={Album.id} />
        ))}
      </div>
    </div>
  );
}

export default Sectionsongs;
