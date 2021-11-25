import * as React from "react";
import { getDetailCourses } from "../../redux/actions/getDetailCourses";
import { getDetailCoursesYouBought } from "../../redux/actions/getDetailCoursesYouBought";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./detail.module.css";
import { Link } from "react-router-dom";


import Loading from "../Loading/Loading";
import Button from '@mui/material/Button';
import style from "./detail.module.css";
import ReviewCard from "../Review/ReviewCard";
import ReactPlayer from "react-player";




export default function CourseDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const courseDetailed = useSelector(
    (state) => state.getDetails.getCourseYouBoughtDetail
  );

  useEffect(() => {
    dispatch(getDetailCoursesYouBought(id));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.bkg}>
        <div>
          <NavBar /> <br />
          <br />
          <br />
        </div>
        { Object.keys(courseDetailed).length ? (
          <div>
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 770,
                elevation: 24,
                flexGrow: 50,
                bottom: 0,
              }}
            >
              <Grid container spacing={1}>
                <Grid>
                  <ButtonBase>
                    <ReactPlayer
                      url={courseDetailed.videos[0].link}
                      className="react-player"
                      playing
                      width="750px"
                      height="550px"
                      controls="false"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        variant="body2"
                        align="left"
                        color="text.secondary"
                      >
                        {courseDetailed.categories.map((el) => el.name + " ")}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        textAlign="center"
                      >
                        {courseDetailed.title}
                      </Typography>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        {courseDetailed.description}
                      </Typography>
                      <br />
                      <Typography textAlign="center">
                        <Link to='/review' className={style.link}>
                          <Button variant="contained" size="medium">
                            ¿Que te parecio el curso?
                          </Button>
                        </Link>
                      </Typography>
                      <br />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <br />
            <br />
            <br />
        </div>
        ) : (
          <Loading />
        )}
        <ReviewCard />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}