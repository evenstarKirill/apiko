import React from "react";

import Item from "./Item/Item";

import { ReactComponent as Camera } from "./../../Assets/Camera.svg";
import { ReactComponent as Camera2 } from "./../../Assets/Camera2.svg";
import { ReactComponent as Circle } from "./../../Assets/Circle.svg";
import { ReactComponent as Face } from "./../../Assets/Face.svg";
import { ReactComponent as TapHand } from "./../../Assets/TapHand.svg";

import styles from "./WhatWeOffer.module.scss";
import TravelWeddingPhotography from "./TravelWeddingPhotography/TravelWeddingPhotography";
import Button from "../Button/Button";

interface IItemsList {
	title: string;
	body: string;
	icon: JSX.Element;
}

interface IProps {
	scrollTo: () => void;
	// refTo: null | HTMLDivElement;
}

function WhatWeOffer({ scrollTo }: IProps) {
	const itemsList: Array<IItemsList> = [
		{
			title: "Modern Photo and Video",
			body: "We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.",
			icon: <Camera />,
		},
		{
			title: "Modern Photo and Video",
			body: "We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.",
			icon: <Camera />,
		},
		{
			title: "Modern Photo and Video",
			body: "We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.",
			icon: <Camera />,
		},
		{
			title: "Modern Photo and Video",
			body: "We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.",
			icon: <Camera />,
		},
	];
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>What We Offer</h1>
			<div className={styles.items_list}>
				{itemsList.map((item) => (
					<Item
						title={item.title}
						body={item.body}
						icon={item.icon}
					/>
				))}
			</div>
			<TravelWeddingPhotography />
			<div onClick={scrollTo} className={styles.contact_us_button}>
				<Button>Contact us</Button>
			</div>
		</div>
	);
}

export default WhatWeOffer;
