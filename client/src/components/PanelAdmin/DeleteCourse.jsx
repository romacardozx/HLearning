import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/getAllCourses";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "./CardDelete";
import Paginate from "../Paginate/Paginate";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

import { Grid, Typography } from "@material-ui/core";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { deleteCourse } from "../../redux/actions/deleteCourse";
import { maxWidth } from "@mui/system";

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.getCourses.getAllCourses);
  const [currentId, setCurrentId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage /* setCoursesPerPage */] = useState(6);
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
  }, [dispatch, currentId]);

  // function handleDelete(id){
  //          dispatch(deleteCourse(id))
  //          setCurrentId(id)
  //       }

  function handleDelete(id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir esto..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourse(id));
        Swal.fire({
          title: "Borrado!",
          text: `El curso ha sido borrado.`,
          imageUrl: "https://i.gifer.com/7efs.gif",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        setCurrentId(id);
      }
    });
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(4.5),
  }));

  return (
    <div>
      <NavBar />
      <div>
        <Grid container direction="column" alignItems="center">
          <br />
          <div>
            <Typography variant="h4" align="center">
              CURSOS ACTUALES
            </Typography>
            <br />
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              {currentCourses.length >= 0 ? (
                <>
                  {currentCourses?.map((c, i) => (
                    <div key={i}>
                      <Grid>
                        <Item sx={{ minWidth: 300 }}>
                          <Card
                            id={c._id}
                            title={c.title}
                            image={c.img}
                            description={c.description}
                            score={c.score}
                          />
                          <Typography>
                            <Button
                              variant="contained"
                              size="medium"
                              onClick={() => handleDelete(c._id)}
                            >
                              Eliminar curso
                            </Button>
                          </Typography>
                        </Item>
                      </Grid>
                    </div>
                  ))}
                </>
              ) : (
                <p>Loading...</p>
              )}
            </Grid>
            <Paginate
              coursesPerPage={coursesPerPage}
              allCourses={allCourses.length}
              paginate={paginate}
            />
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
