import React, { useState, useEffect } from "react";
import s from "./editprofile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, postEditUser } from "../../redux/actions/userActions";
import Navbar from "../NavBar/NavBar";

function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "Ingresa tu nombre y apellido";
  } else if (!state.email) {
    errors.email = "Ingresa un email válido";
  } else if (state.password.length < 8) {
    errors.password = "Tu contraseña debe tener más de 8 caracteres";
    if(!state.password){
      errors.password = "Ingresa una contraseña"
    }
  } else if(!state.pictures){
    errors.pictures = "Ingresa una imagen válida"
  }
  return errors;
}

export default function EditProfile() {
  const User = useSelector((state) => state.userReducer.userDetail);
  const [state, setState] = useState({
    name: User?.name,
    email: User?.email,
    password: User?.password,
    pictures: User.pictures,
  });
  
  const cloud_name = 'dkkwjslk9';
	const upload_preset = 'kzhe1mvq';

	const [imageUrl, setImageUrl] = useState(User.pictures);

	const handleCloud = (e) => {
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
				setImageUrl(res.secure_url); 
        setState({
          ...state, 
          pictures: res.secure_url
        })
			})
			.catch((err) => console.log(err));
	};

  const dispatch = useDispatch();
  const [disabledInput, setInputsDisabled] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);



  const [errors, setErrors] = useState({});

  const handleInputChange = (e) =>  {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postEditUser(state, User._id))
  }

  const handleClick = (e) => {
    e.preventDefault();
    setInputsDisabled(!disabledInput);
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Navbar />
      <div className={s.cont}>
        <form
          className={s.formulario}
            onSubmit={(e)=>handleSubmit(e)}>
          <h1>Editar Perfil</h1>
          <div className={s.contenedor}>
            <button onClick={(e) => handleClick(e)}>Editar</button>
            <div className={s.inputContenedor}>
              <i className="fas fa-user icon"></i>
              <input
                className={s.input}
                type="text"
                value={state.name}
                name="name"
                placeholder="Nombre Completo"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>

            <div className={s.inputContenedor}>
              <input
                className={s.input}
                type="email"
                value={state.email}
                name="email"
                placeholder="Correo Electronico"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className={s.inputContenedor}>
              <input
                className={s.input}
                type={passwordShown ? "text" : "password"}
                value={state.password}
                name="password"
                placeholder="Contraseña"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
              {errors.password && <p>{errors.password}</p>}
              <button onClick={(e) => togglePassword(e)}>Show Password</button>
            </div>

            <div className="app">
			      <input type="file" className="app_uploadInput" />
			      <img src={imageUrl} className="app_uploadedImg" alt="" />
			      <button className="app_uploadButton" onClick={(e)=>handleCloud(e)}>
				    Cargar imagen
			      </button>
		        </div>

            {/* <div className={s.inputContenedor}>
            <input
              className={s.input}
              type="text"
              value={state.pictures}
              name="pictures"
              placeholder="URL Imagen"
              onChange={(e) => handleInputChange(e)}
              required
              disabled={disabledInput}
            />
            {errors.pictures && <p>{errors.pictures}</p>}
          </div> */}
            <input className={s.button} type="submit" value="Registrate" />
          </div>
        </form>
      </div>
    </div>
  );
}


