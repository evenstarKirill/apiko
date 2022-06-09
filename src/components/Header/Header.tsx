import React from "react";
import Navigation from "../Navigation/Navigation";

import { ReactComponent as ApikoLogo } from "./../../Assets/ApikoLogo.svg";

import styles from "./Header.module.scss";

function Header() {
	return (
		<div className={styles.wrapper}>
			<ApikoLogo />
			<Navigation />
		</div>
	);
}

export default Header;
