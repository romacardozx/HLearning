import "./styleViewBase.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


export default function ViewBase({ carousel, courses, steps }) {
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
      <div className="title">
        <h2>⇩ CURSOS DESTACADOS ⇩</h2>
      </div>
      <div>
        <div>{courses}</div>
      </div>
      <div className="title">
        <h2>⬇ ¿COMO USAR HLEARNING? ⬇</h2>
      </div>
      <div align="center">
        <div className="prueba">{steps}</div>
      </div>
      <div className="title">
        <h2>⇩ EMPRESAS ASOCIADAS ⇩</h2>
      </div>
      <div className="prueba">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
