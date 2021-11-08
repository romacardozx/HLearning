import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createCategory } from "../../redux/actions/createCategory";
import { useDispatch } from 'react-redux';
import style from './cat.module.css';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";


// function validateInput(input) {
//     let errors = {};
//     if(input.name !== 'string'){
//         errors.name = '⚠El nombre debe ser alfabetico⚠';
//     } 
//     return errors;
// }

export default function PruebaCat(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: ""
    })


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        // setErrors(validateInput({
        //     ...input,
        //     [e.target.name]: e.target.value
        // }))
    }





    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(createCategory(input))
        alert('La categoria ha sido creada')
        setInput({
            name: ""
        })
        history.push('/home')
    }



    // useEffect(() => {
    //     dispatch(getTypes());
    // }, [dispatch]);


    return(
        <Box p={1}>
        <div className={style.create}>
           <Link to='/home'><button>⬅Homepage</button></Link>
           <Card sx={{ maxWidth: 600, minWidth: 100 }} elevation={6} alignItems='center'>
           <h1>CREAR CATEGORIA</h1>
           <div>
           <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form">
              <label>Name:  </label> 
              <input
              type= 'text'
              value= {input.name}
              name= 'name'
              onChange={(e) => handleChange(e)}
              />
              {errors.name && (
                  <p>{errors.name}</p>
              )}
              </div><br/>
              <Button variant="contained" size="medium" type='submit'>
              ✓Crear
              </Button>
           </form>
           
            <div>
            </div>
            </div></Card>
        </div>
        </Box>
    )



}