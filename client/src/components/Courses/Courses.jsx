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
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.getAllCourses);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(4);
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
          <SearchBar />
          <br />
          <div>
            <Grid container direction="row" spacing={3}>
              <Grid item>
                <Orders setCurrentPage={setCurrentPage} />
              </Grid>
              <Grid item>
                <Filters />
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
            <Grid container direction="row" spacing={1}>
              {currentCourses?.map((c, i) => (
                <div key={i}>
                  <Grid item xs={2} sm={4} md={4} spacing={1}>
                    <Item sx={{ minWidth: 270 }} spacing={1}>
                      <Card
                        spacing={1}
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
