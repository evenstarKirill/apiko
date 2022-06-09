import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { IData } from "../../interfaces";
import { weddingState } from "../../recoil/atoms";
import Carousel from "../Carousel/Carousel";
import Portal from "../Portal/Portal";

import styles from "./HeaderImage.module.scss";

function HeaderImage() {
	const [data, setData] = useRecoilState<IData>(weddingState);

	interface IStateTypes {
		showModal: boolean;
	}

	const [modalState, setModalState] = useState<IStateTypes>({
		showModal: false,
	});

	const [page, setPage] = useState(1);

	const handleToggleModal = () => {
		const { showModal } = modalState;

		setModalState({
			showModal: !showModal,
		});
	};

	return (
		<>
			{data.results[page] && (
				<div className={styles.wrapper}>
					<img
						className={styles.item_fullscreen}
						key={data.results[page].id}
						src={data.results[page].urls.regular}
						alt='img'></img>
					<div className={styles.carousel}>
						<Carousel
							next={() =>
								setPage((prev) => (prev >= 6 ? prev : prev + 1))
							}
							prev={() => page > 1 && setPage(page - 1)}
							withFullScreen={true}
							page={page}
							onOpen={handleToggleModal}
						/>
					</div>
					<>
						{modalState.showModal && (
							<Portal
								onClose={handleToggleModal}
								show={modalState.showModal}>
								<img
									className={styles.item_fullscreen}
									key={data.results[page].id}
									src={data.results[
										page
									].urls.full?.toString()}
									alt='img'
								/>
								<Carousel
									next={() =>
										setPage((prev) =>
											prev >= 6 ? prev : prev + 1
										)
									}
									prev={() => page > 1 && setPage(page - 1)}
									withFullScreen={true}
									page={page}
									onOpen={handleToggleModal}
								/>
							</Portal>
						)}
					</>
				</div>
			)}
		</>
	);
}

export default HeaderImage;
