import "./styleViewBase.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function ViewBase({carousel, content}) {
    return (
        <div className="base-container">
            <div className={ carousel? "header-container with-carousel" : "header-container"}>
                <div className="navBar-container"><NavBar/></div>
                {carousel &&<div className="carousel-container">{ carousel }</div>}
            </div>
            <div className="body-container">
               <div >{content}</div>
            </div>
            <div className="footer-container"><Footer/></div>
        </div>
    );
}