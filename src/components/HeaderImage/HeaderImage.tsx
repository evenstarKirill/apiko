import React, { LegacyRef, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { IData } from '../../interfaces';
import { weddingState } from '../../recoil/atoms';
import Carousel from '../Carousel/Carousel';
import Portal from '../Portal/Portal';

import { Audio } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './HeaderImage.module.scss';

interface IStateTypes {
  showModal: boolean;
}

function HeaderImage(className: any) {
  const [data] = useRecoilState<IData>(weddingState);

  const [modalState, setModalState] = useState<IStateTypes>({
    showModal: false,
  });

  const [page, setPage] = useState(1);
  const [onLoad, setOnLoad] = useState(false);

  const handleToggleModal = () => {
    const { showModal } = modalState;
    setModalState({
      showModal: !showModal,
    });
  };

  const image = useRef<HTMLImageElement>();

  const handleOnLoad = () => {
    if (image.current && image.current.complete) {
      setOnLoad(false);
    } else if (!image?.current?.complete) {
      console.log('else block');
      setOnLoad(true);
    }
  };

  return (
    <div className={className}>
      {data.results[page] && (
        <div className={styles.wrapper}>
          <img
            className={styles.item_fullscreen}
            key={data.results[page].id}
            src={data.results[page].urls.regular}
            alt="img"
          ></img>
          <div className={styles.carousel}>
            <Carousel
              next={() => setPage((prev) => (prev >= 6 ? prev : prev + 1))}
              prev={() => page > 1 && setPage(page - 1)}
              withFullScreen={true}
              page={page}
              onOpen={handleToggleModal}
            />
          </div>
          <>
            {modalState.showModal && (
              <Portal onClose={handleToggleModal} show={modalState.showModal}>
                {onLoad ? (
                  <Audio
                    height="100"
                    width="100"
                    color="grey"
                    ariaLabel="loading"
                  />
                ) : (
                  <img
                    ref={image as LegacyRef<HTMLImageElement> | undefined}
                    className={styles.item_fullscreen}
                    key={data.results[page].id}
                    src={data.results[page].urls.full?.toString()}
                    alt="img"
                    onLoad={handleOnLoad}
                  />
                )}

                <Carousel
                  next={() => setPage((prev) => (prev >= 6 ? prev : prev + 1))}
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
    </div>
  );
}

export default HeaderImage;
