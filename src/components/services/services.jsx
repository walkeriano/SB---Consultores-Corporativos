import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import Image from "next/image";
import Link from "next/link";
import ItemServices from "@/components/itemServices/itemServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function Services({id}) {
    const textRef = useRef(null);
  const services = [
    {
      id: 1,
      title: "Corporativo",
      description: "Creamos sitios web modernos y optimizados para SEO.",
      image: "/pic-1.jpg",
    },
    {
      id: 2,
      title: "Penal",
      description: "Campañas efectivas en Google Ads y redes sociales.",
      image: "/pic-2.jpg",
    },
    {
      id: 3,
      title: "Judicial",
      description: "Te ayudamos a escalar tu negocio con tecnología.",
      image: "/pic-3.jpg",
    },
    {
      id: 4,
      title: "Civil",
      description: "Te ayudamos a escalar tu negocio con tecnología.",
      image: "/pic-4.jpg",
    },
  ];

    useEffect(() => {
      // 🔹 Animación para el texto (entra desde la izquierda)
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: true, // efecto ligado al scroll
          },
        }
      );
    }, []);

  return (
    <section id={id} className={styles.contaienrServices}>
      <section  ref={textRef} className={styles.contianerTitle}>
        <h3>
          servicios &<br />
          <span>asesorías</span>
        </h3>
        <section className={styles.flexContact}>
          <p>
            Especialistas en todo el ambito legal,
            <br /> corporativo y judicial
          </p>
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
        <Image src="/bg-logo.png" alt="logo-sb-bg" fill={true} />
      </section>
      <section className={styles.itemsFlex}>
        {services.map((service) => (
          <ItemServices
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </section>
    </section>
  );
}
