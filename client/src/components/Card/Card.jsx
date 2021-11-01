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
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function CourseCard({
  id,
  title,
  image,
  description,
  score,
  price
}) {
  return (
    <Card sx={{ maxWidth: 355 }} elevation={6}>
      <CardHeader textAlign="center" title={title} />
      <CardMedia component="img" height="250" image={image} alt="img video" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Rating name="read-only" readOnly value={score} />
      <Typography
        textAlign="center"
        gutterBottom
        variant="h4"
        component="div"
        noWrap={true}
      >
        ${price}
      </Typography>
      <CardActions disableSpacing>
        <IconButton>
          <AddShoppingCartIcon />
          <Typography> Agregar al carrito</Typography>
        </IconButton>
      </CardActions>
      <Button
        variant="outlined"
        component={Link}
        to={`/courses/${id}`}
        size="small"
        endIcon={<AddIcon size="large" />}
      >
        VER
      </Button>
    </Card>
  );
}
