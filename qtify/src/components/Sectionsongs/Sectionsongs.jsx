import React, { useEffect, useState } from "react";
import styles from "./Sectionsongs.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Sectionsongs(props) {
  const [isCollapsed, setisCollapsed] = useState(false);

  return (
    <>
      <div className={styles.SectionWrapper}>
        <div className={styles.SectionsongsWrapper}>
          <div>
            <h3>{props.title}</h3>
          </div>
          <div onClick={() => setisCollapsed((PrevState) => !PrevState)}>
            <h3 style={{ color: "#34c94b", cursor: "pointer" }}>
              {isCollapsed ? "Collapse" : "Show All"}
            </h3>
          </div>
        </div>
        {isCollapsed ? (
          <div className={styles.cards}>
            {props.data.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </div>
        ) : (
          <Carousel
            data={props.data}
            renderCards={(data) => <Card data={data} key={data.id} />}
          />
        )}
      </div>
    </>
  );
}

export default Sectionsongs;
