import React from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <>
      <div className={styles.Serchwrap}>
        <input
          type="text"
          placeholder="Search a song of your choice"
          className={styles.serchinput}
        />
        <button className={styles.serchButton}>
          <img src={require("../../Assetes/Searchicon.png")} alt="" />
        </button>
      </div>
    </>
  );
}

export default Searchbar;
