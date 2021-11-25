import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderById } from '../../redux/actions/getOrderById';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { style } from '@mui/system';
import styles from "./payment.module.css";



export default function PaymentDetail() {

  const dispatch = useDispatch();
  const { id } = useParams();

  const paymentDetail = useSelector((state) => state.getOrder.getOrderId)

  useEffect(() => {
    dispatch(getOrderById(id))
  }, [dispatch]);

  return (
    <div>
      <div className={styles.bkg}>
        <div>
          <NavBar />
          <br />
          <br />
          <br />
        </div>
        <div>
          <Paper sx={
            {
              p: 2,
              margin: "auto",
              maxWidth: 770,
              elevation: 24,
              flexGrow: 50,
              bottom: 0,
            }
          }>
            <Grid item xs container direction="column"
              spacing={2}><br />
              <Typography gutterBottom variant="h4" component="div" textAlign="center" color="green">
                ✓¡SU COMPRA HA SIDO REALIZADA!✓
              </Typography>
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                  {
                    paymentDetail.payment
                  } </Typography>
                   <p>Detalle de compra:</p>
                <Typography variant="h6" gutterBottom textAlign="center">
                  {
                    paymentDetail?.courses?.map(c => {
                      return (
                        <div>
                          <p>{
                            c.title
                          }</p>
                        </div>
                      )
                    })
                  } </Typography>
                <Typography variant="h6" gutterBottom textAlign="center">
                  Valor: ${
                    paymentDetail.price
                  } </Typography>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
          <Typography textAlign="center">
            <Link to='/user' className={styles.link}>
              <Button variant="contained" size="medium">
                Ver mis cursos!
              </Button>
            </Link>
          </Typography>
          <br />
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    </div>
  )
}
