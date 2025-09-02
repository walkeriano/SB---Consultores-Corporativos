import React, { memo } from "react";
import styles from "./presentation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Presentation() {
  return (
    <section className={styles.presentation}>
      <section className={styles.containerGeneral}>
        <section className={styles.itemDescription}>
          <h2>
            Sayuri
            <br />
            <span>Quispe</span>
          </h2>
          <h3>Abogada Senior</h3>
          <section className={styles.descripcionPerson}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <div className={styles.channelsContact}>
              <Link
                href="https://wa.me/51957839801?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </Link>
              <Link href="tel:+51957839801">
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faPhoneVolume}
                />
              </Link>
              <Link href="mailto: sayuri.quispe@consultorescorporativos.com.pe">
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faEnvelope}
                />
              </Link>
            </div>
          </section>
        </section>
        <section className={styles.itemDescription}>
          <h2>
            Brenda
            <br />
            <span>Barreda</span>
          </h2>
          <h3>Abogada Senior</h3>
          <section className={styles.descripcionPerson}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <div className={styles.channelsContact}>
              <Link
                href="https://wa.me/51962240973?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </Link>
              <Link href="tel:+51962240973">
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faPhoneVolume}
                />
              </Link>
              <Link href="mailto: brenda.barreda@consultorescorporativos.com.pe">
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faEnvelope}
                />
              </Link>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default memo(Presentation);
