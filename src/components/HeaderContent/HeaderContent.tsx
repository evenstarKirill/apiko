import React from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';

import { ReactComponent as YouTube } from './../../assets/YouTube.svg';
import { ReactComponent as Inst } from './../../assets/Inst.svg';
import { ReactComponent as FaceBook } from './../../assets/FaceBook.svg';

import styles from './HeaderContent.module.scss';

interface IProps {
  id: string;
  className?: string;
}

const HeaderContent = ({ id, className }: IProps) => (
  <div id={id} className={className}>
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>We catch your happy moments</h1>
        <p className={styles.body}>
          By choosing our agency you will obtain unforgettable memories and
          amazing experience. We will help you to make your dreams come true!
        </p>
        <div className={styles.button_icons}>
          <div>
            <Button
              onClick={() =>
                document?.getElementById('Contact us')?.scrollIntoView()
              }
            >
              Contact us
            </Button>
          </div>
          <YouTube className={styles.icon} />
          <Inst className={styles.icon} />
          <FaceBook className={styles.icon} />
        </div>
      </div>
    </div>
  </div>
);

export default HeaderContent;
