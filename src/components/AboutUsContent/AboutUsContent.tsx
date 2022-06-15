import React from 'react';
import Button from '../Button/Button';

import styles from './AboutUsContent.module.scss';

const AboutUsContent = () => (
  <div className={styles.wrapper}>
    <div className={styles.wedding}>WEDDING PHOTO VIDEO</div>
    <h1 className={styles.title}>Why do we differ from others?</h1>
    <p>
      On your wedding day, the photographer and cinematographer can become
      interlopers to your day. We do things differently. Your relationship and
      your wedding day are entirely unique. We are there to blend so
      seamlessly in to the defining moments that you are always at ease,
      always natural. The result is that we capture the essence which makes
      your special day what it is in a story-telling style. We feel honoured
      to fulfil this role. We care deeply that we preserve a true and
      inspiring portrayal of your day.
    </p>
    <Button propStyles={styles.button}>Check our blog</Button>
  </div>
);

export default AboutUsContent;
