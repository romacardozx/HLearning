import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './detail.module.css';
import {Link} from 'react-router-dom';
import Rating from "@mui/material/Rating";
import { style } from '@mui/system';
import { Component } from 'react'
import ReactPlayer from 'react-player'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CourseDetail() {

    return (
        <div>
            <div>
              {/* arreglar NavBar */}
                <NavBar/> <br/><br/><br/><br/><br/><br/><br/> 
        <div>
      <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1200, elevation: 1, flexGrow: 50, bottom: 0 }}>
        <Grid container spacing={1}>
          <Grid>
            <ButtonBase >
             <Img alt="complex" src='https://cdn.fs.teachablecdn.com/6iMO3BaS9GF42GIAlWPQ' width='550px' height='350px' /> 
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
              <Rating name="read-only" readOnly value= '4'/>
                <Typography gutterBottom variant="h3" component="div">
                  Tailwind Just in Time
                </Typography>
                <Typography variant="h5" gutterBottom>
                In this Tailwind JIT tutorial series you'll learn how to use the Just in Time compiler for better performance during development.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Duration: 38min
                </Typography>
                <br/>
                <Typography variant="body2" color="text.secondary" align="left">
                  <Link className={styles.links} to='/courses'>FrontEnd</Link> 
                  <Link className={styles.links}  to='/courses'>Css</Link> 
                  <Link className={styles.links} to='/courses'>UI</Link> 
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                 <button className={styles.btn}><span className={styles.parpadea}>Buy now!</span></button>
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <button className={styles.btn}>Add to cart</button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div">
                $500.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper><br/><br/><br/><br/><br/>
      </div>

      <Footer/>
     
              </div>
        </div>
    );
  }

  // sx={{ width: 128, height: 128 }}