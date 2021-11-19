import axios from "axios";


export function getDetailCoursesYouBought(id){
    
    return async function(dispatch){
        try {
            var json = await axios(`/courses/boughtCourse/${id}`);
            return dispatch({
                type: "GET_DETAIL_COURSES_YOU_BOUGHT",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
  };