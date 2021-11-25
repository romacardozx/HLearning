import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import s from "./contact.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const { REACT_APP_EMAIL_TEMPLATE  } = process.env ;
const { REACT_APP_EMAIL_USER } = process.env ;
const template = REACT_APP_EMAIL_TEMPLATE ;
const user = REACT_APP_EMAIL_USER ;

const Result = () => {
  return (
    <p>
      Tu mensaje ha sido enviado satisfactoriamente. Te contactaremos pronto!
    </p>
  );
};
export default function Contact() {
  const [result, showresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        template,
        e.target,
        user
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };
  return (
    <div>
      <NavBar />
      <div className={s.body}>
        <div className={s.contactme} id="contact">
          <div className={s.contactOverlay}>
            <div className={s.container}>
              <div className={s.form}>
                <form action="" onSubmit={sendEmail} className={s.contForm}>
                  <div className={s.formWord}>
                    <h2>Contacto</h2>
                    <span>Nombre Completo</span>
                    <br />
                    <input type="text" name="fullName" required />
                    <br />
                    <span>Numero de telefono</span>
                    <br />
                    <input type="number" name="phone" required />
                    <br />
                    <span>Ingresa tu Email</span>
                    <br />
                    <input type="email" name="email" required />
                    <br />
                    <span>Ingrese su duda o inconveniente</span>
                    <br />
                    <textarea
                      className={s.textarea}
                      type="text"
                      name="message"
                      required
                    />
                    <br />
                  </div>
                  <div className={s.formWords}>
                    <p className={s.parrafito}>
                      Hola como estas! un gusto tenerte por aqui.{" "}
                    </p>
                    <p>
                      Este formulario fue creado para que puedas contactarte con
                      el soporte de HLearning y asi poder ayudarte con tus dudas
                      o inconvenientes.
                    </p>
                    <p>
                      Luego de que completes este formulario, nos pondremos en
                      contacto contigo via Email, te pedimos por favor que nos
                      dejes informacion detallada del problema surgido, para asi
                      poder brindarte una mejor atención! muchisimas gracias!
                    </p>
                    <p>Soporte de HLearning</p>

                    <button>SUBMIT</button>
                    <div className={s.row}>{result ? <Result /> : null}</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
