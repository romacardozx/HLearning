import { React } from "react";
import {  Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import swal from 'sweetalert';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Footer from '../Footer/Footer';

const schemaValidate = Yup.object().shape({
  name: Yup.string()
    .required("Debe agregar un nombre"),
});


function CreateCategory() { 

  return(

    <div>
      <Formik
        initialValues={{
          name: ""
        }}
        validationSchema={schemaValidate}
        onSubmit={ async (values, {resetForm}) => {
          try {

            const response = await axios.post('/categories/createCategory', values)
            console.log(response);            
            swal("Categoria Creada!", "Presione para continuar", "success");
            resetForm();

          } catch (error) {

            swal ( "Algo salio mal!" ,  "Por favor vuelva a intentar" ,  "error" );
            console.log(error)
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
                label="Categoria"
                type="text"
                name="name"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.title && errors.title)}
                helperText={touched.title && errors.title}
              />
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
                Cargar Categoria
              </Button>
            </Box>
        )}
      </Formik>
      <br/><br/><br/><br/>
        <Footer/>
    </div>
  )
}

export default CreateCategory;
