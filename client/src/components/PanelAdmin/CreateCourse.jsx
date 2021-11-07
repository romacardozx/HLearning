import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../redux/actions/getAllCategories'
import {FieldArray, Formik} from 'formik';
import * as Yup from 'yup';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";

const schemaValidate =  Yup.object().shape({

    title: Yup.string()
        .min(8, "El titulo debe tener al menos 8 caracteres")
        .max(25, "El maximo es de 25 caracteres")
        .required("Debe agregar un titulo"),
    description: Yup.string()  
        // .min(25, "La descripcion debe ser de al menos 25 caracteres")
        .required("Debe agregar una descripcion"),
    score: Yup.string()
        .min(1, "Must be at score")  
        .max(5, "Must be score required")
        .required("Debe agregar un score"),  
    duration: Yup.string()
        .min(1,"Required must be at duration (1hs.)")
        .required("Debe indicar la duracion aproximada"),
    price: Yup.number().positive()
        .min(1000,"El precio debe ser mayor a $1000")  
        .required("Requiere un precio"),
    img: Yup.string()    
        .required("Requiere una imagen"),    
    category: Yup.array()
        .min(1, "Se necesita al menos una categoria")
        .required("Eliga una categoria"),
    videos: Yup.array()
        .min(1, "El curso debe poseer al menos un video")        
})

const initValues = ({

    title: '',
    description: '',
    score: '',
    duration: '',
    price: '',
    img:'', 
    students: '',
    category: '',
    videos: [
        {
            name: '',
            url:'',
            duration:''
        }
    ] 
});


function CreateCourse(){

    const dispatch = useDispatch();
    const getAllCategory = useSelector(state => state.getCategories.getAllCategories);
    console.log(getAllCategory)
    
    useEffect(() => {
        dispatch(getAllCategories());
    },[dispatch]);

    return (
        <div>
            <Formik
                initialValues={initValues}
                validationSchema={schemaValidate}
                onSubmit={values => {
                    console.log("onSubmit", JSON.stringify(values));
                }}
            >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                
                <Container sx={{ marginBottom: 10 }} maxWidth="lg">
                    <Paper elevation={1}>
                        <Typography
                            sx={{ marginTop: 5 }}
                            align="center"
                            variant="h4"
                            gutterBottom
                        >
                        Crear Curso :
                        </Typography>
                        <Box 
                        component="form"
                        sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        "& .MuiTextField-root": { m: 2, width: "17rem" },
                        "& .MuiFormControl-root": { m: 2, width: "17rem" },
                        }}
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        >
                       
                            <div>
                                <TextField
                                    required
                                    label="Titulo del Curso"
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean( 
                                        touched.title && errors.title
                                    )}
                                    helperText={touched.title && errors.title}
                                />
                            </div>
                            <div>   
                                <TextField
                                    required
                                    id="description"
                                    name="description"
                                    label="Detalle del curso"
                                    control="textarea"
                                    type="text"
                                    multiline={true}
                                    rows={4}
                                    onChange={handleChange}
                                    value={values.description}
                                    onBlur={handleBlur}
                                    error={Boolean(
                                        touched.description && errors.description
                                    )}
                                    helperText={touched.description && errors.description}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    label="Precio"
                                    placeholder="Precio"
                                    type="number"
                                    name="price"
                                    onChange={handleChange}
                                    value={values.price}
                                    onBlur={handleBlur}
                                    helperText={errors.price}
                                    error={Boolean(
                                        touched.price && errors.price
                                    )}
                                />
                            </div>
                            <div>    
                                <TextField
                                    required
                                    label="Duracion aproximada"
                                    type="text"
                                    name="duration"
                                    onChange={handleChange}
                                    value={values.duration}
                                    onBlur={handleBlur}
                                    helperText={errors.duration}
                                    error={Boolean(
                                        touched.duration && errors.duration
                                    )}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    select
                                    name="category"
                                    helperText={errors.category}
                                    value={values.category}
                                    onChange={handleChange("category")}
                                >
                                {
                                
                                    getAllCategory?.map((option) => (
                                        <div key={option.id}>
                                            <MenuItem
                                            key={option.id}
                                            value={option.name}
                                            >
                                            {option.name}
                                            </MenuItem>
                                        </div>
                                    ))
                                    
                                }   
                                </TextField>
                            </div>
                            <FieldArray name="videos">
                                {({push, remove})=> (
                                    <div>
                                        {values.videos.map((p, index) => {
                                            // const name = `videos[${index}].name`;
                                            // const url = `videos[${index}].url`;

                                            return (
                                                <div key={p.id}>
                                                    <TextField
                                                        type="text"
                                                        name={`videos.${index}.name`}
                                                        value={p.name}
                                                        placeholder="Inserte el nombre del video"
                                                        required
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        helperText={errors.videos}
                                                        error={Boolean(
                                                            touched.videos && errors.videos
                                                        )}
                                                    />  
                                                    <TextField
                                                        type="text"
                                                        name={`videos.${index}.url`}
                                                        placeholder="Inserte el URL del video"
                                                        value={p.url}
                                                        required
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        helperText={errors.videos}
                                                        error={Boolean(
                                                            touched.videos && errors.videos
                                                        )}
                                                    />
                                                    <TextField
                                                        type="text"
                                                        name={`videos.${index}.duration`}
                                                        placeholder="duracion aproximada del video"
                                                        value={p.duration}
                                                        required
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        helperText={errors.videos}
                                                        error={Boolean(
                                                            touched.videos && errors.videos
                                                        )}
                                                    />
                                                    <Button
                                                        margin="normal"
                                                        type="button"
                                                        color="primary"
                                                        variant="outlined"
                                                        onClick={() => remove(index)}
                                                    >
                                                    x
                                                    </Button>
                                                    
                                                </div>
                                            );
                                        })}
                                        <div>
                                        <Button
                                            type="button"
                                            variant="outlined"
                                            onClick={() =>
                                            push({ name: "", url: "", duration:"" })
                                            }
                                        >
                                        Add
                                        </Button>
                                        </div>
                                    </div>
                                )}
                            </FieldArray>
                            <Button
                                sx={{
                                marginTop: 5,
                                marginBottom: 10,
                                width: "17rem",
                                height: "3rem",
                                }}
                                type="submit"
                                variant="contained"
                            >
                            Enviar Curso
                            </Button>
      
                        </Box>
                    </Paper>
                </Container>
                
            )};
                                   
            </Formik>
        </div>
    )
}

export default CreateCourse;