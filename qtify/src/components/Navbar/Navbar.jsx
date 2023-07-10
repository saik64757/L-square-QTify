import React from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ searchData, children }) {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Searchbar searchData={searchData} />
      {children}
    </div>
  );
}

export default Navbar;
