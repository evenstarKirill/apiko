import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

import styles from "./Subscribe.module.scss";

function Subscribe() {
	const [email, setEmail] = useState(" ");
	const [emailDirty, setEmailDirty] = useState(false);
	const [emailError, setEmailError] = useState("Email can't be empty");
	const [formValid, setFormValid] = useState(false);

	const onBlurHandler = (e: React.FormEvent<HTMLInputElement>) => {
		switch (e.currentTarget.name) {
			case "email":
				setEmailDirty(true);
				break;
		}
	};

	const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

		if (!re.test(String(e.currentTarget.value).toLocaleLowerCase())) {
			setEmailError("email is not valid");
		} else {
			setEmailError("");
		}
	};

	useEffect(() => {
		if (emailError) {
			setFormValid(false);
		} else setFormValid(true);
	}, [emailError]);

	return (
		<div className={styles.wrapper} id='subscribe'>
			<div className={styles.modal_wrapper}>
				<h3>Subscribe for updates</h3>
				<form>
					<div className={styles.input_button}>
						<input
							onChange={(e) => onInputHandler(e)}
							value={email}
							onBlur={(e) => onBlurHandler(e)}
							name='email'
							placeholder='Your Email'
						/>

						<Button
							isDisabled={!formValid}
							propStyles={styles.button}>
							Subscribe
						</Button>
					</div>
					{emailError && emailDirty && (
						<p className={styles.error}>{emailError}</p>
					)}
					<p>
						We value your privacy. None of the details supplied will
						be shared with external parties
					</p>
				</form>
			</div>
		</div>
	);
}

export default Subscribe;
