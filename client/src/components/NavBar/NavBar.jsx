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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Account from "./Account";
/* import { Button } from "@mui/material"; */

const Navbar = () => {
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
          <NavLink to="/user">Mi Cuenta</NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <NavLink to="/cart">
            <span className="material-icons-outlined">shopping_cart</span>
          </NavLink>
          {/* <NavLink to="/user">
            <AddShoppingCartIcon />
        </NavLink> */}
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/login">Iniciar Sesión</NavBtnLink>
        </NavBtn>
        <NavLink to="/prueba">
          <span class="material-icons-outlined">supervisor_account</span>
        </NavLink>
        {/*  <Account /> */}
      </Nav>
    </>
  );
};

export default Navbar;
