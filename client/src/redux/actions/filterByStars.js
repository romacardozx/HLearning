import axios from "axios";


export function filterByStars(stars){

  return async function(dispatch){
      try {
        var json = await axios(`/courses?scoreToFilter=${stars?stars:""}`);
        return dispatch({
          type: "FILTER_BY_STARS",
          payload: json.data
        })
          
      } catch (error) {
        console.log("error", error)
      }
  }
}


