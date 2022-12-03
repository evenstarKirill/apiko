import React from 'react';
import { ReactComponent as Quotes } from '../../../assets/Quotes.svg';
import Avatars from '../../../assets/Avatars.png';

import styles from './Item.module.scss';

interface IProps {
  img: string;
}

const Item = ({ img }: IProps) => (
  <div className={styles.wrapper}>
    <div className={styles.image_container}>
      <img src={img} alt="img" />
    </div>
    <div className={styles.content}>
      <div className={styles.avatar_quotes}>
        <Quotes className={styles.quote} />
        <img alt="img" src={Avatars} className={styles.avatars} />
      </div>
      <p className={styles.name}>Tania + Mike</p>
      <p className={styles.date}>23/02/2019</p>
      <p className={styles.body}>
        We didn't expect such amazing results. We found Apiko by our friend’s
        recommendation and are completely satisfied now.
      </p>
    </div>
  </div>
);

export default Item;
