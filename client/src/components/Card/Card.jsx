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
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

export default function CourseCard({
  id,
  title,
  image,
  description,
  score,
  price,
}) {
  return (
    <Box p={1}>
      <Card sx={{ maxWidth: 260, minWidth: 100 }} elevation={6} spacing={1}>
        {/* <CardHeader textAlign="center" title={title} /> */}
        <Typography sx={{ mb: 1 }} paddingLeft={1} variant="h6">
          {title}
        </Typography>
        <CardMedia
          title={title}
          component="img"
          height="180"
          image={image}
          alt="img video"
        />
        <CardContent>
          <Rating name="read-only" readOnly value={score} />
        </CardContent>
        <Typography
          textAlign="center"
          variant="h5"
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
          fullWidth
          variant="outlined"
          component={Link}
          to={`/courses/${id}`}
          size="small"
          endIcon={<AddIcon size="large" />}
        >
          VER
        </Button>
      </Card>
    </Box>
  );
}
