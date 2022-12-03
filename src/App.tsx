import React from 'react';
import AboutUsContent from './components/AboutUsContent/AboutUsContent';
import HeaderContent from './components/HeaderContent/HeaderContent';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';
import Portfolio from './components/Portfolio/Portfolio';
import { RecoilRoot } from 'recoil';
import HeaderImage from './components/HeaderImage/HeaderImage';
import Testimonials from './components/Testimonials/Testimonials';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

import styles from './App.module.scss';

const App = () => (
  //test wsl
  <RecoilRoot>
    <div className={styles.app}>
      <HeaderContent id="Home" className={styles.header_content} />
      <HeaderImage customStyles={styles.header_image} />
      <img
        className={styles.image}
        alt="img"
        src={require('./assets/AboutUs.png')}
      />
      <AboutUsContent />
      <div id="About" />
      <WhatWeOffer />
      <img
        className={styles.image}
        alt="img"
        src={require('./assets/WhatWeOffer.png')}
      />
      <div />
      <Portfolio id="Portfolio" customStyles={styles.portfolio} />
      <Testimonials id="Testimonials" className={styles.testimonials} />
      <FeedbackForm id="Contact us" className={styles.feedbackform} />
      <Subscribe className={styles.subscribe} />
      <Footer className={styles.footer} />
    </div>
  </RecoilRoot>
);

export default App;
