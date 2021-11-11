import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { useParams } from "react-router-dom"; */
import { Link } from "react-router-dom";
import { getUserById } from "../../redux/actions/getUserById";
/* import { getOrderById } from "../../redux/actions/getOrderById"; */
/* import { getCourseByName } from "../../redux/actions/getCourseByName"; */
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
/* import Rating from "@mui/material/Rating"; */
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
/* import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit"; */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
/* import { getAllCourses } from "../../redux/actions/getAllCourses"; */

export default function UserProfile() {
  const dispatch = useDispatch();
  /* const { id } = useParams(); */
  const User = useSelector((state) => state.getUser.getUserId);
  /* const course = User.courses.title; */

  useEffect(() => {
    dispatch(getUserById("6186d90a521fdc29a93ec244"));
  }, [dispatch]);

  /* const getOrderId = useSelector((state) => state.getOrder.getOrderId); */
  /* const getCourseName = useSelector((state) => state.getCourses.getAllCourses); */
  /* console.log("USER", User);*/
  console.log("COURSES", User.courses);

  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Paper elevation={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              textAlign="left"
              variant="h5"
              color="text.primary"
              m={5}
            >
              <b>Información</b>
            </Typography>
            {/* <Box display="flex" justifyContent="flex-end" width="100%" mr={15}>
              <IconButton
                color="primary"
                aria-label="edit"
                onClick={handleOpenProfile}
              >
                <EditIcon />
              </IconButton>
            </Box> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  m: 5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background:
                      "linear-gradient(82deg, rgba(2,0,36,1) 0%, rgba(9,73,121,0.9948354341736695) 76%, rgba(0,212,255,1) 100%)",
                    p: 10,
                    borderRadius: 3,
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{ width: 200, height: 200, marginLeft: 3 }}
                    src={User.pictures}
                    alt={User.name}
                  />
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Nombre: {User.name}</b>
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b>Email: {User.email}</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: 450,
                  }}
                >
                  <Typography
                    textAlign="center"
                    variant="h5"
                    color="text.primary"
                  >
                    <b>Mis cursos:</b>
                  </Typography>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={5}
                    mb={5}
                  >
                    {User.courses?.length ? (
                      User.courses.map((c, index) => (
                        <Card
                          key={index}
                          sx={{ maxWidth: 270, minWidth: 100 }}
                          elevation={6}
                          align="center"
                        >
                          {/* <CardActionArea
                            component={Link}
                            to={`/mycourses/${c._id}`}
                          > */}
                          <Typography
                            sx={{ mb: 1 }}
                            paddingLeft={1}
                            variant="h6"
                          >
                            {c.title}
                          </Typography>
                          <CardMedia
                            component="img"
                            height="180"
                            image={c.img}
                            alt="img video"
                          />
                          <CardContent>
                            {/*  <Rating name="read-only" readOnly value={score} /> */}
                          </CardContent>
                          {/* <Typography
                              textAlign="center"
                              variant="h5"
                              component="div"
                              noWrap={true}
                            >
                              DISPONIBLE!!
                            </Typography> */}
                          {/* </CardActionArea> */}
                          <Button
                            variant="contained"
                            size="medium"
                            component={Link}
                            to={`/mycourses/${c._id}`}
                            endIcon={<AddIcon size="large" />}
                          >
                            VER MIS VIDEOS
                          </Button>
                        </Card>
                      ))
                    ) : (
                      <Typography
                        textAlign="center"
                        variant="h5"
                        component="div"
                        noWrap={true}
                      >
                        NO HAS COMPRANDO NINGUN CURSO
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
              <hr style={{ width: "90%" }} />
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
