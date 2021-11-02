import "./styleViewBase.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Paso  from "../../images/Paso.png";


export default function ViewBase({ carousel, content }) {
  return (
    <div className="base-container">
      <div
        className={
          carousel ? "header-container with-carousel" : "header-container"
        }
      >
        <div className="navBar-container">
          <NavBar />
        </div>
        {carousel && <div className="carousel-container">{carousel}</div>}
      </div>
      <div className="body-container">
        <img src={Paso} alt="" width="1390px" height="900px"/>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}
