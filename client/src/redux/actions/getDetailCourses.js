import axios from "axios";


export function getDetailCourses(id){
    
    return async function(dispatch){
        try {
            var json = await axios.post(`/courses/${id}`);
            return dispatch({
                type: "GET_DETAIL_COURSES",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
  };

