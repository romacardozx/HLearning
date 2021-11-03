import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/getAllCourses";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Orders from "../Orders/Orders";
import Filters from "../Filters/Filters";
import Stack from "@mui/material/Stack";
import { Grid } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Courses.module.css";

export default function Courses(/* props */) {
  /* const { sx, ...other } = props; */
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
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      <br />
      <div className={styles.page}>
        <Stack spacing={2}>
          <SearchBar />
          <br />
          <div>
            <Stack direction="row" spacing={3}>
              <Orders setCurrentPage={setCurrentPage} />
              <Filters />
            </Stack>
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
            <Grid container spacing={2}>
              {currentCourses?.map((c, i) => (
                <div key={i}>
                  <Grid item xs={12} md={18} lg={12}>
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
        </Stack>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
