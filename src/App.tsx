import React from "react";
import AboutUsContent from "./components/AboutUsContent/AboutUsContent";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import Portfolio from "./components/Portfolio/Portfolio";

import { RecoilRoot } from "recoil";
import styles from "./App.module.scss";
import HeaderImage from "./components/HeaderImage/HeaderImage";

import Testimonials from "./components/Testimonials/Testimonials";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<RecoilRoot>
			<div className={styles.app}>
				<div id='Home' className={styles.header_content}>
					<HeaderContent />
				</div>

				<div className={styles.header_image}>
					<HeaderImage />
				</div>
				<img
					className={styles.image}
					alt='img'
					src={require("./Assets/AboutUs.png")}
				/>
				<AboutUsContent />
				<div id='About' />
				<WhatWeOffer />
				<img
					className={styles.image}
					alt='img'
					src={require("./Assets/WhatWeOffer.png")}
				/>
				<div />
				<div id='Portfolio' className={styles.portfolio}>
					<Portfolio />
				</div>
				<div id='Testimonials' className={styles.testimonials}>
					<Testimonials />
				</div>
				<div id='Contact us' className={styles.feedbackform}>
					<FeedbackForm />
				</div>
				<div className={styles.subscribe}>
					<Subscribe />
				</div>
				<div className={styles.footer}>
					<Footer />
				</div>
			</div>
		</RecoilRoot>
	);
}

export default App;
