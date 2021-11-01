import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../actions/getAllCourses";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Orders from "../Orders/Orders";
import Filters from "../Filters/Filters";
import { Grid } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Courses.module.css";

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.getAllCourses);
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

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);


  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className={styles.page}>
        <SearchBar />
        <div className={styles.selects}>
          <br />
          <Orders setCurrentPage={setCurrentPage} />
          <br />
          <Filters />
        </div>
        <br />
        <div>
          <Paginate
            coursesPerPage={coursesPerPage}
            allCourses={allCourses.length}
            paginate={paginate}
          />
        </div>
        <br />
        <div>
          <Grid container spacing={3}>
            {currentCourses?.map((c, i) => (
              <div key={i}>
                <Grid item xs={4} md={6} lg={4}>
                  <Card
                    id={c._id}
                    title={c.title}
                    image={c.img}
                    description={c.description}
                    score={c.score}
                    price={c.price}
                  />
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
