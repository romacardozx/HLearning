import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../actions/getAllCourses";
/* import { getAllCategories } from "../../actions/getAllCategories"; */
/* import { orderByName } from "../../actions/orderByName";
import { orderByScore } from "../../actions/orderByScore";
import { orderByPrice } from "../../actions/orderByPrice"; */
/* import { filterByCategories } from "../../actions/gfilterByCategories";
import { filterByDuration } from "../../actions/gfilterByDuration"; */
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Orders from "../Orders/Orders";
import Filters from "../Filters/Filters";
import { /* Container, */ Grid } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Courses.module.css";

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.getAllCourses);
  /* const categories = useSelector((state) => state.getAllCategories); */
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(3);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = allCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* const [orderName, setOrderName] = useState("");
  const [orderScore, setOrderScore] = useState("");
  const [orderPrice, setOrderPrice] = useState(""); */

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  /* useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]); */

  /* function handleSelectByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrderName("Order" + e.target.value);
  }

  function handleSelectByScore(e) {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setCurrentPage(1);
    setOrderScore("Order" + e.target.value);
  }

  function handleSelectByPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
    setOrderPrice("Order" + e.target.value);
  } */

  /* function handleSelectCategories(e) {
    e.preventDefault();
    dispatch(filterByCategories(e.target.value));
  }

  function handleSelectDuration(e) {
    e.preventDefault();
    dispatch(filterByDuration(e.target.value));
  }
 */
  return (
    <div>
      <header>
        <NavBar /> <br />
        <br />
        <br />
        <br />
        <br />
      </header>
      <div className={styles.page}>
        <div className={styles.containerLat}>
          <SearchBar /> <br />
          <div>
            <Orders
              setCurrentPage={setCurrentPage}
              /* setOrderName={setOrderName}
              setOrderScore={setOrderScore}
              setOrderPrice={setOrderPrice} */
            />
            {/*  {<span className="span">Ordenar por</span>
            <select
              defaultValue="default" onChange={(n) => handleSelectByName(n)}
            >
              <option value="default" disabled="disabled">
                Nombre
              </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <span className="span">Ordenar por</span>
            <select
              defaultValue="default" onChange={(s) => handleSelectByScore(s)}
            >
              <option value="default" disabled="disabled">
                Popularidad
              </option>
              <option value="Asc">Mayor popularidad</option>
              <option value="Desc">Menor popularidad</option>
            </select>
            <span className="span">Ordenar por</span>
            <select
              defaultValue="default" onChange={(p) => handleSelectByPrice(p)}
            >
              <option value="default" disabled="disabled">
                Precio
              </option>
              <option value="Asc">Mayor precio</option>
              <option value="Desc">Menor precio</option>
            </select>} */}
          </div>
          <br />
          <div>
            <Filters />
            {/*  <span className="span">Filtrar por</span>
            <select
              defaultValue="default" onChange={(c) => handleSelectCategorie(c)}
            >
              <option value="default" disabled="disabled">
                Categoria
              </option>
              <option value="cat A">Categoria A</option>
              <option value="cat B">Categoria B</option>
              <option value="cat C">Categoria C</option>
              <option value="cat D">Categoria D</option>
            </select> 
            <span className="span">Filtrar por</span>
            <select
              defaultValue="default" onChange={(d) => handleSelectDuration(d)}
            >
              <option value="default" disabled="disabled">
                Duración
              </option>
              <option value="low">1-5 horas</option>
              <option value="medium">5-10 horas</option>
              <option value="high">+10 horas</option>
        </select>*/}
          </div>
        </div>
        <div className={styles.containerGrid}>
          <div className={styles.paginate}>
            <Paginate
              coursesPerPage={coursesPerPage}
              allCourses={allCourses.length}
              paginate={paginate}
            />
          </div>
          <br />
          <br />
          <div>
            {/*  <Container> */}
            <Grid container spacing={3}>
              {currentCourses?.map((c) => (
                <Grid item xs={4} md={6} lg={4} key={c.id}>
                  <Card
                    id={c.id}
                    title={c.title}
                    image={
                      c.img ? c.img : "https://assets.soyhenry.com/logoOG.png"
                    }
                    description={c.description}
                    score={c.score}
                    price={c.price}
                  />
                </Grid>
              ))}
              {/*  <Grid item xs={4} md={6} lg={4}>
                <Card />
                </Grid>
              <Grid item xs={4} md={6} lg={4}>
              <Card />
              <Grid item xs={4} md={6} lg={4}>
                <Card />
              </Grid>
            </Grid> */}
            </Grid>
            {/*  </Container> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
