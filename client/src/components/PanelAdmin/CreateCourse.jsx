/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState }  from "react";
import { Formik, Form, FieldArray, Field, ErrorMenssage } from 'Formik'
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../redux/actions/getAllCategories.js'
import * as Yup from 'yup';



function CreateCurse (){


    const dispatch = useDispatch();
    const getAllCategory = useSelector(state => state.getAllCategories);

    const [formSent, setFormSent] = useState(false)
    console.log(formSent);

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
                    videos: [], 
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
                        videos: Yup.array()
                            .min(1, "at least one video is needed")        
                    })
                }
                onSubmit={(value, {resetForm}) => {
                    resetForm();
                    console.log("send...")
                    setFormSent(true);
                    setTimeout(() => setFormSent(false), 3000)
                }}
            >
                {({errors, videos}) => (
                    <Form>
                        <Field 
                            type="text"
                            name="title"
                        />
                        <ErrorMenssage name="title" component={<div>{errors.title}</div>}/>
                        <Field 
                            type="text"
                            name="description"
                        />
                        <ErrorMenssage name="description" component={<div>{errors.description}</div>}/>
                        <Field 
                            type="text"
                            name="score"
                        />
                        <ErrorMenssage name="score" component={<div>{errors.score}</div>}/>
                        <Field 
                            type="text"
                            name="duration"
                        />
                        <ErrorMenssage name="duration" component={<div>{errors.duration}</div>}/>
                        <Field 
                            type="text"
                            name="price"
                        />
                        <ErrorMenssage name="price" component={<div>{errors.price}</div>}/>
                        <Field 
                            type="text"
                            name="students"
                        />
                        <ErrorMenssage name="students" component={<div>{errors.students}</div>}/>
                        <Field 
                            type=" "
                            name="img"
                        />
                        <ErrorMenssage name="img" component={<div>{errors.img}</div>}/>
                        <FieldArray>
                        {({push, remove}) => (
                            <div>
                                {
                                    videos.length > 0 && videos.map((video, index) =>(
                                        <div key={index}>
                                            
                                            <label>Insert Url</label>
                                            
                                            <Field
                                            name={index}
                                            placeholder = "Insert url"
                                            type="text"
                                            />

                                            <button
                                            type="button"
                                            onClick={()=> push(index)}
                                            > Add video</button>
                                            
                                            <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            > Delete Link</button>

                                        </div>
                                    ))
                                }
                            </div>
                        )}
                        <ErrorMenssage name="videos" component={<div>{errors.videos}</div>}/>
                        </FieldArray>
                        {/* <select multiple >
                        {
                            getAllCategory.map((c) => (
                                <option key={c.id} value={c.name}>
                                    {c.name}
                                </option>
                            ))
                        } 
                        </select> */}

                        {/* {linea 157 invento Gudy!, no test} */}
                        {/* key={c.id} value={c.name} */}
                        {
                            getAllCategory.map((c) => (
                                <Field as="select" multiple>
                                    <option>
                                        {c.name}
                                    </option>
                                </Field>
                            ))
                        } 
                        <ErrorMenssage name="category" component={<div>{errors.category}</div>}/>
                        <button type="submit">Enviar Curso</button>
                        {setFormSent && <p> Curso enviado con exito!</p>}
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default CreateCurse;