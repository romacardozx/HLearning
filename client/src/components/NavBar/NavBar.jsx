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
  //Saque activeStyle que hacia warning rojo de los 3 NavLink
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
          <NavLink to='/home' > 
            Inicio
          </NavLink>
          <NavLink to='/courses' >
            Cursos
          </NavLink>
          <NavLink to='/contact' >
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