import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getReviewsById } from '../../redux/actions/getReviewsById';
import calculeScore from '../../utils/calculeScore';
import Loading from '../Loading/Loading'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ReviewCard(props){

  const dispatch = useDispatch();
  const { id } = useParams();

  const reviewsId = useSelector((state) => state.getReviews)

  useEffect(() => {
    dispatch(getReviewsById(id)) 
  }, [dispatch]);

    return (
    <Grid align="center">
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Avatar sx={{ width: 100, height: 100 }} />
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Rating name="read-only" readOnly value={3} />
        <Typography variant="body2" color="text.secondary">
          No siento que tenga las herramientas para poder aplicar
          Material UI por mi cuenta en un proyecto individual
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  
  );
};
