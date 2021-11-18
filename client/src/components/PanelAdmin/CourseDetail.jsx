import React, { useState, useEffect } from "react";
import s from "./CourseDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import { getDetailCourses } from "../../redux/actions/getDetailCourses";
import { MultiSelect } from "react-multi-select-component";
import { getAllCategories } from "../../redux/actions/getAllCategories";
import axios from "axios";
import swal from "sweetalert";

function validate(state) {
    let errors = {};
    if (!state.title) {
      errors.title = "Ingresar un titulo";
    } else if(!state.description){
        errors.description = "Ingresar descripción"
    } else if(state.price < 1000){
        errors.price = "El precio debe superar los $ 1.000"
        if(!state.price){
            errors.price = "Ingresar un precio"
        }
    } else if(!state.duration){
        errors.duration = "Ingresar duración estimada"
    }
    return errors;
  }

export default function CourseDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const courseDetailed = useSelector(
    (state) => state.getDetails.getCourseDetail
  );
  const allCategories = useSelector((state) => state.getCategories.getAllCategories)
  const [disabledInput, setInputsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
console.log("Curso Detallado", courseDetailed)

  useEffect(() => {
    dispatch(getDetailCourses(id)); // eslint-disable-next-line
    dispatch(getAllCategories())
  }, [dispatch]);

  const [state, setState] = useState({
    title: courseDetailed?.title,
    description: courseDetailed?.description,
    price: courseDetailed?.price,
    duration: courseDetailed?.duration,
    img: courseDetailed?.img,
  });
  
  let initialOptions = courseDetailed.categories?.map(c => {
      return {
          label: c?.name,
          value: c?._id
        }
    })
    const [selected, setSelected] = useState(initialOptions);
    
  let options = allCategories.map(c => {
      return {
          label: c.name,
          value: c._id
      }
  })

  const handleInputChange = (e) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        setState({
        ...state,
        categories: selected.map(el => {
            return el?.value
        })
    })
    try {
        const {data, request} = await axios.put(`/courses/update/${id}`, {
            state,
            selected
        });
        if(request.status === 200){
            await swal("La información del curso ha sido actualizada", "Presione para continuar", "success");
        }
    } catch (error) {
        console.log(error.message)
        await swal(`Algo salió mal`, "Presione para continuar", "error")
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    setInputsDisabled(!disabledInput);
  };


  return (
    <div>
      <Navbar />
      <div className={s.cont}>
        <form
          className={s.formulario}
          onSubmit={(e)=>handleSubmit(e)}
        >
          <h1>Detalle del Curso</h1>
          <div className={s.contenedor}>
            <button onClick={(e) => handleClick(e)}>Editar</button>
            <div className={s.inputContenedor}>
              <i className="fas fa-user icon"></i>
              <input
                className={s.input}
                type="text"
                value={state.title}
                name="title"
                placeholder="Titulo"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
               {errors.title && <p>{errors.title}</p>}
            </div>
            <div className={s.inputContenedor}>
              <i className="fas fa-user icon"></i>
              <textarea
                className={s.input}
                type="text"
                value={state.description}
                name="description"
                placeholder="Detalle"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
              {errors.description && <p>{errors.description}</p>}
            </div>
            <div className={s.inputContenedor}>
              <i className="fas fa-user icon"></i>
              <input
                className={s.input}
                type="text"
                value={state.price}
                name="price"
                placeholder="Precio"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
              {errors.price && <p>{errors.price}</p>}
            </div>
            <div className={s.inputContenedor}>
              <i className="fas fa-user icon"></i>
              <input
                className={s.input}
                type="text"
                value={state.duration}
                name="duration"
                placeholder="Duración Estimada"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
              {errors.duration && <p>{errors.duration}</p>}
            </div>
            <div className={s.inputContenedor}>
              <i className="fas fa-user icon"></i>
              <input
                className={s.input}
                type="text"
                value={state.img}
                name="img"
                placeholder="Inserte URL de la imagen"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
            </div>
            {
                <MultiSelect 
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
            }
            {/* {
                courseDetailed.videos ? 
                courseDetailed.videos.map(v => {
                    return (
                        <div className={s.inputContenedor}>
              <i className="fas fa-user icon"></i>
              <input
                className={s.input}
                type="text"
                value={state.videos.duration}
                name="img"
                placeholder="Inserte URL de la imagen"
                onChange={(e) => handleInputChange(e)}
                required
                disabled={disabledInput}
              />
            </div>
                    )
                }) : ""
            } */}

            <input className={s.button} type="submit" value="Registrate" />
          </div>
        </form>
      </div>
    </div>
  );
}
