import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import s from './login.module.css';
import Navbar from '../NavBar/NavBar';
import { postSignIn } from "../../redux/actions/userActions"
import {useDispatch} from "react-redux";

function esEmail (word) {
  if(word.includes("@") && word.includes(".com")) return true;
     else return false
}

function validate(state) {
  let errors = {};
  if (!state.email) {
    errors.email = "Ingresa un email"
  } else if (esEmail(state.email)===false) {
    errors.email = "No es un email";
  } else if (!state.password) {
    errors.password = "Ingresa una constraseña"
  }
  return errors
}


function Login() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...state,
        [e.target.name]: e.target.value
      })
    )
  }

  function handleSubmit(e){
    e.preventDefault();
    if(Object.values(errors).length > 0) alert ("Aun hay campos sin terminar")
    else{

        dispatch(postSignIn(state))
        setState({
          email: "",
          password: "",
        })
        // history.push('/user')
    }
  }

  return (
    <div>
      <Navbar/>
    <div className={s.body}>
      <div className={s.formulario} >

        <h1 className={s.h1}>Login</h1>
        <div className={s.contenedor}>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className={s.inputcontenedor}>
              <i className="fas fa-envelope icon"></i>
              <input className={s.input} type="email" name="email" value={state.email} placeholder="Correo Electronico" onChange={(e) => handleInputChange(e)} required/>
            </div>
            {errors.email && (<p className={s.errors}>{errors.email}</p>)}
            <div className={s.inputcontenedor}>
              <i className="fas fa-key icon"></i>
              <input className={s.input} type="password" name="password" value={state.password} placeholder="Contraseña" onChange={(e) => handleInputChange(e)} required/>
            </div>
            {errors.password && (<p className={s.errors}>{errors.password}</p>)}
            <input type="submit" value="Login" className={s.button} />
          </form>
          <hr />
          {/* <div>
            <button type="none" className={s.button_google}> Google </button>
          </div> */}
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>¿No tienes una cuenta? <a className={s.link} href="/Register">Registrate </a></p>
          <p>¿Olvidaste tu contraseña? <span className={s.link}>Recuperarla</span></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login