import React from 'react';

import { ReactComponent as ArrowLeft } from './../../assets/ArrowLeft.svg';
import { ReactComponent as FullScreen } from './../../assets/FullScreen.svg';

import styles from './Carousel.module.scss';

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

const Carousel = ({
  next,
  prev,
  onOpen,
  withFullScreen,
  page,
  customStyles,
  customArrowLeftStyles,
  customArrowRightStyles,
}: IProps) => (
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

export default Carousel;
