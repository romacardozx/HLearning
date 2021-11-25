import React from "react";
import s from "./register.module.css";
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { postSignUp } from "../../redux/actions/userActions";
import {useDispatch} from "react-redux";

function esEmail (word) {
  if(word.includes("@") && word.includes(".com")) return true;
     else return false
}

function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "Ingresa tu nombre y apellido";
  } else if (!state.email) {
    errors.email = "Ingresa un email";
  } else if (esEmail(state.email)===false) {
    errors.email = "No es un email";
  } else if (!state.password) {
    errors.password = "Ingresa una constraseña";
  } else if (state.password.length < 7) {
    errors.password = "La contraseña debe superar los 8 caracteres";
  } else if (!state.confirmPassword) {
    errors.confirmPassword = "Repita su constraseña";
  } else if (state.password !== state.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  return errors;
}

function Register() {
  const { REACT_APP_CLOUD_NAME } = process.env;
  const { REACT_APP_UPLOAD_PRESET } = process.env;
  const cloud_name = REACT_APP_CLOUD_NAME;
	const upload_preset = REACT_APP_UPLOAD_PRESET;

  const [imageUrl, setImageUrl] = useState(
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Cu_p6a8MSniSMOxJqIpZHSJjciAgHiRbaw&usqp=CAU'
	);

  const handleClick = (e) => {
    e.preventDefault();
		const { files } = document.querySelector('.app_uploadInput');
		const formData = new FormData();
		formData.append('file', files[0]);
		formData.append('upload_preset', upload_preset);
		const options = {
			method: 'POST',
			body: formData
		};
		return fetch(
			`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,
			options
		)
			.then((res) => res.json())
			.then((res) => {
				setImageUrl(res.secure_url); //url de la imagen
				console.log(res.secure_url);
        setState({
          ...state, 
          pictures: res.secure_url
        })
			})
			.catch((err) => console.log(err));
	};

  const history = useHistory()
  const dispatch = useDispatch();
  const [state, setState] = useState({
    confirmPassword: "",
    name: "",
    email: "",
    password: "",
    pictures: ""
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
          confirmPassword: "",
          pictures: ""
        })
        history.push('/login')
    }
  }

  return (
  <div>
   <Navbar/>
    <div className={s.cont}>
      <form className={s.formulario} onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data" >
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

          <div className="app">
			    <input type="file" className="app_uploadInput" />
			    <img src={imageUrl} className={s.img} alt="" />
			    <button className="app_uploadButton" onClick={(e)=>handleClick(e)}>
				   Cargar imagen
			    </button>
		</div>

          <input className={s.button} type="submit" value="Registrate" />
          {/* <div className={s.or}>o con</div>
          <a href="localhost:3001/google">
            <button className={s.button_google}> Google </button>
          </a> */}
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
    
    
  </div>
  );
}

export default Register;