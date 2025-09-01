import React, { useState } from "react";
import styles from "./itemServices.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ItemServices({ title, description, image }) {
  const [change, setChange] = useState(true);

  return (
    <section className={styles.itemReady}>
      {change ? (
        <section className={styles.containerBtnService}>
          <button className={styles.btnOpen} onClick={() => setChange(false)}>
            <h4>{title}</h4>
            <div className={styles.btnContactItem}>
              <p>ver más</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faArrowRight}
              />
            </div>
          </button>
          <button className={styles.contact}>
            <p>Reservar reunión</p>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faWhatsapp}
            />
          </button>
        </section>
      ) : (
        <div className={styles.containerShow}>
          <h2>{title}</h2>
          <ul>
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className={styles.containerBtns}>
            <button className={styles.mini} onClick={() => setChange(true)}>
              <p>Minimizar</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faArrowRight}
              />
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </div>
        </div>
      )}
      <Image src={image} alt="image-presentation" fill={true} />
    </section>
  );
}
