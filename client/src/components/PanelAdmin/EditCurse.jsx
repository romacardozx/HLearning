import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/getAllCourses"


function EditCurse(){

    const dispatch = useDispatch();
    const courses = useSelector((state => state.getCourses.getAllCourses))
    console.log(courses)
    
    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);


    return (
        <div>

        </div>
    )
}


export default EditCurse;