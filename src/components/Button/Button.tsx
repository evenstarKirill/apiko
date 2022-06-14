import React from "react";

import styles from "./Button.module.scss";

interface IProps {
	children: string;
	propStyles?: string;
	isDisabled?: boolean;
	onClick?: () => void;
}

function Button({ children, propStyles, isDisabled, onClick }: IProps) {
	return (
		<button
			onClick={onClick}
			disabled={isDisabled}
			className={propStyles || styles.wrapper}>
			{children}
		</button>
	);
}

export default Button;
