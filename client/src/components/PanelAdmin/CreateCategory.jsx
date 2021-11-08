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
import Button from "@mui/material/Button";




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

    //   function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(input)
    //     dispatch(createCategory(input))
    //     alert('La categoria ha sido creada')
    //     setInput({
    //         name: ""
    //     })
    // }

  return (
    <Paper
    sx={{
      p: 3,
      margin: "auto",
      maxWidth: 400,
      elevation: 0,
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
                  Crear Categoria
                </Button>
    </Box>
    </Grid>
    </Paper>  
  );
}

