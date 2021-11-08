// import React, { useEffect, useState }  from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Grid } from '@mui/material';
//import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategories } from '../../redux/actions/getAllCategories.js'


/* function BasicButtons() { 
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
 */

export default function CreateCategory() {
  // const dispatch = useDispatch();

  // const getAllCategory = useSelector(state => state.getCategories.getAllCategories);

  //   const [formSent, setFormSent] = useState(false)
  //   console.log(formSent);

  //   useEffect(() => {
  //       dispatch(getAllCategories());
  //     },[dispatch]);


  return (
    <Paper
    sx={{
      p: 2,
      margin: "auto",
      maxWidth: 400,
      elevation: 24,
      flexGrow: 50,
    }}
  >
      <Grid container spacing={1}>     
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <Typography gutterBottom variant="h4" component="div">
             Crear Categoría
         </Typography> <br/>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Requerido"
          placeholder="Nombre de la categoria"
        />
        </div>
    {/* <div>
    <Button variant="contained" size="small">Agregar categoría</Button>
    <button type="submit">Enviar Curso</button>
                        {setFormSent && <p> Curso enviado con exito!</p>}
    </div> */}
    </Box>
    </Grid>
    </Paper>
  );
}
