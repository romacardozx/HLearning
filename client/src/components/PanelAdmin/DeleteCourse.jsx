// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCourse } from "../../redux/actions/deleteCourse"
// import { getAllCourses } from "../../redux/actions/getAllCourses"


// function DeleteCourse(){
    
//     const dispatch = useDispatch();

//     const allCourses = useSelector((state) => state.getCourses.getAllCourses);

//     function handleDelete(id){
//        dispatch(deleteCourse(id))
//     }

//     useEffect(() =>{
//         dispatch(getAllCourses())
//     })

//     console.log(allCourses)

//     return (
//         <div>
//             <select>
//             {
//                 allCourses.map((c) => (

//                     <option key={c}>
//                         {c.name}
//                     </option>
                    
//                 ))
//             }
//             </select>
//             <div>
//             {allCourses.map((e, i) => (

//                 <div key={i}>

//                     <p>{e}</p>
//                     <button onClick={() => handleDelete(e)}>X</button>
                    
//                 </div>

//             ))}
//             </div>
//         </div>
//     )
// }


// export default DeleteCourse;

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/getAllCourses";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "./CardDelete";
import Paginate from "../Paginate/Paginate";
import Button from '@mui/material/Button';

import { Grid, Typography } from "@material-ui/core";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { deleteCourse } from "../../redux/actions/deleteCourse"

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.getCourses.getAllCourses);

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage /* setCoursesPerPage */] = useState(8);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses =
    allCourses.length >= 0
      ? allCourses.slice(indexOfFirstCourse, indexOfLastCourse)
      : allCourses;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);


  function handleDelete(id){
           dispatch(deleteCourse(id))
        }  

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(4.5),
  }));

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      <div>
        <Grid container direction="column" alignItems="center">
          <br />
          <div>
          <Typography variant="h4"  align='center'>CURSOS ACTUALES</Typography><br/>
            <Grid container>
              {currentCourses.length >= 0 ? (
                <>
                  {currentCourses?.map((c, i) => (
                    <div key={i}>
                      <Grid>
                        <Item sx={{ minWidth: 300 }}>
                          <Card
                            id={c._id}
                            title={c.title}
                            image={c.img}
                            description={c.description}
                            score={c.score}
                          />
                          <Typography>
                          <Button variant="contained" size="medium" onClick={() => handleDelete(c._id)}>
                           Eliminar curso
                          </Button>
                          </Typography>
                        </Item>
                      </Grid>
                    </div>
                  ))}
                </>
              ) : <p>Loading...</p>}
            </Grid>
            <Paginate
              coursesPerPage={coursesPerPage}
              allCourses={allCourses.length}
              paginate={paginate}
            />
          </div>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}