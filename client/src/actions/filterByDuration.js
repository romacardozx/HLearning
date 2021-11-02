import axios from "axios";

<<<<<<< HEAD

function filterByDuration(category){

    return async function(dispatch){
        try {
            var json = await axios(`/courses?category=${category?category:""}`);
            return dispatch({
                type: "FILTER_BY_DURATION",
                payload: json.data
            })
            
        } catch (error) {
            console.log("error", error)
        }
=======
function filterByDuration(category) {
  return async function (dispatch) {
    try {
      var json = await axios(`/courses?category=${category ? category : ""}`);
      return dispatch({
        type: "FILTER_BY_DURATION",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
>>>>>>> f95eea6c6840bed92d915bbba67b27ba214f70db
    }
  };
}

export default filterByDuration;
