import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Portal.module.scss";

interface IProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Portal = ({ show, onClose, children }: IProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show && (
    <div className={styles.overlay}>
      <div className={styles.body}>{children}</div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

export default Portal;
