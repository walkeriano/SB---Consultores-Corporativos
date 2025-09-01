import React, { useState } from "react";
import styles from "./itemServices.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ItemServices() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className={styles.itemsFlex}>
      {/* Servicio 1 */}
      <section className={styles.itemReady}>
        {activeId === 1 ? (
          <div className={styles.containerShow}>
            <h2>Derecho Administrativo</h2>
            <ul>
              <li>
                Acreditación y certificación de establecimientos de salud.
              </li>
              <li>
                Revisión e implementación de los títulos habilitantes y
                condiciones legales y técnicas que autorizan el funcionamiento
                del establecimiento de salud.
              </li>
              <li>Implementación del libro de reclamaciones – Susalud.</li>
              <li>
                Registro sanitario de productos: Tramitamos el registro de
                productos dietéticos y edulcorantes.
              </li>
              <li>
                Modificaciones y reinscripciones: Gestionamos las modificaciones
                post-registro (cambios en el titular, fabricante, fórmulas,
                etc.) y las reinscripciones para mantener su registro vigente.
              </li>
              <li>
                Asesoría técnica y legal: Brindamos orientación experta para la
                elaboración de expedientes técnicos y el cumplimiento de las
                normativas vigentes.
              </li>
              <li>
                Asesoría en saneamiento ambiental: Brindamos consultoría para el
                cumplimiento de las normativas de calidad de agua, control de
                vectores y manejo de residuos sólidos.
              </li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(1)}>
              <h4>Derecho Administrativo</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
          src="/pic-1.jpg"
          alt="Derecho Administrativo"
          fill
          quality={75}
          loading="lazy"
        />
      </section>

      {/* Servicio 2 */}
      <section className={styles.itemReady}>
        {activeId === 2 ? (
          <div className={styles.containerShow}>
            <h2>Protección al consumidor</h2>
            <ul>
              <li>Implementación de manual de protección al consumidor.</li>
              <li>
                Capacitaciones relacionadas a las normas de protección al
                consumidor en relación a cada negocio.
              </li>
              <li>
                Atención de reclamos y/o quejas interpuestas en libro de
                reclamaciones físico y/o virtual, plataforma virtual del
                Indecopi (reclama virtual).
              </li>
              <li>Solución de controversias.</li>
              <li>
                Contacto directo con clientes con la finalidad de llegar a un
                acuerdo transaccional, velando por mitigar cualquier riesgo.
                Elaboración de acuerdos extrajudiciales.
              </li>
              <li>
                Absolución de requerimientos, cartas emitidas por el Indecopi.
              </li>
              <li>Denuncias Administrativas Sancionadoras.</li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(2)}>
              <h4>Protección al consumidor</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-2.jpg"
            alt="Protección al consumidor"
            fill
            quality={75}
            loading="lazy"
          />
      </section>

      {/* Servicio 3 */}
      <section className={styles.itemReady}>
        {activeId === 3 ? (
          <div className={styles.containerShow}>
            <h2>Derecho Municipal</h2>
            <ul>
              <li>Multas Municipales.</li>
              <li>
                Declaratoria de Fábrica (regularización de construcciones).
              </li>
              <li>Actualizacion de titular contribuyente.</li>
              <li>Actualizacion de Autovaluo.</li>
              <li>Reclamos ante la Administración Pública.</li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(3)}>
              <h4>Derecho Municipal</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-3.jpg"
            alt="Derecho Municipal"
            fill
            quality={75}
            loading="lazy"
          />
      </section>

      {/* Servicio 4 */}
      <section className={styles.itemReady}>
        {activeId === 4 ? (
          <div className={styles.containerShow}>
            <h2>Derecho Penal</h2>
            <ul>
              <li>
                Procesos penales relacionados al delito de hurto con la
                finalidad de obtener un resultado favorable y se pueda realizar
                una deducción al IGV e impuesto a la renta (elaboración de
                denuncia, impulso a través de escritos, absolución de
                requerimientos a nivel fiscal y/o policial, asistencia a
                diligencias en calidad de abogado y/o representante legal)
              </li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(4)}>
              <h4>Derecho Penal</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-4.jpg"
            alt="Derecho Penal"
            fill
            quality={75}
            loading="lazy"
          />
      </section>

      {/* Servicio 5 */}
      <section className={styles.itemReady}>
        {activeId === 5 ? (
          <div className={styles.containerShow}>
            <h2>Derecho Laboral</h2>
            <ul>
              <li>
                Desvinculaciones, procedimientos de despido (análisis del caso
                en particular, elaboración de carta de preaviso de despido y de
                despido).
              </li>
              <li>Elaboración de medidas disciplinarias.</li>
              <li>Capacitaciones sociolaborales.</li>
              <li>
                Implementación de procesos de hostigamiento sexual laboral,
                clima laboral, medidas disciplinarias, rotaciones.
              </li>
              <li>
                Capacitación especializada sobre hostigamiento sexual laboral.
              </li>
              <li>
                Procedimientos Administrativos ante Sunafil (desde requerimiento
                de información hasta el acta de infracción).
              </li>
              <li>Auditorias de cumplimiento de Sunafil.</li>
              <li>
                Representación y patrocinio en procedimientos extrajudiciales y
                judiciales.
              </li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(5)}>
              <h4>Derecho Laboral</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-4.jpg"
            alt="Derecho Laboral"
            fill
            quality={75}
            loading="lazy"
          />
      </section>

      {/* Servicio 6 */}
      <section className={styles.itemReady}>
        {activeId === 6 ? (
          <div className={styles.containerShow}>
            <h2>Derecho Corporativo</h2>
            <ul>
              <li>Implementación de Gobierno Corporativo.</li>
              <li>Protección de datos personales.</li>
              <li>Registro de bases de datos personales.</li>
              <li>
                Implementación de políticas de tratamiento adecuado de las bases
                de datos personales.
              </li>
              <li>
                Asesoría en la adopción y cumplimiento de medidas de seguridad
                exigidas por la Ley N° 29733 y su Reglamento.
              </li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(6)}>
              <h4>Derecho Corporativo</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-4.jpg"
            alt="Derecho Corporativo"
            fill
            quality={75}
            loading="lazy"
          />
      </section>

      {/* Servicio 7 */}
      <section className={styles.itemReady}>
        {activeId === 7 ? (
          <div className={styles.containerShow}>
            <h2>Derecho Civil</h2>
            <ul>
              <li>Contratos de prestación de servicios.</li>
              <li>
                Contratos de arrendamiento y usufructo (elaboración hasta
                inscripción en SUNARP).
              </li>
              <li>Contratos de compraventa.</li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(7)}>
              <h4>Derecho Civil</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-4.jpg"
            alt="Derecho Civil"
            fill
            quality={75}
            loading="lazy"
          />
      </section>

      {/* Servicio 8 */}
      <section className={styles.itemReady}>
        {activeId === 8 ? (
          <div className={styles.containerShow}>
            <h2>Derecho de Familia</h2>
            <ul>
              <li>Pensión de Alimentos</li>
              <li>Tenencia y Régimen de Visitas</li>
              <li>Violencia Familiar</li>
              <li>Divorcio</li>
              <li>Sucesiones (Herencias)</li>
              <li>Derecho Corporativo</li>
              <li>Constitución de empresas</li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(8)}>
              <h4>Derecho de Familia</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-4.jpg"
            alt="Derecho de Familia"
            fill
            quality={75}
            loading="lazy"
          />
      </section>

      {/* Servicio 9 */}
      <section className={styles.itemReady}>
        {activeId === 9 ? (
          <div className={styles.containerShow}>
            <h2>Derecho Registral</h2>
            <ul>
              <li>Regularización de predios.</li>
              <li>Saneamiento.</li>
              <li>Trámites notariales y registrales.</li>
            </ul>
            <div className={styles.containerBtns}>
              <button className={styles.mini} onClick={() => setActiveId(null)}>
                <p>Minimizar</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </button>
              <button className={styles.contact}>
                <p>Reservar reunión</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faWhatsapp}
                />
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.containerBtnService}>
            <button className={styles.btnOpen} onClick={() => setActiveId(9)}>
              <h4>Derecho Registral</h4>
              <div className={styles.btnContactItem}>
                <p>ver más</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faArrowRight}
                />
              </div>
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </section>
        )}
        <Image
            src="/pic-4.jpg"
            alt="Derecho Registral"
            fill
            quality={75}
            loading="lazy"
          />
      </section>
    </section>
  );
}
