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

function Portfolio() {
	const [weddingData, setWeddingData] = useRecoilState<IData>(weddingState);
	const [natureData, setNatureData] = useRecoilState<IData>(natureState);
	const [animalData, setAnimalData] = useRecoilState<IData>(animalsState);

	const [topicString, setTopicString] = useRecoilState<string>(topic);

	const [loadMore, setLoadMore] = useRecoilState<boolean>(isLoadMore);

	const [page, setPage] = useState(1);

	useEffect(() => {
		if (topicString === "WEDDING") {
			if (loadMore === false && weddingData.results.length > 1) {
				return console.log("no reload");
			} else {
				request({ page: page, limit: 9, topic: topicString }).then(
					(loadedData: IData) => {
						if (loadMore === true) {
							setWeddingData((prevState) => ({
								...prevState,
								results: [
									...(prevState?.results as IResult[]),
									...loadedData.results,
								],
							}));
						} else if (
							loadMore === false &&
							weddingData.results.length < 1
						) {
							setWeddingData(loadedData);
						}
					}
				);
			}
		}
		if (topicString === "NATURE") {
			if (loadMore === false && natureData.results.length > 1) {
				return console.log("no reload");
			} else {
				request({ page: page, limit: 9, topic: topicString }).then(
					(loadedData: IData) => {
						if (loadMore === true) {
							setNatureData((prevState) => ({
								...prevState,
								results: [
									...(prevState?.results as IResult[]),
									...loadedData.results,
								],
							}));
						} else if (
							loadMore === false &&
							natureData.results.length < 1
						) {
							setNatureData(loadedData);
						}
					}
				);
			}
		}
		if (topicString === "ANIMAL") {
			if (loadMore === false && animalData.results.length > 1) {
				return console.log("no reload");
			} else {
				request({ page: page, limit: 9, topic: topicString }).then(
					(loadedData: IData) => {
						if (loadMore === true) {
							setAnimalData((prevState) => ({
								...prevState,
								results: [
									...(prevState?.results as IResult[]),
									...loadedData.results,
								],
							}));
						} else if (
							loadMore === false &&
							animalData.results.length < 1
						) {
							setAnimalData(loadedData);
						}
					}
				);
			}
		}
	}, [page, isLoadMore, topicString]);

	let category: JSX.Element;

	const ImagesList = () => {
		if (topicString === "WEDDING") {
			category = (
				<>
					{weddingData.results.map((data: IResult) => (
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
		}
		if (topicString === "NATURE") {
			category = (
				<>
					{natureData.results.map((data: IResult) => (
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
		}
		if (topicString === "ANIMAL") {
			category = (
				<>
					{animalData.results.map((data: IResult) => (
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
		}
		return category;
	};

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.tittle}>Portfolio</h1>
			<NavBar />
			<div className={styles.container}>
				<ImagesList />
			</div>
			<div onClick={() => (setPage(page + 1), setLoadMore(true))}>
				<Button propStyles={styles.button}>Show more</Button>
			</div>
		</div>
	);
}

export default Portfolio;
