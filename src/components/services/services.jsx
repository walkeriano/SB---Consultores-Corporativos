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

export default function Services({ id }) {
  const services = [
    {
      id: 1,
      title: "Derecho Administrativo",
      description: [
        "Acreditación y certificación de establecimientos de salud.",
        "Revisión e implementación de los títulos habilitantes y condiciones legales y técnicas que autorizan el funcionamiento del establecimiento de salud.",
        "Implementación del libro de reclamaciones – Susalud.",
        "Registro sanitario de productos: Tramitamos el registro de productos dietéticos y edulcorantes.",
        "Modificaciones y reinscripciones: Gestionamos las modificaciones post-registro (cambios en el titular, fabricante, fórmulas, etc.) y las reinscripciones para mantener su registro vigente.",
        "Asesoría técnica y legal: Brindamos orientación experta para la elaboración de expedientes técnicos y el cumplimiento de las normativas vigentes.",
        "Asesoría en saneamiento ambiental: Brindamos consultoría para el cumplimiento de las normativas de calidad de agua, control de vectores y manejo de residuos sólidos.",
      ],
      image: "/pic-1.jpg",
    },
    {
      id: 2,
      title: "Protección al consumidor",
      description: [
        "Implementación de manual de protección al consumidor.",
        "Capacitaciones relacionadas a las normas de protección al consumidor en relación a cada negocio.",
        "Atención de reclamos y/o quejas interpuestas en libro de reclamaciones físico y/o virtual, plataforma virtual del Indecopi (reclama virtual).",
        "Solución de controversias. ",
        "Contacto directo con clientes con la finalidad de llegar a un acuerdo transaccional, velando por mitigar cualquier riesgo. Elaboración de acuerdos extrajudiciales.",
        "Absolución de requerimientos, cartas emitidas por el Indecopi.",
        "Denuncias Administrativas Sancionadoras.",
      ],
      image: "/pic-2.jpg",
    },
    {
      id: 3,
      title: "Derecho Municipal",
      description: [
        "Multas Municipales.",
        "Declaratoria de Fábrica (regularización de construcciones).",
        "Actualizacion de titular contribuyente.",
        "Actualizacion de Autovaluo. ",
        "Reclamos ante la Administración Pública.",
      ],
      image: "/pic-3.jpg",
    },
    {
      id: 4,
      title: "Derecho Penal",
      description: [
        "Procesos penales relacionados al delito de hurto con la finalidad de obtener un resultado favorable y se pueda realizar una deducción al IGV e impuesto a la renta (elaboración de denuncia, impulso a través de escritos, absolución de requerimientos a nivel fiscal y/o policial, asistencia a diligencias en calidad de abogado y/o representante legal)",
      ],
      image: "/pic-4.jpg",
    },
    {
      id: 5,
      title: "Derecho Laboral",
      description: [
        "Desvinculaciones, procedimientos de despido (análisis del caso en particular, elaboración de carta de preaviso de despido y de despido).",
        "Elaboración de medidas disciplinarias.",
        "Capacitaciones sociolaborales.",
        "Implementación de procesos de hostigamiento sexual laboral, clima laboral, medidas disciplinarias, rotaciones.",
        "Capacitación especializada sobre hostigamiento sexual laboral. ",
        "Procedimientos Administrativos ante Sunafil (desde requerimiento de información hasta el acta de infracción).",
        "Auditorias de cumplimiento de Sunafil.",
        "Representación y patrocinio en procedimientos extrajudiciales y judiciales.",
      ],
      image: "/pic-4.jpg",
    },
    {
      id: 6,
      title: "Derecho Corporativo",
      description: [
        "Implementación de Gobierno Corporativo.",
        "Protección de datos personales:",
        "Registro de bases de datos personales.",
        "Implementación de políticas de tratamiento adecuado de las bases de datos personales.",
        "Asesoría en la adopción y cumplimiento de medidas de seguridad exigidas por la Ley N° 29733 y su Reglamento.",
      ],
      image: "/pic-4.jpg",
    },
    {
      id: 7,
      title: "Derecho Civil",
      description: [
        "Contratos de prestación de servicios.",
        "Contratos de arrendamiento y usufructo (elaboración hasta inscripción en SUNARP).",
        "Contratos de compraventa.",
      ],
      image: "/pic-4.jpg",
    },
    {
      id: 8,
      title: "Derecho de Familia",
      description: [
        "Pensión de Alimentos",
        "Tenencia y Régimen de Visitas",
        "Violencia Familiar.",
        "Divorcio",
        "Sucesiones (Herencias)",
        "Derecho Corporativo",
        "Constitución de empresas.",
      ],
      image: "/pic-4.jpg",
    },
    {
      id: 9,
      title: "Derecho Registral",
      description: [
        "Regularización de predios.",
        "Saneamiento.",
        "Tramites notariales y registrales.",
      ],
      image: "/pic-4.jpg",
    },
  ];

  return (
    <section id={id} className={styles.contaienrServices}>
      <section className={styles.contianerTitle}>
        <h3>
          asesorías &<br />
          <span>consultorías</span>
        </h3>
        <section className={styles.flexContact}>
          <p>Especialistas en todo el ambito legal, corporativo y judicial</p>
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
