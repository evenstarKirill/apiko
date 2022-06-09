import React from "react";
import Navigation from "../Navigation/Navigation";

import { ReactComponent as YouTube } from "./../../Assets/YouTube.svg";
import { ReactComponent as Inst } from "./../../Assets/InstagramFooter.svg";
import { ReactComponent as FaceBook } from "./../../Assets/FaceBook.svg";
import { ReactComponent as ApikoLogo } from "./../../Assets/ApikoLogoWhite.svg";

import styles from "./Footer.module.scss";

function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo_nav}>
				<ApikoLogo />
				<Navigation isWhite={true} />
			</div>
			<div className={styles.bottom}>
				<p>2019 © Apiko. All rights reserved.</p>
				<div className={styles.socials}>
					<YouTube className={styles.icon} />
					<Inst className={styles.icon} />
					<FaceBook className={styles.icon} />
				</div>
			</div>
		</div>
	);
}

export default Footer;
