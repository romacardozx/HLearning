import React from "react";
import styles from "./privacy.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Frequent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <NavBar />
        <div>
          <h3 className={styles.title}>POLÍTICAS DE PRIVACIDAD</h3>
          <p className={styles.text}>
            La seriedad comercial, la trayectoria y el sólido respaldo de
            HLearning, son la garantía de un estricto compromiso con usted: la
            completa reserva de los datos que nos suministre. Es decir que esa
            información no será vendida, alquilada o intercambiada con terceros.{" "}
          </p>
          <p className={styles.text}>
            Si el titular de datos personales utiliza los servicios de
            HLearning, en consecuencia presta su consentimiento, conforme a lo
            establecido en la ley 25.326 de Protección de Datos Personales, a
            tenor de lo cual declara conocer y aceptar, para que sus datos
            personales integren la base de datos de HLearning, otorgando por la
            presente autorización expresa para: (i) el tratamiento automatizado
            de dichos datos e información y (ii) su utilización para servicios
            actuales o futuros, que desarrolle HLearning.
          </p>
          <p className={styles.text}>
            El titular de los datos personales tiene la facultad de ejercer el
            derecho de acceso a los mismos en forma gratuita y a intervalos no
            inferiores a seis meses, salvo que se acredite tener un interés
            legítimo al efecto conforme lo establecido en el artículo 14, inciso
            3 de la Ley Nº 25.
          </p>
          <p className={styles.text}>
            El titular de los datos, tiene además la posibilidad de ejercer los
            derechos de rectificación, y supresión de los datos conforme
            artículo 6, inciso “e” de la Ley 25.326. Los datos solicitados como
            obligatorios son aquellos que sirven para la identificación del
            usuario conforme articulo 6, inciso “c”, la inexactitud o la
            negativa a completar los cambios obligatorios, serán la no
            posibilidad de acceso al sistema de servicios on line de HLearning,
            conforme al articulo 6, inciso “d”.
          </p>
          <p className={styles.text}>
            La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de
            Control de la Ley 25.326, tiene la atribución de atender las
            denuncias y reclamos que se interpongan con relación al
            incumplimiento de las normas sobre protección de datos personales.
          </p>
          <p className={styles.text}>
            De esta manera, HLearning.com.ar también garantiza su confianza y su
            preferencia. Por eso, ahora solo nos resta decirle gracias una vez
            mas por estar aquí, por visitarnos y por elegirnos.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
