import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import { CardActionArea } from "@material-ui/core";
import calculeScore from '../../utils/calculeScore';

export default function CourseCard({
  id,
  title,
  image,
  // description,
  score,
  price,
}) {
  return (
    <Box p={1}>
      <Card sx={{ maxWidth: 270, minWidth: 100 }} elevation={6}>
        <CardActionArea component={Link} to={`/courses/${id}`}>
          <Typography sx={{ mb: 1 }} paddingLeft={1} variant="h6">
            {title}
          </Typography>
          <Rating name="read-only" readOnly value={calculeScore(score)} />
          {/* <Rating name="half-rating-read" defaultValue={score.score} precision={0.5} /> */}
          <CardMedia
            title={title}
            component="img"
            height="150"
            width="100"
            image={image}
            alt="img video"
          />
          <CardContent>
            {/* <Rating name="read-only" readOnly value={score} /> */}
          </CardContent>
          <Typography
            textAlign="center"
            variant="h5"
            component="div"
            noWrap={true}
          >
            ${price}
          </Typography>
        </CardActionArea>
        <CardActions>
          <IconButton
            onClick={() => {
              alert("Agregado a tu carrito");
            }}
          >
            <AddShoppingCartIcon/>
            <Typography> Agregar al carrito</Typography>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
