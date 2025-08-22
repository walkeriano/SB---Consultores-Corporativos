import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./hero.module.css";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ id }) {
  const textRef = useRef(null);

  useEffect(() => {
    // 🔹 Animación suave ligada al scroll
    gsap.fromTo(
      textRef.current,
      { scale: 1, y: 0 },
      {
        scale: 1.1,
        y: 200,
        duration: 7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "bottom 100%",
          end: "bottom 20%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section id={id} className={styles.sectionHero}>
      <Header />
      <script
        src="//code.tidio.co/81gi7ibfypisbll0tsgqfn9fsswnlcvu.js"
        async
      ></script>
      <section className={styles.containerText}>
        <section className={styles.textArea}>
          <h2>
            Brenda Barreda & Sayuri Velfhasi
          </h2>
          <h1>
            Consultoría <span>legal</span>
          </h1>
          <section className={styles.containerCalltoAction}>
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
          </section>
        </section>
        <section className={styles.containerExtras}>
          <div className={styles.itemExtra}>
            <span>+53</span>
            <p>
              clientes
              <br />
              felices
            </p>
          </div>
          <div className={styles.itemExtra}>
            <span>+75</span>
            <p>
              casos
              <br />
              exitosos
            </p>
          </div>
          <div className={styles.itemExtra}>
            <span>+38</span>
            <p>
              partners
              <br />
              socios
            </p>
          </div>
        </section>
      </section>
      <section className={styles.firstPerson}>
        <Image
          ref={textRef}
          src="/togeter.png"
          alt="image-presentation"
          fill={true}
        />
      </section>
      <section className={styles.womanContainer}>
        <div className={styles.boxImage}>
          <Image src="/woman-right.png" alt="image-presentation" fill={true} />
        </div>
        <div className={styles.boxImageTwo}>
          <Image src="/woman-left.png" alt="image-presentation" fill={true} />
        </div>
      </section>
      <section className={styles.allImage}>
        <Image src="/bg-texture.jpg" alt="image-presentation" fill={true} />
      </section>
    </section>
  );
}
