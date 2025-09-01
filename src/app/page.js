"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Loading from "@/components/loading/loading";
import Hero from "@/components/hero/hero";
import Nosotros from "@/components/nosotros/nosotros";
import Presentation from "@/components/presentation/presentation";
import Services from "@/components/services/services";
import ItemServices from "@/components/itemServices/itemServices";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          SB - Consultores Corporativos - Asesoría y Consultoría Corporativa
          legal
        </title>
        <meta
          name="description"
          content="Soluciones corporativas y jurídicas de la más alta calidad. Nos dedicamos a comprender a fondo los desafíos de su negocio para brindar un asesoramiento estratégico y proactivo que no solo resuelve problemas, sino que también previene riesgos y optimiza el crecimiento."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="asesoría legal, estudio de abogados, abogados, consultoría legal, derecho administrativo, protección al consumidor, derecho municipal, derecho penal, derecho laboral, derecho corporativo, derecho civil, derecho de familia, derecho registral"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="SB - Consultores Corporativos - Asesoría y Consultoría Corporativa legal"
        />
        <meta
          property="og:description"
          content="asesoría legal, estudio de abogados, abogados, consultoría legal, derecho administrativo, protección al consumidor, derecho municipal, derecho penal, derecho laboral, derecho corporativo, derecho civil, derecho de familia, derecho registral."
        />
        <meta property="og:url" content="https://www.sbconsultorescorporativos.com.pe" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.sbconsultorescorporativos.com.pe" />
      </Head>
      <main className={styles.main}>
        {loading ? (
          <Loading />
        ) : (
          <section className={styles.containerMain}>
            <Hero id="hero" />
            <Nosotros id="nosotros" />
            <Presentation />
            <Services id="servicios" />
            <ItemServices />
            <Contact id="contacto" />
            <Footer />
          </section>
        )}
        <span className={styles.span}></span>
      </main>
    </>
  );
}
