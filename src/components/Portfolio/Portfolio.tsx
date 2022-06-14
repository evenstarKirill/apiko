import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";
import { request } from "../../api/request";

import { useRecoilState } from "recoil";
import {
	weddingState,
	topic,
	natureState,
	animalsState,
	isLoadMore,
} from "../../recoil/atoms";

import { IData, IResult } from "../../interfaces";

import styles from "./Portfolio.module.scss";

interface IProps {
	id: string;
	customStyles?: string;
}

function Portfolio({ id, customStyles }: IProps) {
	const [weddingData, setWeddingData] = useRecoilState<IData>(weddingState);
	const [natureData, setNatureData] = useRecoilState<IData>(natureState);
	const [animalData, setAnimalData] = useRecoilState<IData>(animalsState);

	const [currentState, setCurrentState] = useState<IData>(weddingData);

	const [topicString] = useRecoilState<string>(topic);

	const [loadMore, setLoadMore] = useRecoilState<boolean>(isLoadMore);

	const [page, setPage] = useState(1);

	useEffect(() => {
		if (topicString === "WEDDING") {
			if (!loadMore && weddingData.results.length > 1) {
				return console.log("no reload");
			} else {
				request({ page: page, limit: 9, topic: topicString }).then(
					(loadedData: IData) => {
						if (loadMore) {
							setWeddingData((prevState) => ({
								...prevState,
								results: [
									...(prevState?.results as IResult[]),
									...loadedData.results,
								],
							}));
						} else if (
							!loadMore &&
							weddingData.results.length < 1
						) {
							setWeddingData(loadedData);
						}
					}
				);
			}
		}
		if (topicString === "NATURE") {
			if (!loadMore && natureData.results.length > 1) {
				return console.log("no reload");
			} else {
				request({ page: page, limit: 9, topic: topicString }).then(
					(loadedData: IData) => {
						if (loadMore) {
							setNatureData((prevState) => ({
								...prevState,
								results: [
									...(prevState?.results as IResult[]),
									...loadedData.results,
								],
							}));
						} else if (!loadMore && natureData.results.length < 1) {
							setNatureData(loadedData);
						}
					}
				);
			}
		}
		if (topicString === "ANIMAL") {
			if (!loadMore && animalData.results.length > 1) {
				return console.log("no reload");
			} else {
				request({ page: page, limit: 9, topic: topicString }).then(
					(loadedData: IData) => {
						if (loadMore) {
							setAnimalData((prevState) => ({
								...prevState,
								results: [
									...(prevState?.results as IResult[]),
									...loadedData.results,
								],
							}));
						} else if (!loadMore && animalData.results.length < 1) {
							setAnimalData(loadedData);
						}
					}
				);
			}
		}
	}, [page, isLoadMore, topicString]);

	const ImagesList = () => {
		if (topicString === "WEDDING") {
			setCurrentState(weddingData);
		} else if (topicString === "NATURE") {
			setCurrentState(natureData);
		} else if (topicString === "ANIMAL") {
			setCurrentState(animalData);
		}
		const category: JSX.Element = (
			<>
				{currentState?.results.map((data: IResult) => (
					<img
						loading='lazy'
						className={styles.item}
						key={data.id}
						src={data.urls.small.toString()}
						alt='img'
					/>
				))}
			</>
		);
		return category;
	};

	return (
		<div id={id} className={customStyles}>
			<div className={styles.wrapper}>
				<h1 className={styles.tittle}>Portfolio</h1>
				<NavBar />
				<div className={styles.container}>
					<ImagesList />
				</div>
				<div
					onClick={() => {
						setPage(page + 1);
						setLoadMore(true);
					}}>
					<Button propStyles={styles.button}>Show more</Button>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
