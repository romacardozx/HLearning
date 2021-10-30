import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, deleteCurse } from "../../actions"


function DeleteCurse(){
    
    const dispatch = useDispatch();

    const course = useSelector(state => state.getAllCourses)

    function handleDelete(id){
       dispatch(deleteCurse(id))
    }

    useEffect(() =>{
        getAllCourses()
    })

    return (
        <div>
            <select>
            {
                course.map((c) => (

                    <option key={c}>
                        {c.name}
                    </option>
                    
                ))
            }
            </select>
            <div>
            {course.map((e, i) => (

                <div key={i}>

                    <p>{e}</p>
                    <button onClick={() => handleDelete(e)}>X</button>
                    
                </div>

            ))}
            </div>
        </div>
    )
}


export default DeleteCurse;