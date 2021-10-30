/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from "react";
import { Formik } from 'Formik'
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../actions/getAllCategories.js'
import * as Yup from 'yup';



function CreateCurse (){

    // const history = useHistory();
    const dispatch = useDispatch();
    const getAllCategory = useSelector(state => state.getAllCategories);
    
    useEffect(() => {
        dispatch(getAllCategories());
      },[dispatch]);
    
    
    
    return(
        <div>
            <Formik
                initialValues= {{ 
                    title: '',
                    description: '',
                    score: '',
                    duration: '',
                    price: '',
                    img:'', 
                    students: '', //CONSULTAR
                    category: [],
                    video: [],
                }}
                validationSchema = {
                    Yup.object().shape({
                        title: Yup.string()
                            .min(5, "Title must be at title")
                            .max(10, "Must be 10 characters")
                            .required("Title is required"),
                        description: Yup.string()  
                            .max(25, "Must be 25 characters")
                            .required("Description is required"),
                        score: Yup.string()
                            .min(1, "Must be at score")  
                            .max(5, "Must be score required")
                            .required("Score is required"),  
                        duration: Yup.string()
                            .min(1,"Required must be at duration (1hs.)")
                            .required("Duration is required"),
                        price: Yup.number()   
                            .min(1,"Required min price")  
                            .required("Price is required"),
                        img: Yup.string()    
                            .required("Price is required"),    
                        category: Yup.array()
                            .min(1, "at least one category is needed")
                            .max(2, "Max two categories"),
                        video: Yup.array()
                            .min(1, "at least one video is needed")        
                    })
                }
                onSubmit={(value) => {
                    console.log("send... test...")
                }}
            >
                {({
                    value,
                    errors,
                    touched,
                    handleSubmit, 
                    handleChange,
                    handleBlur
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="title"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.title}
                        />
                        {errors.title && touched.title && <div>{errors.title}</div>}
                        <input 
                            type="text"
                            name="description"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.description}
                        />
                        {errors.description && touched.description && <div>{errors.description}</div>}
                        <input 
                            type="text"
                            name="score"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.score}
                        />
                        {errors.score && touched.score && <div>{errors.score}</div>}
                        <input 
                            type="text"
                            name="duration"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.duration}
                        />
                        {errors.duration && touched.duration && <div>{errors.duration}</div>}
                        <input 
                            type="text"
                            name="price"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.duration}
                        />
                        {errors.price && touched.price && <div>{errors.price}</div>}
                        <input 
                            type="text"
                            name="students"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.duration}
                        />
                        {errors.students && touched.students && <div>{errors.students}</div>}
                        <input 
                            type=" "
                            name="img"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.img}
                        />
                        {errors.price && touched.price && <div>{errors.price}</div>}
                        <select multiple >
                        {
                            getAllCategory.map((c) => (
                                <option key={c.id} value={c.name}>
                                    {c.name}
                                </option>
                            ))
                        } 
                        </select>
                        {errors.category && touched.category && <div>{errors.category}</div>}
                    </form>
                )}

            </Formik>
        </div>
    )
}

export default CreateCurse;