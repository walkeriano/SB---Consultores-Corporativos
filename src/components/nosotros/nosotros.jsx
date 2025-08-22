import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./nosotros.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function Nosotros({ id }) {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 🔹 Animación para el título (fade in con scroll)
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 100%",
          end: "top 20%",
          scrub: true, // sigue el scroll
        },
      }
    );

    // 🔹 Animación para el texto (entra desde la izquierda)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true, // efecto ligado al scroll
        },
      }
    );
  }, []);

  return (
    <section id={id} className={styles.containerNosotros}>
      <h2 ref={titleRef}>igualdad, justicia, lealtad, respeto, experiencia</h2>
      <section className={styles.containerFlex}>
        <p ref={textRef}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essen tially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum
        </p>
        <section className={styles.channels}>
          <Link href="/">
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faInstagram}
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faFacebook}
            />
          </Link>
        </section>
      </section>
    </section>
  );
}
