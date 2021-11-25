import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/getAllCategories";
import { FieldArray, Formik } from "formik";
import swal from "sweetalert";
import axios from "axios";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem, Select, OutlinedInput, InputLabel } from "@mui/material";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// const videoSchema = yup.object({
//   name: yup.string().required(),
//   url: yup.string().required(),
//   duration: yup.number().required()
// })

const schemaValidate = yup.object().shape({
  title: yup
    .string()
    .min(8, "El titulo debe tener al menos 8 caracteres")
    .max(25, "El maximo es de 25 caracteres")
    .required("Debe agregar un titulo"),
  description: yup
    .string()
    .min(25, "La descripcion debe ser de al menos 25 caracteres")
    .required("Debe agregar una descripcion"),
  duration: yup
    .string()
    .min(1, "Required must be at duration (1hs.)")
    .required("Debe indicar la duracion aproximada"),
  price: yup
    .number()
    .positive()
    .min(1000, "El precio debe ser mayor a $1000")
    .required("Requiere un precio"),
  // img: yup.string().required("Requiere una imagen"),
  categories: yup.array().required("Eliga una categoria"),
  //  videos: yup.array().of()
});

const initValues = {
  title: "",
  description: "",
  duration: "",
  price: "",
  img: "",
  categories: [],
  videos: [
    {
      name: "",
      link: "",
      duration: "",
    },
  ],
};

const categories = (allcategories) => {
  const datos = allcategories.map((c) => {
    const data = { label: c.name, value: c._id };
    console.log(data, "Datos de DB categorias");
    return data;
  });
  return datos;
};

function CreateCourse() {

  const { REACT_APP_CLOUD_NAME } = process.env;
  const { REACT_APP_UPLOAD_PRESET } = process.env;
  const cloud_name = REACT_APP_CLOUD_NAME;
	const upload_preset = REACT_APP_UPLOAD_PRESET;

	const [imageUrl, setImageUrl] = useState(
		'https://i.ytimg.com/vi/7TKY-jksHRQ/maxresdefault.jpg'
	);

	const handleClick = (e) => {
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
				setImageUrl(res.secure_url); //url de la imagen
				//console.log(res.secure_url);
			})
			.catch((err) => console.log(err));
	};

  const dispatch = useDispatch();
  const getAllCategory = useSelector(
    (state) => state.getCategories.getAllCategories
  );

  let currencies = categories(getAllCategory);

  const [categoryName, setCategoryName] = useState([]);
  console.log(categoryName, "cat");

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <Navbar/>
      <Formik
        initialValues={initValues}
        validationSchema={schemaValidate}
        onSubmit={async (values, { resetForm }) => {
          values.categories = categoryName; 
          values.img = imageUrl;

          console.log(values, 'estos son los values')

          try {
            const response = await axios.post("/courses/createCourse", values);
            console.log(response);
            swal("Curso Creado!", "Presione para continuar", "success");
            resetForm();
          } catch (error) {
            swal("Algo salio mal!", "Por favor vuelva a intentar", "error");
            console.log(error);
            resetForm();
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
          <Container sx={{ marginBottom: 15 }} maxWidth="lg">
            <Paper elevation={3}>
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
                  rowGap: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 5,
                  marginTop: 5,
                  paddingBottom: 5,
                  paddingTop: 5,
                  "& .MuiTextField-root": { m: 2, width: "40rem" },
                  "& .MuiFormControl-root": { m: 2, width: "40rem" },
                  "& .MuiSelect-root": { m: 2, width: "40rem" },
                }}
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Titulo del Curso"
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.title && errors.title)}
                  helperText={touched.title && errors.title}
                />
                <TextField
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
                <TextField
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
                <TextField
                  label="Duracion aproximada"
                  type="text"
                  name="duration"
                  onChange={handleChange}
                  value={values.duration}
                  onBlur={handleBlur}
                  helperText={errors.duration}
                  error={Boolean(touched.duration && errors.duration)}
                />
                <Box>
                <div className="app">
			          <input type="file" className="app_uploadInput" />
			          <img src={imageUrl} width="600px" height="400px" className="app_uploadedImg" alt="" />
	          		<button 
                className="app_uploadButton" 
                onClick={(e)=>handleClick(e)}>
			         	Cargar imagen
		          	</button>
	            	</div>
                </Box>
                {/* <TextField
                  type="text"
                  name="img"
                  placeholder="Inserte URL de la imagen"
                  onChange={handleChange("img")}
                  value={values.img}
                  onBlur={handleBlur}
                  helperText={errors.img}
                  error={Boolean(touched.img && errors.img)}
                /> */}
                <InputLabel>Categoria</InputLabel>
                <Select
                  // labelId="multiple-categories-label"
                  // id="multiple-label"
                  multiple
                  name="categories"
                  label="Categories"
                  value={categoryName}
                  onChange={handleSelect}
                  onBlur={handleBlur}
                  // helperText={errors.categories}
                  error={Boolean(touched.categories && errors.categories)}
                  input={<OutlinedInput label="Categories" />}
                >
                  {currencies.map((category, index) => (
                    <MenuItem key={index} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </Select>
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
        )}
      </Formik>
      <br/><br/><br/><br/>
        <Footer/>
    </div>
  );
}

export default CreateCourse;