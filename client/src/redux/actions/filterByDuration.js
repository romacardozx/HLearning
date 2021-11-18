import axios from "axios";


function filterByDuration(category){

  return async function(dispatch){
      try {
        var json = await axios(`/courses?category=${category?category:""}`);
        return dispatch({
          type: "FILTER_BY_DURATION",
          payload: {data:json.data, name:category}
        })
          
      } catch (error) {
        console.log("error", error)
      }
  }
}

export default filterByDuration;
