import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ReviewCard(){
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

