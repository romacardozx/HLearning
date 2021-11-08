import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import CreateCourse from './CreateCourse';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



export default function PruebaAdm(){
    return (
        <div>
        <Navbar/><br/><br/><br/><br/>
        <span align='center'>
        <Link to='/admcourses'>
        <Button variant="contained" size="medium">
        Administrar cursos              
        </Button>
        </Link>
        </span>
        <CreateCourse/>
        {/* <DeleteCourse/> */}
        <Footer/>
        </div>
    )
}