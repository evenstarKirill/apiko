import React from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";

import { ReactComponent as YouTube } from "./../../Assets/YouTube.svg";
import { ReactComponent as Inst } from "./../../Assets/Inst.svg";
import { ReactComponent as FaceBook } from "./../../Assets/FaceBook.svg";

import styles from "./HeaderContent.module.scss";

interface IProps {
	scrollTo: () => void;
}

function HeaderContent({ scrollTo }: IProps) {
	return (
		<>
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.content}>
					<h1 className={styles.title}>
						We catch your happy moments
					</h1>
					<p className={styles.body}>
						By choosing our agency you will obtain unforgettable
						memories and amazing experience. We will help you to
						make your dreams come true!
					</p>
					<div className={styles.button_icons}>
						<div onClick={scrollTo}>
							<Button>Contact us</Button>
						</div>
						<YouTube className={styles.icon} />
						<Inst className={styles.icon} />
						<FaceBook className={styles.icon} />
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderContent;
