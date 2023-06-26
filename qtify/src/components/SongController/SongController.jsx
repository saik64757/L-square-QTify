import React from "react";
import styles from "./SongController.module.css";

function SongController() {
  return (
    <>
      <div className={styles.songControllerWrapper}>
        <div className={styles.SongDetails}>
          <img
            src={require("../../Assetes/SongPlayerImage.png")}
            alt=""
            width={"75.85px"}
            height={"82px"}
          />
          <div>
            <p className={styles.SongName}>Song name</p>
            <p className={styles.SongAlbum}>Album name</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SongController;
