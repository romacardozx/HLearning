import React from "react";
import { useState } from "react";
/* import { useDispatch useSelector  } from "react-redux"; */
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
/* import Divider from "@mui/material/Divider"; */
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
/* import PostAddIcon from "@mui/icons-material/PostAdd"; */
import PersonIcon from "@mui/icons-material/Person";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

/* import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"; */

/* import { signOut } from "../../redux/actions/userActions"; */
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

export default function Account() {
  /*  const dispatch = useDispatch(); */

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  /* const { isAdmin } = useSelector((state) => state.userReducer); */

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        <Tooltip title="My account">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ bgcolor: blue[700], width: 30, height: 30 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem component={Link} to="/user">
          <PersonIcon sx={{ mr: 1 }} />
          My Perfil
        </MenuItem>
        <MenuItem component={Link} to="/favorites">
          <LoyaltyIcon sx={{ mr: 1 }} />
          Mis Favoritos
        </MenuItem>
        {/* <MenuItem component={Link} to="/mercadopago">
          <ShoppingCartIcon sx={{ mr: 1 }} /> Mi carro de compras
        </MenuItem>
        <MenuItem component={Link} to="/my-bookings">
          <BookIcon sx={{ mr: 1 }} />
          My Bookings
        </MenuItem>
        <MenuItem component={Link} to="/announcement">
          <PostAddIcon sx={{ mr: 1 }} /> Post your Home
        </MenuItem> */}
        {/*  {isAdmin && (
          <MenuItem component={Link} to="/admin">
            <AdminPanelSettingsIcon sx={{ mr: 1 }} /> Admin Panel
          </MenuItem>
        )} */}
        {/* <Divider /> */}
        <MenuItem /* onClick={() => dispatch(signOut())} */>
          <ListItemIcon>
            <ExitToAppIcon sx={{ mr: 1 }} />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
