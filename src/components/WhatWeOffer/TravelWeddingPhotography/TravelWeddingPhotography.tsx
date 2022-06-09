import React from "react";

import { ReactComponent as Face } from "./../../../Assets/Face.svg";

import styles from "./TravelWeddingPhotography.module.scss";

function TravelWeddingPhotography() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content_wrapper}>
				<div className={styles.left_border}>
					<div className={styles.line} />
					<Face className={styles.face} />
					<div className={styles.line} />
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>Travel wedding photography</h3>
					<p className={styles.body}>
						We believe that your wedding is one of the most
						important days in your life, that's why our company will
						do our best to make it unforgettable and peculiar. Our
						team can organize an extraordinary ceremony for you. If
						case you do not know exactly what you want - why don't
						you consider choosing to make your wedding ceremony
						outside. You can choose any place you like - from the
						park in your city to the bank of the seaside.
					</p>
				</div>
			</div>
			<div className={styles.green_line} />
		</div>
	);
}

export default TravelWeddingPhotography;
