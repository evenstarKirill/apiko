import React from "react";

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
				<div
					onClick={() =>
						document?.getElementById(item)?.scrollIntoView()
					}
					className={styles.item}>
					{item}
				</div>
			))}
		</div>
	);
}

export default Navigation;
