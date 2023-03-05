import React from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <>
      <div className={styles.Serchbar}>
        <label htmlFor="header-search">
          {/* <span className="visually-hidden">Search songs posts</span> */}
        </label>
        <input
          className={styles.serchinput}
          type="text"
          id="header-search"
          placeholder="Search a song of your choice"
          name="s"
        />
        <button className={styles.serchButton}>Serch</button>
      </div>
    </>
  );
}

export default Searchbar;

// className={styles.serchButton}
