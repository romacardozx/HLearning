import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../../images/Hlearning.png";
import { useSelector } from "react-redux";
/* import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; */
import Account from "./Account";
/* import { Button } from "@mui/material"; */

const Navbar = () => {
  let authentification = useSelector(
    (state) => state.userReducer.isAuthenticated
  );
  let isAdmin = useSelector((state) => state.userReducer.isAdmin);

  //Saque activeStyle que hacia warning rojo de los 3 NavLink
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo" height="60" width="60" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home">Inicio</NavLink>
          <NavLink to="/courses">Cursos</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
          {authentification ? <NavLink to="/user">Mi Cuenta</NavLink> : <a></a>}
          <NavLink to="/cart">
            <span className="material-icons-outlined">shopping_cart</span>
          </NavLink>
          {/*  <NavLink to="/user">
            <AddShoppingCartIcon />
          </NavLink> */}
        </NavMenu>
        <NavBtn>
          {authentification ? (
            <a></a>
          ) : (
            <NavBtnLink to="/login">Iniciar Sesión</NavBtnLink>
          )}
        </NavBtn>
        {/* {isAdmin ? (
          <NavLink to="/admin">
            <span className="material-icons-outlined">supervisor_account</span>
          </NavLink>
        ) : (
          <a></a>
        )} */}
        {isAdmin ? <Account /> : <a></a>}
      </Nav>
    </>
  );
};

export default Navbar;
