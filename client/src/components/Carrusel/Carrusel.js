import React, { useState, useEffect } from "react";
/* import { useSelector } from "react-redux";
import { getCourses5Stars } from "../../actions/getCourses5Stars"; */
import "./Slider.css";
import images from "./coursesProvisorios.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import styles from "../Detail/detail.module.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
/* import { CardActionArea } from "@material-ui/core"; */

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Carrusel() {
  /* const courses5Stars = useSelector((state) => state.getCourses5Stars); */
  const [slideIndex, setSlideIndex] = useState(1);
  function nextSlide() {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  }

  useEffect(() => {
    setTimeout(nextSlide, 3000); // eslint-disable-next-line
  }, [slideIndex]);
  return (
    <div className="container-slider">
      {images.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {/* 
            <CardActionArea
              component={Link}
              /* to={`/courses/${obj.id}`} */
            /* > */}{" "}
            */
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 450,
                elevation: 24,
                flexGrow: 50,
                bottom: 0,
              }}
            >
              <Grid container spacing={1}>
                <Grid>
                  <ButtonBase>
                    <Img
                      alt="complex"
                      src={obj.img}
                      width="450px"
                      height="250px"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Rating name="read-only" readOnly value={obj.score} />
                      <Typography gutterBottom variant="h4" component="div">
                        {obj.title}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {obj.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="left"
                        color="text.secondary"
                      >
                        Duration:{obj.duration}min
                      </Typography>
                      <br />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="left"
                      >
                        <Link className={styles.links} to="/courses">
                          {obj.categories[0]}
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" component="div">
                      ${obj.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            {/*  </CardActionArea> */}
          </div>
        );
      })}
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
