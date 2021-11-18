import React, { useState } from "react";
import { loadState, /* removeState, */ saveState } from "../../localStorage";
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
import calculeScore from "../../utils/calculeScore";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
/* import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs"; */

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginRight: "70px",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CourseCard({
  id,
  title,
  image,
  description,
  score,
  price,
  course,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  /* const [remove, setRemove] = useState(); */
  const cart = loadState();
  const [, setAddCart] = useState();

  return (
    <Box p={1}>
      <Card
        /*  sx={{ maxWidth: 270, minWidth: 100 }} */
        elevation={6}
      >
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
          <Rating name="read-only" readOnly value={calculeScore(score)} />
        </CardContent>
        <Typography
          textAlign="center"
          variant="h5"
          component="div"
          noWrap={true}
        >
          ${price}
        </Typography>
        {cart.includes(JSON.stringify(course)) ? null : (
          <CardActions>
            <IconButton
              onClick={() => {
                saveState(course);
                loadState();
                setAddCart("Agregado al carrito");
                alert("Agregado a tu carrito");
              }}
            >
              <AddShoppingCartIcon />
              <Typography> Agregar al carrito</Typography>
            </IconButton>
          </CardActions>
          /*  <button
            onClick={() => {
              saveState(course);
              loadState();
              setAddCart("Agregado al carrito");
              alert("Agregado a tu carrito");
            }}
          >
            Agregar al <BsCartPlus />
          </button> */
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Descripción:</Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
        <Button
          variant="contained"
          size="medium"
          component={Link}
          to={`/courses/${id}`}
          endIcon={<AddIcon size="large" />}
        >
          VER
        </Button>
      </Card>
    </Box>
  );
}

/* <IconButton>
            <ShoppingCartIcon
              onClick={() => {
                removeState(course);
                loadState();
                setRemove("eliminado del carrito");
                alert("Eliminado");
              }}
            />
            <Typography> Agregado</Typography>
          </IconButton> */
/* <button
            onClick={() => {
              removeState(course);
              setRemove(!remove);
            }}
          >
            <BsCartCheckFill />
          </button> */
