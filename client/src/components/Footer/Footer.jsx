import { Fragment } from "react";
//import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
//import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Help from "@material-ui/icons/Help"
import logo from "../../images/Logo-Blanco.png";
import style from "./Footer.module.css"

export default function Footer() {
  return (
    <Fragment>
      <div className={style.footer}>
        <div className={style.contacto}>
          <div className={style.left_contact}>
            <div className={style.container_left}>
              <VerifiedUser 
              style={{ margin: "7px" }} 
              onClick={()=>window.open('localhost:3000/privacy','_blank')}/> 
              Privacidad
            </div>
            <div className={style.container_left}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Help style={{ margin: "7px" }} 
              onClick={()=>window.open('localhost:3000/frecuent','_blank')}/>
              Frecuentes
            </div>
          </div>

          <div className={style.right_contact}>
            <MailOutlineIcon style={{ margin: "7px" }} onClick={()=>window.open('localhost:3000/contact', '_blank')}/> 
            <Instagram style={{ display: "block", margin: "7px" }} onClick={()=>window.open('https://www.instagram.com/hlearningarg/?hl=es', '_blank')}/>
          </div>
        </div>

        <div className={style.linea} />

        <div className={style.derechos}>© 2021 HLearning.All Rights Reserved</div>

        <div className={style.linea} />

        <div className={style.logo_footer}>
          <img className={style.img} src={logo} alt="logo"/>
        </div>

       </div>
    </Fragment>
  );
}