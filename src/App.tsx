import React, { useRef } from "react";
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
	const myRef = useRef<null | HTMLDivElement>(null);
	const executeScroll = () => myRef.current?.scrollIntoView();

	return (
		<RecoilRoot>
			<div className={styles.app}>
				<HeaderContent scrollTo={executeScroll} />
				<HeaderImage />
				<img
					style={{ height: "800px" }}
					className={styles.image}
					alt='img'
					src={require("./Assets/AboutUs.png")}
				/>
				<AboutUsContent />
				<div />
				<WhatWeOffer scrollTo={executeScroll} />
				<img
					style={{ height: "1000px" }}
					className={styles.image}
					alt='img'
					src={require("./Assets/WhatWeOffer.png")}
				/>
				<div />
				<div className={styles.portfolio}>
					<Portfolio />
				</div>
				<div className={styles.testimonials}>
					<Testimonials />
				</div>
				<div ref={myRef} className={styles.feedbackform}>
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
