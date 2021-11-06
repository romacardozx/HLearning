import React, { /* useState, */ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesScore } from "../../redux/actions/getCoursesScore";
import Card from "../Card/Card";
import "./Slider.css";
//import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
//import ButtonBase from "@mui/material/ButtonBase";
//import styles from "../Detail/detail.module.css";
//import { Link } from "react-router-dom";
//import Rating from "@mui/material/Rating";
/* import { CardActionArea } from "@material-ui/core"; */

/* const Img = styled("img")({ 
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
}); */

export default function Carrusel() {
  const dispatch = useDispatch();

 /*  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
  })); */

  const coursesTop = useSelector((state) => state.getCourses.setAllCourses);

  useEffect(() => {
    dispatch(getCoursesScore(5));
  }, [dispatch]);

  return (
    <div className="container-slider">
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1200,
          elevation: 24,
          flexGrow: 50,
          bottom: 0,
        }}
      >
        {coursesTop.length > 0 ? (
          coursesTop.map((c, index) => (
            <div key={index}>
              <Grid container>
                <Grid item sx={{ minWidth: 270 }} xs={2} sm={4} md={4}>
                  {/* <Item sx={{ minWidth: 270 }}> */}
                  <Card
                    id={c._id}
                    title={c.title}
                    image={c.img}
                    description={c.description}
                    score={c.score}
                    price={c.price}
                  />
                  {/* </Item> */}
                </Grid>
              </Grid>
            </div>
          ))
        ) : (
          <Typography>Cargando</Typography>
        )}
      </Paper>
    </div>
  );
}

/* 
return (
    <div className="container-slider">
    {images.map((obj, index) => {
      return (
        <div
          key={index}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
        >
          <img src={obj.image} alt={obj.adress} />
        </div>
      );
    })}
  </div>
); */

/* 
            <CardActionArea
              component={Link}
              /* to={`/courses/${obj.id}`} */
/* > */
