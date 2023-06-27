import React, { useState } from "react";
import styles from "./SongController.module.css";

function SongController() {
  const [isPlaying, setisPlaying] = useState(true);
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
        <div className={styles.songPlayer}>
          {isPlaying ? (
            <button
              onClick={() => {
                setisPlaying((prevValue) => !prevValue);
              }}
            >
              <img
                src={require("../../Assetes/Frame 3748.png")}
                alt=""
                className={styles.playPauseButton}
              />
            </button>
          ) : (
            <button
              className={styles.playPauseButton}
              onClick={() => {
                setisPlaying((prevValue) => !prevValue);
              }}
            >
              <img src={require("../../Assetes/pauseButton.png")} alt="" />
            </button>
          )}
          <div className={styles.playerTime}>
            <span>0:08</span>
            <img
              src={require("../../Assetes/Group 3745.png")}
              alt=""
              className={styles.audioPlayer}
            />
            <span>3:08</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SongController;
