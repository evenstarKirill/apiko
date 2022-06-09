import React from "react";

import { ReactComponent as Ellipse } from "./../../Assets/Ellipse.svg";

import styles from "./Navigation.module.scss";

interface IProps {
	isWhite?: boolean;
}

function Navigation({ isWhite }: IProps) {
	const list: string[] = [
		"Home",
		"About",
		"What We Offer",
		"Portfolio",
		"Testimonials",
	];
	return (
		<div className={isWhite ? styles.list_white : styles.list}>
			{list.map((item) => (
				<div className={styles.item_ellipse}>
					<div className={styles.item}>{item}</div>
					<Ellipse className={styles.ellipse} />
				</div>
			))}
		</div>
	);
}

export default Navigation;
