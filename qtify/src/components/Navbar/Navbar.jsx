import React from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Searchbar />
      <button className={styles.feedBackButton}>Give Feedback</button>
    </div>
  );
}

export default Navbar;
