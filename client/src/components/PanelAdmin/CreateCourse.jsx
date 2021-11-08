import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/getAllCategories";
import { FieldArray, Formik } from "formik";
import swal from 'sweetalert';

import axios from "axios";
import * as Yup from "yup";
// import Input from "@mui/material/Input"
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
// import Select from '@material-ui/core/Select';

const schemaValidate = Yup.object().shape({
    title: Yup.string()
      .min(8, "El titulo debe tener al menos 8 caracteres")
      .max(25, "El maximo es de 25 caracteres")
      .required("Debe agregar un titulo"),
    description: Yup.string()
      // .min(25, "La descripcion debe ser de al menos 25 caracteres")
      .required("Debe agregar una descripcion"),
    duration: Yup.string()
      .min(1, "Required must be at duration (1hs.)")
      .required("Debe indicar la duracion aproximada"),
    price: Yup.number().positive()
      .min(1000,"El precio debe ser mayor a $1000")
      .required("Requiere un precio"),
        img: Yup.string()
      .required("Requiere una imagen"),
    categories: Yup.string()
      .min(1, "Se necesita al menos una categoria")
      .required("Eliga una categoria"),
    // videos: Yup.array()
    //   .required("Se necesita al menos un video")
});

const initValues = {
  title: "",
  description: "",
  duration: "",
  price: "",
  img: "",
  categories: "",
  videos: [
    {
      name: "",
      url: "",
      duration: "",
    },
  ],
};

const categories = (allcategories) => {
  const datos = allcategories.map((c) => {
    const data = { label: c.name, value: c._id };
    return data;
  });
  return datos;
};

function CreateCourse() {
  const dispatch = useDispatch();
  const getAllCategory = useSelector(
    (state) => state.getCategories.getAllCategories
  );
  //Cargo las categorias de GetAllCategories acomodadas en currencies
  let currencies = categories(getAllCategory);

  //   console.log(currencies, "currencies");

  const [currency, setCurrency] = useState("");

  //   const handleSelect = (event) => {
  //       event.target.value.toString()
  //     setCurrency(event.target.value);
  //   };
  // console.log(handle,"CATEGORIA QUE TOMA EL HANDLE")
  // console.log(currency, "categorias");

  //   const handleSubmit = (values) => {
  //     values.category = currency;
  //   };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <Formik
        initialValues={initValues}
        validationSchema={schemaValidate}
        onSubmit={ async (values, {resetForm}) => {
            console.log(values)
            try {
                const response = await axios.post('/courses/createCourse', values)   
                console.log(response);
                swal("Curso Creado!", "Presione para continuar", "success");
                resetForm();
            } catch (error) {
                console.log(error)
            }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Container sx={{ marginBottom: 10 }} maxWidth="lg">
            <Paper elevation={1}>
              {/* <Form >   */}
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
                    // required
                    label="Titulo del Curso"
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                  />
                </div>
                <div>
                  <TextField
                    // required
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
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  />
                </div>
                <div>
                  <TextField
                    // required
                    label="Precio"
                    placeholder="Precio"
                    type="number"
                    name="price"
                    onChange={handleChange("price")}
                    value={values.price}
                    onBlur={handleBlur}
                    helperText={errors.price}
                    error={Boolean(touched.price && errors.price)}
                  />
                </div>
                <div>
                  <TextField
                    // required
                    label="Duracion aproximada"
                    type="text"
                    name="duration"
                    onChange={handleChange}
                    value={values.duration}
                    onBlur={handleBlur}
                    helperText={errors.duration}
                    error={Boolean(touched.duration && errors.duration)}
                  />
                </div>
                <div>
                  <TextField
                    select
                    name="categories"
                    label="Categories"
                    value={currency}
                    onChange={handleChange}
                    helperText={errors.categories}
                    error={Boolean(
                        touched.categories && errors.categories
                    )}
                  >
                    {currencies?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    type="text"
                    name="img"
                    placeholder="Inserte URL de la imagen"
                    onChange={handleChange("img")}
                    value={values.img}
                    onBlur={handleBlur}
                    helperText={errors.img}
                    error={Boolean(touched.img && errors.img)}
                  ></TextField>
                  {/* <Button type="submit">Subir</Button> */}

                  {/* <TextField accept="image/*" id="icon-button-file" type="file">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                    </TextField> */}
                </div>
                <FieldArray name="videos">
                  {({ push, remove }) => (
                    <div>
                      {values.videos.map((p, index) => {
                        return (
                          <div key={p}>
                            <div>
                              <TextField
                                type="text"
                                name={`videos.${index}.name`}
                                value={p.name}
                                placeholder="Inserte el nombre del video"
                                // required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.videos}
                                error={Boolean(touched.videos && errors.videos)}
                              />
                            </div>
                            <div>
                              <TextField
                                type="text"
                                name={`videos.${index}.url`}
                                placeholder="Inserte el URL del video"
                                value={p.url}
                                // required
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <TextField
                                type="text"
                                name={`videos.${index}.duration`}
                                placeholder="duracion aproximada del video"
                                value={p.duration}
                                // required
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                            </div>
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
                            push({ name: "", url: "", duration: "" })
                          }
                        >
                          Agregar video
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
              {/* </Form> */}
            </Paper>
          </Container>
        )}
      </Formik>
    </div>
  );
}

export default CreateCourse;
