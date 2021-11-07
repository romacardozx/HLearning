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
import Popover from "@mui/material/Popover";
import { Box } from "@mui/system";
import { CardActionArea } from "@material-ui/core";

export default function CourseCard({
  id,
  title,
  image,
  description,
  score,
  price,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box p={1}>
      <Card sx={{ maxWidth: 270, minWidth: 100 }} elevation={6}>
        <CardActionArea
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          component={Link}
          to={`/courses/${id}`}
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
          {/* <CardContent>
            <Rating name="read-only" readOnly value={score} />
          </CardContent> */}
          <Typography
            textAlign="center"
            variant="h5"
            component="div"
            noWrap={true}
          >
            ${price}
          </Typography>
        </CardActionArea>
        <Popover
          /*  style={{ width: 300 }} */
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
            minWidth: 200,
            maxWidth: 350,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography paragraph sx={{ p: 1 }}>
            {description}
          </Typography>
        </Popover>
        <CardActions>
          <IconButton
            onClick={() => {
              alert("Agregado a tu carrito");
            }}
          >
            <AddShoppingCartIcon />
            <Typography> Agregar al carrito</Typography>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
