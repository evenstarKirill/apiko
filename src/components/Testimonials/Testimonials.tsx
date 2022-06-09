import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { IData, IResult } from "../../interfaces";
import { weddingState } from "../../recoil/atoms";
import Carousel from "../Carousel/Carousel";
import Item from "./Item/Item";

import styles from "./Testimonials.module.scss";

function Testimonials() {
	const [data] = useRecoilState<IData>(weddingState);
	const [page, setPage] = useState(1);
	const slicedArray = data.results.slice(page, page + 3);
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Testimonials</p>
			<div className={styles.list}>
				{data
					? slicedArray.map((data: IResult) => (
							<Item
								key={data.id}
								img={data.urls.small.toString()}
							/>
					  ))
					: null}
			</div>
			{data.results ? (
				<Carousel
					customStyles={styles.carousel}
					customArrowLeftStyles={styles.arrow}
					customArrowRightStyles={styles.arrow_right}
					next={() =>
						setPage((prev) => (prev >= 6 ? prev : prev + 1))
					}
					prev={() => page > 1 && setPage(page - 1)}
					withFullScreen={false}
					page={page}
				/>
			) : null}
		</div>
	);
}

export default Testimonials;
