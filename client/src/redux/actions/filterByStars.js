import axios from "axios";


export function filterByStars(stars, filtered){

  return async function(dispatch){
      try {
        var json = await axios.post(`/courses?scoreToFilter=${stars?stars:""}`, filtered);
        return dispatch({
          type: "FILTER_BY_STARS",
          payload: json.data
        })
          
      } catch (error) {
        console.log("error", error)
      }
  }
}


