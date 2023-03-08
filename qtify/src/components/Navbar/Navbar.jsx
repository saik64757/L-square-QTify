import React from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Searchbar />
      <Button />
    </div>
  );
}

export default Navbar;
