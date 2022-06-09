import React from "react";
import { ReactComponent as Quotes } from "./../../../Assets/Quotes.svg";
import Avatars from "./../../../Assets/Avatars.png";
// import Ava2 from "./../../../Assets/Ava2.png";

import styles from "./Item.module.scss";

interface IProps {
	img: string;
}

function Item({ img }: IProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image_container}>
				<img src={img} alt='img' />
			</div>
			<div className={styles.content}>
				<div className={styles.avatar_quotes}>
					<Quotes className={styles.quote} />
					<img alt='img' src={Avatars} className={styles.avatars} />
				</div>
				<p className={styles.name}>Tania + Mike</p>
				<p className={styles.date}>23/02/2019</p>
				<p className={styles.body}>
					We didn't expect such amazing resuls. We found Apiko by our
					friend’s recomendation and are completely satisfied now.
				</p>
			</div>
		</div>
	);
}

export default Item;
