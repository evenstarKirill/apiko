import React from "react";
import { nanoid } from "nanoid";

import Item from "./Item/Item";
import Button from "../Button/Button";
import TravelWeddingPhotography from "./TravelWeddingPhotography/TravelWeddingPhotography";

import { ReactComponent as Camera } from "./../../assets/Camera.svg";
import { ReactComponent as Camera2 } from "./../../assets/Camera2.svg";
import { ReactComponent as Circle } from "./../../assets/Circle.svg";
import { ReactComponent as TapHand } from "./../../assets/TapHand.svg";

import styles from "./WhatWeOffer.module.scss";

interface IItemsList {
  title: string;
  body: string;
  icon: JSX.Element;
}

function WhatWeOffer() {
  const itemsList: Array<IItemsList> = [
    {
      title: "Modern Photo",
      body: "We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.",
      icon: <Camera />
    },
    {
      title: "Air-drone photography",
      body: "Have you ever dreamed of having a breathtaking movi-like video? Our professional photographers are highly skilled in using air-drones",
      icon: <Circle />
    },
    {
      title: "Professional retouching",
      body: "Our team provides you with brilliant photo editing in really short terms. You'll get the amazing photos in the blink of your eye.",
      icon: <TapHand />
    },
    {
      title: "Actual Equipment",
      body: "Our main goal is to achieve the outstanding results. So we are constantly in search of new updates of our equipment.",
      icon: <Camera2 />
    }
  ];

  return (
    <div id="What We Offer" className={styles.wrapper}>
      <h1 className={styles.title}>What We Offer</h1>
      <div className={styles.items_list}>
        {itemsList.map((item) => (
          <Item key={nanoid()} title={item.title} body={item.body} icon={item.icon} />
        ))}
      </div>
      <TravelWeddingPhotography />
      <div className={styles.contact_us_button}>
        <Button
          onClick={() =>
            document?.getElementById("Contact us")?.scrollIntoView()
          }
        >
          Contact us
        </Button>
      </div>
    </div>
  );
}

export default WhatWeOffer;
