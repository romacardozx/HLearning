import React from "react";
import s from "./review.module.css";
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import Navbar from "../NavBar/NavBar";
import createReview from "../../redux/actions/createReview"

function validate(state) {
  let errors = {};
  if (!state.description) {
    errors.description = "Por favor devuelva una reseña";
  } else if (!state.score) {
    errors.score = "Danos una puntuacion del 0 al 5";
  } 
  return errors;
}

function Review(userObj, courseObj) {
  const history = useHistory()
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    user: userObj,
    description: "",
    course: courseObj,
    score: 0
  });


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

        createReview(state)
        alert("Reseña enviada. Gracias!")
        setState({
          description: "",
          score: 0
        })
        history.push('/user')
    }
  }

  return (
  <div>
   <Navbar/>
    <div className={s.cont} >
      <form className={s.formulario} onSubmit={(e)=>handleSubmit(e)}>
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