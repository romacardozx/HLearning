import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/getAllCourses";
/* import { getAllCategories } from "../../redux/actions/getAllCategories"; */
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Orders from "../Orders/Orders";
import Filters from "../Filters/Filters";
import { Grid, Typography } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.getCourses.getAllCourses);

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(4);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses =
    allCourses.length >= 0
      ? allCourses.slice(indexOfFirstCourse, indexOfLastCourse)
      : allCourses;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllCourses());
    /*  dispatch(getAllCategories()); */
  }, [dispatch]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
  }));

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      <div>
        <Grid container direction="column" alignItems="center" justify="center">
          <SearchBar courses={allCourses} />
          <br />
          <div>
            <Grid container direction="row" spacing={3}>
              <Grid item>
                <Orders
                  setCurrentPage={setCurrentPage} /* courses={allCourses} */
                />
              </Grid>
              <Grid item>
                <Filters
                  setCurrentPage={setCurrentPage} /* courses={allCourses} */
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Paginate
              coursesPerPage={coursesPerPage}
              allCourses={allCourses.length}
              paginate={paginate}
            />
          </div>
          <div>
            <Grid container sx={3}>
              {currentCourses.length >= 0 ? (
                <>
                  {currentCourses?.map((c, i) => (
                    <div key={i}>
                      <Grid item xs={2} sm={4} md={4}>
                        <Item sx={{ minWidth: 270 }}>
                          <Card
                            id={c._id}
                            title={c.title}
                            image={c.img}
                            description={c.description}
                            score={c.score}
                            price={c.price}
                          />
                        </Item>
                      </Grid>
                    </div>
                  ))}
                </>
              ) : (
                <Grid>
                  <Typography variant="h2" color="initial">
                    No se encontraron cursos con esa busqueda
                  </Typography>
                </Grid>
              )}
            </Grid>
          </div>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
