import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPaperPlane,
  faUser,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ id }) {
  const formShow = useRef(null);

  useEffect(() => {
    // 🔹 Animación para el texto (entra desde la izquierda)
    gsap.fromTo(
      formShow.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formShow.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true, // efecto ligado al scroll
        },
      }
    );
  }, []);

  return (
    <section id={id} className={styles.containerContacto}>
      <section className={styles.containerFlex}>
        <div className={styles.channelsContact}>
          <h3>
            El primer <span>contacto</span>
          </h3>
          <p>Reserva una reunión online o presencial en nuestras oficinas</p>
        </div>
        <form ref={formShow} className={styles.formContact}>
          <h4>Envíanos tus datos y te contactaremos</h4>
          <section className={styles.inputsArea}>
            <div className={styles.flexInputs}>
              <label htmlFor="">
                <input type="text" placeholder="Nombre" />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faUser}
                />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="Teléfono" />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faPhoneVolume}
                />
              </label>
            </div>
            <div className={styles.flexInputs}>
              <label htmlFor="">
                <input type="text" placeholder="Email" />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faEnvelope}
                />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="Servicio" />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faBriefcase}
                />
              </label>
            </div>
          </section>
          <button>
            <p>enviar</p>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faPaperPlane}
            />
          </button>
        </form>
      </section>
    </section>
  );
}
