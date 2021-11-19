import axios from "axios";


export function getReviewsById(id){
    
    return async function(dispatch){
        try {
            var json = await axios(`/mycourses/${id}`);
            return dispatch({
                type: "GET_REVIEWS_BY_ID",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
  };