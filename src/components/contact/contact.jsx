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
      <section className={styles.containerMap}>
        <h3>Encuentranos facilmente</h3>
        <section className={styles.mapbox}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.805097786735!2d-77.0319887246377!3d-12.125484043372037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81ec5d54d07%3A0xe9df3ef854963a95!2sAv.%20Jos%C3%A9%20Larco%2C%20Miraflores%2015074%2C%20Per%C3%BA!5e0!3m2!1ses!2ses!4v1746188563144!5m2!1ses!2ses"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </section>
  );
}
