import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./Card.module.css";
import CardProv from "../../images/CardProv.png";

export default function CardCourse(title, description, score, img) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className={style.container}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image={CardProv}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </div>
    </Card>
    /* 
      <div className={style.container}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image="https://cdn.webdesigntips.blog/wp-content/uploads/2018/03/10-curso-de-html5-y-css3-banner-con-fondo-de-imagen-fija-css3-efecto-de-movimiento-y-scroll.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
    </Card> */
  );
}
