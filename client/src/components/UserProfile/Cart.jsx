import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { getUserById } from "../../redux/actions/getUserById";
import { getOrderById } from "../../redux/actions/getOrderById";
import s from "./Cart.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
/* import { CardActionArea } from "@material-ui/core"; */
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
//import { getCourseByName } from '../../redux/actions/getCourseByName';

export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById("6186d90a521fdc29a93ec257"));
    dispatch(getOrderById("6187494b521fdc29a93ec291"));
    // dispatch(getCourseByName("Vue 3 with TypeScript Jump Start"))
  }, [dispatch]);

  const getUserId = useSelector((state) => state.getUser.getUserId);
  const getOrderId = useSelector((state) => state.getOrder.getOrderId);
  //const getAllCourses = useSelector(state => state.getCourses.getAllCourses)

  console.log(getUserId, "user traido por id");
  console.log(getOrderId, "order traida por id");
  //console.log(getAllCourses, 'order traida por id');

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={s.body}>
        <div className={s.contactme}>
          <div className={s.contactOverlay}>
            <div className={s.container}>
              <div className={s.form}>
                <div className={s.contForm}>
                  <div className={s.formWord}>
                    <Card sx={{ maxWidth: 270, minWidth: 100 }} elevation={6}>
                      <Typography sx={{ mb: 1 }} paddingLeft={1} variant="h6">
                        Vue 3 with TypeScript Jump Start
                      </Typography>
                      <CardMedia
                        component="img"
                        height="180"
                        image="https://cdn.fs.teachablecdn.com/1M8MbfrSQme0aCzmJFmQ"
                        alt="img curso"
                      />
                      <CardContent>
                        <Rating name="read-only" readOnly value="5" />
                      </CardContent>
                      <Typography
                        textAlign="center"
                        variant="h5"
                        component="div"
                        noWrap={true}
                      >
                        $2700
                      </Typography>
                    </Card>
                  </div>
                  <div className={s.formWord}>
                    <h1>Comprar</h1>
                    <Button
                      sx={{ borderRadius: 3, minWidth: 300, marginTop: 0 }}
                      variant="outlined"
                      onClick={() => {
                        alert("Tu pago está siendo procesado");
                      }}
                    >
                      Mercado Pago
                    </Button>
                    <br />
                    <br />
                    <h2>Cursos:</h2>
                    <h3>Vue 3 with TypeScript Jump Start: $2700</h3>
                    <br />
                    <br />
                    <h2>Total: $2700</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

// json del order
// {
//     "user": "Benito Luque",
//     "price": 2700,
//     "courses": ["Vue 3 with TypeScript Jump Start"],
//     "status": "Confirmed",
//     "payment": true
//  },

// json de courses
// {
//     "_id": {
//       "$oid": "61844faf2d9146900b650f1e"
//     },
//     "title": "Vue 3 with TypeScript Jump Start",
//     "description": "Hey gang, in this Vue 3 & TypeScript jump start tutorial I'll show you how to get up and running with Vue 3 using TypeScript. In this lesson we'll discuss the benefits of TS & set the initial project up.",
//     "img": "https://cdn.fs.teachablecdn.com/1M8MbfrSQme0aCzmJFmQ",
//     "score": "5",
//     "duration": "00:59:26",
//     "categories": ["FrontEnd"],
//     "price": 900,
//     "videos": [
//       {
//         "name": "Intro & Setup",
//         "link": "https://youtu.be/JfI5PISLr9w?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "8:53"
//       },
//       {
//         "name": "Vue Components using TypeScript",
//         "link": "https://youtu.be/UDAVj_vlAr8?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "9:50"
//       },
//       {
//         "name": "Composition API & TypeScript",
//         "link": "https://youtu.be/H-hXNym2CK8?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "11:54"
//       },
//       {
//         "name": "Types & Props",
//         "link": "https://youtu.be/GdWrYfDfqRE?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "9:24"
//       },
//       {
//         "name": "Functions",
//         "link": "https://youtu.be/usSBsgWNUZk?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "7:54"
//       },
//       {
//         "name": "Computed Values",
//         "link": "https://youtu.be/TwN36HU-NQM?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "5:27"
//       },
//       {
//         "name": "Hylia Font & Final Styles",
//         "link": "https://youtu.be/6n4myAZwdxg?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "6:04"
//       }
//     ],
//     "students": []
//   }
