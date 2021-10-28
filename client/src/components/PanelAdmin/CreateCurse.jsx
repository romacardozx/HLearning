/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from "react";
import { Formik } from 'Formik'
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../actions/getAllCategories.js'


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
                    students: '',
                    category: [],
                    video: [],
                }}
                validate={values =>{
                    const errors = {};
                    if(!values.title){
                        errors.title = 'Require Title'
                    }
                    if(!values.description){
                        errors.description = 'Require description'
                    }
                    if(!values.score){
                        errors.score = 'Require score'
                    }
                    if(!values.duration){
                        errors.duration = 'Require duration'
                    }
                    if(!values.price){
                        errors.price = 'Require price'
                    }
                    if(!values.students){
                        errors.students = 'Require students'
                    }
                    if(!values.category.length){
                        errors.category = 'Require category'
                    }
                    if(!values.video.length){
                        errors.video = 'Require video'
                    }
                }}
                onSubmit={(value) => {
                    console.log("send... test...")
                }}
            >
                {({
                    value,
                    errors,
                    touched, 
                    handleChange,
                    handleBlur
                }) => (
                    <form onSubmit={handleChange}>
                        <input 
                            type="text"
                            name="title"
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                            value =  {value.title}
                        />
                        {errors.title && touched.title && <div>{errors.title}</div>}
                    </form>
                )}

            </Formik>
        </div>
    )
}

export default CreateCurse;