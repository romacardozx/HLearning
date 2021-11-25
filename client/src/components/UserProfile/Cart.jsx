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
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";

export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById("6186d90a521fdc29a93ec257"));
    dispatch(getOrderById("6187494b521fdc29a93ec291"));
  }, [dispatch]);

  const getUserId = useSelector((state) => state.getUser.getUserId);
  const getOrderId = useSelector((state) => state.getOrder.getOrderId);

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
