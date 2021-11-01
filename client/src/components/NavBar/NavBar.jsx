import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Logo from "../../images/Hlearning.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='logo'
          height="60"
          width="60"  />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/courses' activeStyle>
            Cursos
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contacto
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Iniciar Sesión</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;