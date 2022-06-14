import React from "react";

import { useRecoilState } from "recoil";
import { IData } from "../../interfaces";
import { weddingState } from "../../recoil/atoms";

import { ReactComponent as ArrowLeft } from "./../../Assets/ArrowLeft.svg";
import { ReactComponent as FullScreen } from "./../../Assets/FullScreen.svg";

import styles from "./Carousel.module.scss";

interface IProps {
	next: () => void;
	prev: () => void;
	onOpen?: () => void;
	withFullScreen: boolean;
	page: number;
	customStyles?: string;
	customArrowLeftStyles?: string;
	customArrowRightStyles?: string;
}

function Carousel({
	next,
	prev,
	onOpen,
	withFullScreen,
	page,
	customStyles,
	customArrowLeftStyles,
	customArrowRightStyles,
}: IProps) {
	return (
		<>
			<div className={customStyles || styles.carousel}>
				<ArrowLeft
					className={customArrowLeftStyles || styles.arrow}
					onClick={prev}
				/>
				{page}/6
				<ArrowLeft
					className={customArrowRightStyles || styles.arrow_right}
					onClick={next}
				/>
				{withFullScreen ? (
					<FullScreen onClick={onOpen} className={styles.full} />
				) : null}
			</div>
		</>
	);
}

export default Carousel;
