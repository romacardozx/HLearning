import React from "react";
import s from "./register.module.css";
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import Navbar from "../NavBar/NavBar";
import { postSignUp } from "../../redux/actions/userActions";
import {useDispatch} from "react-redux";



function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "Ingresa tu nombre y apellido";
  } else if (!state.email) {
    errors.email = "Ingresa un email";
  } else if (!state.password) {
    errors.password = "Ingresa una constraseña";
  } else if (!state.confirmPassword) {
    errors.confirmPassword = "Vuelve a escribir tu constraseña";
  } else if (state.password !== state.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  return errors;
}

function Register() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e){
    e.preventDefault();
    if(Object.values(errors).length > 0) alert ("Aun hay campos sin terminar")
    else{

        dispatch(postSignUp(state))

        setState({
          name: "",
          email: "",
          password: "",
        })
        history.push('/login')
    }
  }

  return (
  <div>
   <Navbar/>
    <div className={s.cont}>
      <form className={s.formulario} onSubmit={(e)=>handleSubmit(e)}>
        <h1>Registrate</h1>
        <div className={s.contenedor}>
          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="text"
              value={state.name}
              name="name"
              placeholder="Nombre Completo"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          {errors.name && <p className={s.errors}>{errors.name}</p>}

          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="email"
              value={state.email}
              name="email"
              placeholder="Correo Electronico"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          {errors.email && <p className={s.errors}>{errors.email}</p>}

          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="password"
              value={state.password}
              name="password"
              placeholder="Contraseña"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          {errors.password && <p className={s.errors}>{errors.password}</p>}

          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="password"
              value={state.confirmPassword}
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          {errors.confirmPassword && (
            <p className={s.errors}>{errors.confirmPassword}</p>
          )}

          <input className={s.button} type="submit" value="Registrate" />
          <div className={s.or}>o con</div>
          <a href="localhost:3001/google">
            <button className={s.button_google}> Google </button>
          </a>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿Ya tienes una cuenta?
            <a className="link" href="/login">
              Iniciar Sesion
            </a>
          </p>
        </div>
      </form>
    </div>
    {console.log('este es el state', state)}
  </div>
  );
}

export default Register;