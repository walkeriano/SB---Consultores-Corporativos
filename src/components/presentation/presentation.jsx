import styles from "./presentation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Presentation() {
  return (
    <section className={styles.presentation}>
      <section className={styles.containerGeneral}>
        <section className={styles.itemDescription}>
          <h2>
            Sayuri
            <br />
            <span>Valfhesi</span>
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
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
