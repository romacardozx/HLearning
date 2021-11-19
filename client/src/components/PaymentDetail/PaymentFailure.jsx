import React from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import styles from "./payment.module.css";



export default function PaymentDetail() {


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
              <Typography gutterBottom variant="h4" component="div" textAlign="center" color="red">
              ✗¡SU COMPRA NO HA SIDO REALIZADA!✗
              </Typography>
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                    Por favor intente nuevamente! <br />
                    En caso de persistir el error comuniquese con nosotros en nuestro formulario de contacto 📩
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
          <Typography textAlign="center">
            <Link to='/courses' className={styles.link}>
              <Button variant="contained" size="medium">
                Ver cursos disponibles!
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