import React from 'react';
import dayjs from 'dayjs';

import Navigation from '../Navigation/Navigation';

import { ReactComponent as YouTube } from './../../assets/YouTube.svg';
import { ReactComponent as Inst } from './../../assets/InstagramFooter.svg';
import { ReactComponent as FaceBook } from './../../assets/FaceBook.svg';
import { ReactComponent as ApikoLogo } from './../../assets/ApikoLogoWhite.svg';

import styles from './Footer.module.scss';

interface IProps {
  className?: string;
}

const Footer = ({ className }: IProps) => {
  const year = dayjs().year().toString();
  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <div className={styles.logo_nav}>
          <ApikoLogo />
          <Navigation isWhite={true} />
        </div>
        <div className={styles.bottom}>
          <p>{year} © Apiko. All rights reserved.</p>
          <div className={styles.socials}>
            <YouTube className={styles.icon} />
            <Inst className={styles.icon} />
            <FaceBook className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
