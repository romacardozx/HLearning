import React from "react";
import styles from "./Courses.module.css";
/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from ".../actions/getAllCourses";
import { Link } from "react-router-dom"; */
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { /* Container, */ Grid } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";

export default function Courses() {
  /* const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courses);
  function handleSelectByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrderName("Order" + e.target.value);
  } */

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className={styles.page}>
        <div className={styles.containerLat}>
          <SearchBar />
          <div>
            <span className="span">Ordenar por</span>
            <select /* onChange={(n) => handleSelectByName(n)} */>
              <option value="default">Nombre</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <span className="span">Ordenar por</span>
            <select /* onChange={(s) => handleSelectByScore(s)} */>
              <option value="All">Validaciones</option>
              <option value="Asc">Mayor a menor</option>
              <option value="Desc">Menor a mayor</option>
            </select>
            <span className="span">Ordenar por</span>
            <select /* onChange={(s) => handleSelectByPrice(s)} */>
              <option value="All">Precio</option>
              <option value="Asc">Mas caro</option>
              <option value="Desc">Mas barato</option>
            </select>
          </div>
          <div>
            <span className="span">Filtrar por</span>
            <select /* onChange={(e) => handleSelectTypeOfDiet(e)} */>
              <option value="default">Categoria</option>
              <option value="cat A">Categoria A</option>
              <option value="cat B">Categoria B</option>
              <option value="cat C">Categoria C</option>
              <option value="cat D">Categoria D</option>
            </select>
            <span className="span">Filtrar por</span>
            <select /* onChange={(e) => handleSelectTypeOfDiet(e)} */>
              <option value="default">Duración</option>
              <option value="low">1-5 horas</option>
              <option value="medium">5-20 horas</option>
              <option value="high">+20 horas</option>
            </select>
          </div>
        </div>
        <div className={styles.containerGrid}>
          <div className={styles.paginate}>
            <Paginate
            /* coursesPerPage={coursesPerPage}
              allCourses={allCourses.length}
              paginate={paginate} */
            />
          </div>
          <div>
            {/*  <Container> */}
            <Grid container spacing={3}>
              <Grid item xs={4} md={6} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={4} md={6} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={4} md={6} lg={4}>
                <Card />
              </Grid>
            </Grid>
            {/*  </Container> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
