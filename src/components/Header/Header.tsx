import React from "react";
import Navigation from "../Navigation/Navigation";

import { ReactComponent as ApikoLogo } from "./../../assets/ApikoLogo.svg";

import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.wrapper}>
    <ApikoLogo />
    <Navigation />
  </div>
);

export default Header;
