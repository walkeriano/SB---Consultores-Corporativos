import React, { useState, useEffect, useRef, memo } from "react";
import styles from "./services.module.css";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Services({ id }) {
  return (
    <section id={id} className={styles.contaienrServices}>
      <section className={styles.contianerTitle}>
        <h3>
          asesorías &<br />
          <span>consultorías</span>
        </h3>
        <section className={styles.flexContact}>
          <p>Especialistas en todo el ambito legal, corporativo y judicial</p>
          <div className={styles.flexBtn}>
            <button>
              agendar reunión
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faArrowRight}
              />
            </button>
            <Link href="/">
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faPhoneVolume}
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faEnvelope}
              />
            </Link>
          </div>
        </section>
      </section>
      
      <section className={styles.containerBg}>
        <Image src="/bg-logo.png" alt="logo-sb-bg" fill />
      </section>
    </section>
  );
}

export default memo(Services);
