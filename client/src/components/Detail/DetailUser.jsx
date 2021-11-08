import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./detail.module.css";
// import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { getDetailCourses } from '../../redux/actions/getDetailCourses';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Loading from '../Loading/Loading'


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CourseDetail(props) {

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const courseDetailed = useSelector((state) => state.getDetails.getCourseDetail)
  console.log(courseDetailed)


    useEffect(() => { 
        dispatch(getDetailCourses(id)) // eslint-disable-next-line
    },[dispatch]);



  return (
    <div>
      <div className={styles.bkg}>
        <div>
        <NavBar/> <br />
          <br />
          <br/>
        </div> 
        {Object.keys(courseDetailed).length ? (
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
              url='https://youtu.be/aQS7kaje-24?list=PL4cUxeGkcC9ht1OMQPhBVKAb2dVLhg-MJ'
              className='react-player'
              playing
              width='750px'
              height='550px'
              />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                  <Typography variant="body2" align='left' color="text.secondary">
                    {courseDetailed.categories.map(el => el.name + (' '))}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div" textAlign="center">
                      {courseDetailed.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom textAlign="center">
                      {courseDetailed.description}
                    </Typography>
                    <Typography variant="body2" align='left' color="text.secondary">
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="left"
                    >
                    </Typography>
                  </Grid>
                  <Grid item align="left">
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
          <br/>
        </div>) : <Loading />
           }
        <Footer />
      </div>
    </div>
  );
}
