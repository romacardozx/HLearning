import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "../../redux/actions/deleteCourse"
import { getAllCourses } from "../../redux/actions/getAllCourses"


function DeleteCourse(){
    
    const dispatch = useDispatch();

    const allCourses = useSelector((state) => state.getCourses.getAllCourses);

    function handleDelete(id){
       dispatch(deleteCourse(id))
    }

    useEffect(() =>{
        dispatch(getAllCourses())
    })

    console.log(allCourses)

    return (
        <div>
            <select>
            {
                allCourses.map((c) => (

                    <option key={c}>
                        {c.name}
                    </option>
                    
                ))
            }
            </select>
            <div>
            {allCourses.map((e, i) => (

                <div key={i}>

                    <p>{e}</p>
                    <button onClick={() => handleDelete(e)}>X</button>
                    
                </div>

            ))}
            </div>
        </div>
    )
}


export default DeleteCourse;