import React, { SVGProps } from "react";
import { nanoid } from "nanoid";

import Phone from "../../assets/Phone.svg";
import Location from "../../assets/Location.svg";
import Mail from "../../assets/Mail.svg";
import image from "../../assets/ContactUsPhoto.png";

import Modal from "./Modal/Modal";

import styles from "./FeedbackForm.module.scss";

interface IItem {
  text: string;
  icon: SVGProps<SVGElement>;
}

const items: IItem[] = [
  {
    text: "385 Noah Place Suite 878",
    icon: Location as SVGProps<SVGElement>
  },
  {
    text: "877-255-7945",
    icon: Phone as SVGProps<SVGElement>
  },
  {
    text: "info@form.com",
    icon: Mail as SVGProps<SVGElement>
  }
];

interface IProps {
  id: string;
  className?: string;
}

const FeedbackForm = ({ id, className }: IProps) => (
  <div id={id} className={className}>
    <div className={styles.wrapper_with_modal}>
      <div className={styles.wrapper}>
        <div className={styles.please_contact_us}>
          <h1 className={styles.title}>Please contact us</h1>
          <p className={styles.text}>
            We appreciate every client and can make your dreams come true! Do
            not hesitate to contact us.
          </p>
          <div className={styles.info_block}>
            {items.map((item) => (
              <div key={nanoid()} className={styles.item}>
                <img
                  className={styles.icon}
                  alt="text"
                  src={item.icon as string}
                />
                <div>{item.text}</div>
              </div>
            ))}
          </div>
          <div className={styles.green_line} />
        </div>
        <img className={styles.image} src={image} alt="img"></img>
      </div>
      <div className={styles.modal}>
        <Modal />
      </div>
    </div>
  </div>
);

export default FeedbackForm;
