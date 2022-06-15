import React from 'react';

import styles from './Item.module.scss';

interface IProps {
  icon: JSX.Element;
  title: string;
  body: string;
  propStyles?: string;
}

const Item = ({ icon, title, body, propStyles }: IProps) => (
  <div className={styles.wrapper}>
    <div className={propStyles || styles.title_wrapper}>
      <div className={styles.title_icon}>
        {icon}
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.line_body}>
        <div className={styles.line} />
        <p>{body}</p>
      </div>
    </div>
  </div>
);

export default Item;
