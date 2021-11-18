import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../../images/Hlearning.png";
import Account from "./Account";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";

/* const initialUser = (authentification, User) => {
  if (authentification !== null) {
    let nameUser = User.name;
    let initial = nameUser.charAt(0);
    return initial;
  } else {
    console.log("");
  }
}; */

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  let User = useSelector((state) => state.userReducer.userDetail);
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
          {authentification ? <NavLink to="/user">Mi Cuenta</NavLink> : <></>}
          <NavLink to="/cart">
            <span className="material-icons-outlined">shopping_cart</span>
          </NavLink>
          {/*  {authentification ? (
            <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
              {initialUser(authentification, User)}
            </Avatar>
          ) : (
            <></>
          )} */}
        </NavMenu>
        <NavBtn>
          {authentification ? (
            <></>
          ) : (
            <NavBtnLink to="/login">Iniciar Sesión</NavBtnLink>
          )}
        </NavBtn>
        {isAdmin ? <Account /> : <></>}
      </Nav>
    </>
  );
};

export default Navbar;

/* {isAdmin ? (
  <NavLink to="/admin">
    <span className="material-icons-outlined">supervisor_account</span>
  </NavLink>
) : (
  <a></a>
)} */
