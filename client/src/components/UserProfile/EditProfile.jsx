import React, { useState, useEffect }  from "react";
import s from "./editprofile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/actions/getUserById"
import Navbar from "../NavBar/NavBar";


function validate(state) {
  let errors = {};
  if (state.password !== state.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  return errors;
}


function EditProfile(){

    const dispatch = useDispatch();
    const user = useSelector((state => state.getUser.getUserById))
    const [state, setState] = useState({
      name: "",
      email: "",
      password: "",
    });
    
    
    useEffect(() => {
        dispatch(getUserById());
    }, [dispatch]);


    return (
        <div>
            <Navbar/>
    <div className={s.cont}>
      <form className={s.formulario} 
    //   onSubmit={(e)=>handleSubmit(e)}
      >
        <h1>EditarPerfil</h1>
        <div className={s.contenedor}>
          <div className={s.inputContenedor}>
            {/*<i class="fas fa-user icon"></i>*/}
            <input
              className={s.input}
              type="text"
            //   value={state.name}
              name="name"
              placeholder="Nombre Completo"
            //   onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          

          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="email"
            //   value={state.email}
              name="email"
              placeholder="Correo Electronico"
            //   onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          
          
          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="email"
            //   value={state.email}
              name="email"
              placeholder="Correo Electronico"
            //   onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          

          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="password"
            //   value={state.password}
              name="password"
              placeholder="Contraseña"
            //   onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          

          <div className={s.inputContenedor}>
            
            <input
              className={s.input}
              type="password"
            //   value={state.confirmPassword}
              name="confirmPassword"
              placeholder="Confirmar contraseña"
            //   onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          

          <input className={s.button} type="submit" value="Registrate" />
          
        </div>
      </form>
    </div>
    {/* {console.log('este es el state', state)} */}
        </div>
    )
}


export default EditProfile;