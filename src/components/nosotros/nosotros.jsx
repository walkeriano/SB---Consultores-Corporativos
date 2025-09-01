import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./nosotros.module.css";

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
      <h2 ref={titleRef}>igualdad, justicia, lealtad, experiencia</h2>
      <section className={styles.containerFlex}>
        <p ref={textRef}>
          S&B Consultores Corporativos SAC, nuestra misión es ser el
          socio legal de confianza, ofreciendo soluciones corporativas y
          jurídicas de la más alta calidad. Nos dedicamos a comprender a fondo
          los desafíos de su negocio para brindar un asesoramiento estratégico y
          proactivo que no solo resuelve problemas, sino que también previene
          riesgos y optimiza el crecimiento. Con un enfoque en la integridad, la
          eficiencia y el profesionalismo, buscamos proteger sus activos,
          asegurar el cumplimiento normativo y fortalecer su estructura
          empresarial, permitiéndole centrarse en lo que mejor sabe hacer.
          Nuestra visión es ser la consultora legal corporativa líder en
          el mercado, reconocida por nuestra excelencia técnica, pensamiento
          innovador y un servicio al cliente excepcional. Aspiramos a ser el
          referente en el ámbito de la consultoría empresarial, estableciendo
          nuevos estándares de asesoramiento jurídico que impulsen el éxito de
          nuestros clientes. Buscamos construir relaciones de largo plazo,
          convirtiéndonos en un pilar fundamental para el desarrollo sostenible
          y la expansión de las empresas a las que servimos, contribuyendo así a
          un ecosistema empresarial más fuerte y ético.
        </p>
      </section>
    </section>
  );
}
