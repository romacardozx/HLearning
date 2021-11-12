import React from "react";
import s from "./review.module.css";
import { useState } from "react";
import Navbar from "../NavBar/NavBar";


function validate(state) {
  let errors = {};
  if (!state.description) {
    errors.description = "Por favor devuelva una reseña";
  } else if (!state.score) {
    errors.score = "Danos una puntuacion del 0 al 5";
  } 
  return errors;
}

function Review() {
  const [state, setState] = useState({
    description: "",
    score: ""
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
  return (
  <div>
   <Navbar/>
    <div className={s.cont} >
      <form className={s.formulario} onSubmit>
        <h1>Reseña</h1>
        <div className={s.contenedor}>
          <div className={s.inputContenedor}>
            <textarea className={s.input} type="text" value={state.description}
              name="description"
              placeholder="Que opinas del curso?"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          {errors.description && <p className={s.errors}>{errors.description}</p>}

             <div className={s.inputContenedor}>
                    
                    <input type= "number" min="0" max="5" size={3} value= {state.score} name= "score" 
                    placeholder="Puntuacion 0-5" className={s.input} onChange={(e)=>handleInputChange(e)}/>
                    {errors.score && (
                    <p >{errors.score}</p>
                    )}
                </div>

            <input className={s.button} type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  </div>
  );
}

export default Review;