import React from "react";

import styles from "./Button.module.scss";

interface IProps {
	children: string;
	propStyles?: string;
	isDisabled?: boolean;
}

function Button({ children, propStyles, isDisabled }: IProps) {
	return (
		<button disabled={isDisabled} className={propStyles || styles.wrapper}>
			{children}
		</button>
	);
}

export default Button;
