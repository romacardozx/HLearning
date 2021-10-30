import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { yellow } from "@material-ui/core/colors";
/* import style from "./Card.module.css"; */
/* import CardProv from "../../images/CardProv.png"; */

export default function CourseCard(/* title, description, score, img */) {
  return (
    <Card sx={{ maxWidth: 355 }} elevation={9}>
      {/* <div className={style.container}> */}
      <CardHeader
        textAlign="center"
        title="Aprende CSS ahora! curso completo desde cero"
      />
      <CardMedia
        component="img"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ahxxcR2SA-SW1rMpjQzHj5cTwx06LooCGw&usqp=CAU"
        alt="img video"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ¿Queres aprender a programar en Javascript desde cero? Este es el
          curso de javascript desde cero a experto que vas a terminar, te
          prometo que no te vas a aburrir durante el aprendizaje de este curso
          de javascript, vas a aprender javascript fácil
        </Typography>
      </CardContent>
      <Stack direction="row">
        <StarIcon sx={{ color: yellow[800] }} />
        <StarIcon sx={{ color: yellow[800] }} />
        <StarIcon sx={{ color: yellow[800] }} />
        <StarIcon sx={{ color: yellow[800] }} />
        <StarIcon sx={{ color: yellow[800] }} />
      </Stack>
      <Typography
        textAlign="center"
        gutterBottom
        variant="h4"
        component="div"
        noWrap={true}
      >
        $500
      </Typography>
      <CardActions disableSpacing>
        <IconButton>
          <AddShoppingCartIcon />
          <Typography> Agregar al carrito</Typography>
        </IconButton>
      </CardActions>
      <Button component={Link} to="/details" size="small">
        VER DETALLES
      </Button>
    </Card>
  );
}
