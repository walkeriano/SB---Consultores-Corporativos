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
            Sayuri Siu
            <br />
            <span>Quispe Moreno</span>
          </h2>
          <h3>Abogada Senior</h3>
          <section className={styles.descripcionPerson}>
            <p>
              Abogada con sólidos valores éticos y morales; con amplia
              experiencia en asesoría legal en Derecho Municipal, Derecho
              Administrativo y Gestión Pública. Maestra en Derecho de La Empresa
              por la PUCP, Egresada de la Maestría en Derecho Penal por la UNFV.
              Su trayectoria profesional se compone también de conocimientos
              técnicos en el área municipal y registral, con habilidades de
              coordinación institucional y análisis jurídico destacando en
              asesoría y representación de empresas del sector privado.
            </p>
            <div className={styles.channelsContact}>
              <Link
                href="https://wa.me/51949273157?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
                target="_blank"
                rel="noopener noreferrer"
                 className={styles.linkwss}
              >
                contactar
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </Link>
              <Link href="tel:+51949273157" className={styles.link}>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faPhoneVolume}
                />
              </Link>
              <Link href="mailto: sayuri.quispe@consultorescorporativos.com.pe" className={styles.link}>
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
            Brenda Damariz
            <br />
            <span>Barreda Runciman</span>
          </h2>
          <h3>Abogada Senior</h3>
          <section className={styles.descripcionPerson}>
            <p>
              Abogada y Maestra en Derecho de la Empresa, con especialización en
              Derecho Administrativo y Legislación Laboral. Amplia experiencia
              en la elaboración de sistema de planeamiento y gestión de buen
              gobierno corporativo. Basta experiencia en procedimiento
              administrativos. Conocimientos en Planeación y Cooperación
              estratégica, lo que le permite contribuir de manera efectiva en la
              formulación y seguimiento de acuerdos para el desarrollo
              sostenible.
            </p>
            <div className={styles.channelsContact}>
              <Link href="tel:+51962240973" className={styles.link}>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faPhoneVolume}
                />
              </Link>
              <Link href="mailto: brenda.barreda@consultorescorporativos.com.pe" className={styles.link}>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faEnvelope}
                />
              </Link>
              <Link
                href="https://wa.me/51962240973?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
                target="_blank"
                rel="noopener noreferrer"
                 className={styles.linkwss}
              >
                contactar
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
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
