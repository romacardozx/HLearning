import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./detail.module.css";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { getDetailCourses } from "../../redux/actions/getDetailCourses";
import { getUserInfo } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";
import Button from "@mui/material/Button";
import calculeScore from "../../utils/calculeScore";
import MercadoPago from "../../redux/actions/MercadoPago";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

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

  const isAdmin = useSelector((state) => state.userReducer.isAdmin);

  const courseDetailed = useSelector(
    (state) => state.getDetails.getCourseDetail
  );
  console.log(courseDetailed);

  useEffect(() => {
    dispatch(getDetailCourses(id)); // eslint-disable-next-line
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleBuy = () => history.push("/checkout");

  return (
    <div>
      <div className={styles.bkg}>
        <div>
          <NavBar />
          {isAdmin ? (
          <IconButton
                color="primary"
                aria-label="edit"
                component={Link}
                to={`/coursedetail/${id}`}
              > 
              Edit course
              <EditIcon />
              </IconButton>
            
          ) : (
            ""
          )}

          <br />
          <br />
          <br />
        </div>
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
                      width="450px"
                      height="300px"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Rating
                        name="read-only"
                        readOnly
                        value={calculeScore(courseDetailed.score)}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {courseDetailed.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="left"
                        color="text.secondary"
                      >
                        {courseDetailed.categories.map((el) => el.name + " ")}
                      </Typography>
                      <br />
                      <Typography variant="h6" gutterBottom>
                        {courseDetailed.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="left"
                        color="text.secondary"
                      >
                        Duracion:{" " + courseDetailed.duration}
                      </Typography>
                      <br />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="left"
                      ></Typography>
                    </Grid>
                    <Grid item align="left">
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        <Button
                          variant="contained"
                          size="medium"
                          onClick={() =>
                            dispatch(MercadoPago("6192bc7ccaeaefa81437d425"))
                          }
                        >
                          Comprar ahora!
                        </Button>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" component="div">
                      ${courseDetailed.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <br />
            <br />
            <br />
            <br />
          </div>
        ) : (
          <Loading />
        )}
        <Footer />
      </div>
    </div>
  );
}

// sx={{ width: 128, height: 128 }}
//? EJEMPLO DE ONCLICK DE MERCADO PAGO
//!  onClick={() => dispatch(MercadoPago("id"))}>
