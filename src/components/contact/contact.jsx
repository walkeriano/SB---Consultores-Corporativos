import React, { useState, useEffect, useRef } from "react";
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
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ id }) {
  const formShow = useRef(null);

  const formRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false); // Estado para mostrar mensaje de éxito
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para deshabilitar el botón mientras se envía
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

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

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage(""); // Limpiar cualquier mensaje de error anterior

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);

    // Aquí es donde agregamos la clave de acceso de Web3Forms
    const accessKey = "285d4c2e-2da7-44f5-8632-15a4707d41a5"; // Asegúrate de incluir las comillas
    object.access_key = accessKey;

    const json = JSON.stringify(object);

    // Enviar los datos al API de Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSuccess(true);
      // Resetea el formulario después de un tiempo
      setTimeout(() => {
        formRef.current.reset();
        setIsSuccess(false);
      }, 3000);
    } else {
      setErrorMessage("Error al enviar el formulario. Inténtalo de nuevo.");
    }

    setIsSubmitting(false); // Rehabilitar el botón después de la respuesta
  };

  return (
    <section  className={styles.containerContacto}>
      <section id={id} ref={formShow} className={styles.containerFlex}>
        <div className={styles.channelsContact}>
          <h3>
            El primer <span>contacto</span>
          </h3>
          <p>Reserva una reunión online o presencial en nuestras oficinas</p>
        </div>
        {isSuccess && (
          <div className={styles.successMessage}>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faTriangleExclamation}
            />
            <p>¡Gracias! Tu mensaje ha sido enviado con éxito</p>
          </div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faTriangleExclamation}
            />
            <p>{errorMessage}</p>
          </div>
        )}
        <form ref={formRef} onSubmit={onSubmit} className={styles.formContact}>
          <h4>Envíanos tus datos y te contactaremos</h4>
          <section className={styles.inputsArea}>
            <div className={styles.flexInputs}>
              <label htmlFor="">
                <input type="text" placeholder="Nombre" name="name" required />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faUser}
                />
              </label>
              <label htmlFor="">
                <input
                  type="number"
                  placeholder="Teléfono"
                  name="name"
                  required
                />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faPhoneVolume}
                />
              </label>
            </div>
            <div className={styles.flexInputs}>
              <label htmlFor="">
                <input type="email" placeholder="Email" name="name" required />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faEnvelope}
                />
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Servicio"
                  name="name"
                  required
                />
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faBriefcase}
                />
              </label>
            </div>
          </section>
          <button type="submit" disabled={isSubmitting}>
            <p>{isSubmitting ? "Enviando..." : "Enviar"}</p>
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
