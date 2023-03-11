import React, { useEffect, useState } from "react";
import styles from "./Sectionsongs.module.css";
import { fetchApitoAlbums } from "../api/api";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Sectionsongs() {
  const [topSongs, settopSongs] = useState([]);
  const [isCollapsed, setisCollapsed] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let data = await fetchApitoAlbums();
        settopSongs(data);
      } catch (error) {
        return error;
      }
    })();
  }, []);

  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.SectionsongsWrapper}>
        <div>
          <h3>TopAlbums</h3>
        </div>
        <div onClick={() => setisCollapsed(!isCollapsed)}>
          {isCollapsed ? (
            <h3 style={{ color: "#34c94b", cursor: "pointer" }}>Show All</h3>
          ) : (
            <h3 style={{ color: "#34c94b", cursor: "pointer" }}>Collapse</h3>
          )}
        </div>
      </div>
      {isCollapsed ? (
        <div className={styles.cards}>
          {topSongs.map((Album) => (
            <Card Album={Album} key={Album.id} />
          ))}
        </div>
      ) : (
        <Carousel />
      )}
    </div>
  );
}

export default Sectionsongs;
