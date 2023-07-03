import React from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar({ searchData }) {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <Logo />
      </Link>

      <Searchbar searchData={searchData} />
      <Button />
    </div>
  );
}

export default Navbar;
