import React from "react";
import { useRecoilState } from "recoil";
import { isLoadMore, topic } from "../../recoil/atoms";

import styles from "./NavBar.module.scss";

function NavBar() {
	const [topicString, setTopicString] = useRecoilState<string>(topic);

	const [, setLoadMore] = useRecoilState<boolean>(isLoadMore);

	const handleCategory = (category: string) => {
		setLoadMore(false);
		setTopicString(category);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.list}>
				<a
					onClick={() => handleCategory("WEDDING")}
					className={
						topicString === "WEDDING"
							? styles.item_clicked
							: styles.item
					}>
					WEDDINGS
				</a>
				<a
					onClick={() => handleCategory("NATURE")}
					className={
						topicString === "NATURE"
							? styles.item_clicked
							: styles.item
					}>
					NATURE
				</a>
				<a
					onClick={() => handleCategory("ANIMAL")}
					className={
						topicString === "ANIMAL"
							? styles.item_clicked
							: styles.item
					}>
					ANIMALS
				</a>
			</div>
		</div>
	);
}

export default NavBar;
