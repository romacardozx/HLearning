import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./detail.module.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
// import { style } from "@mui/system";
// import { Component } from "react";
// import ReactPlayer from "react-player";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { getDetailCourses } from '../../actions/getDetailCourses';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import Loading from '../Loading/Loading'

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CourseDetail(props) {

  const dispatch = useDispatch();
  // const { id } = useParams();
  const history = useHistory();

  const courseDetailed = useSelector((state) => state.getCourseDetail)

    useEffect(() => { 
        dispatch(getDetailCourses(props.match.params.id))
    });

  const handleBuy = () => history.push("/payment");

  return (
    <div>
      <div>
        <div>
        <NavBar /></div> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {Object.keys(courseDetailed).length ? (
        <div>
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
            <Grid container spacing={1}>
              <Grid>
                <ButtonBase>
                  <Img
                    alt="complex"
                    src={courseDetailed.img}
                    width="550px"
                    height="350px"
                  />
                  {/* <ReactPlayer
              url='https://youtu.be/aQS7kaje-24?list=PL4cUxeGkcC9ht1OMQPhBVKAb2dVLhg-MJ'
              className='react-player'
              playing
              width='550px'
              height='350px'
              /> */}
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Rating name="read-only" readOnly value={courseDetailed.score} />
                    <Typography gutterBottom variant="h3" component="div">
                      {/* Tailwind Just in Time */}
                      {courseDetailed.title}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      {/* In this Tailwind JIT tutorial series you'll learn how to
                      use the Just in Time compiler for better performance
                      during development. */}
                      {courseDetailed.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {/* Duration: 38min */}
                      {courseDetailed.duration}
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="left"
                    >
                      <Link className={styles.links} to="/courses">
                        {/* FrontEnd */}
                        {courseDetailed.categories[0]}
                      </Link>
                      <Link className={styles.links} to="/courses">
                        {/* Css */}
                        {courseDetailed.categories[1]}
                      </Link>
                      <Link className={styles.links} to="/courses">
                        {/* UI */}
                        {courseDetailed.categories[2]}
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item align="left">
                    <Typography variant="body2">
                      <button className={styles.btn} onClick={handleBuy}>
                        <span className={styles.parpadea}>Buy now!</span>
                      </button>
                      <IconButton>
                        <AddShoppingCartIcon />
                          <Typography> Agregar al carrito</Typography>
                    </IconButton>
                    </Typography>
                  </Grid>
                  {/* <Grid item align="right"> */}
                    {/* <Typography sx={{ cursor: "pointer" }} variant="body2">
                      <button className={styles.btn}>Add to cart</button>
                    </Typography> */}
                    {/* <IconButton>
                        <AddShoppingCartIcon />
                          <Typography> Agregar al carrito</Typography>
                    </IconButton> */}
                  {/* </Grid> */}
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="div">
                    {/* $500.00 */}
                    {courseDetailed.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>) : <Loading />
           }
        <Footer />
      </div>
    </div>
  );
}

// sx={{ width: 128, height: 128 }}