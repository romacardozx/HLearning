import axios from "axios";

export function clearFilters() {

  return  function (dispatch) {
    try { 
     
      dispatch({
        type: "CLEAR_DATA",
        payload: {data:undefined, name:'Filter By'},
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}