import axios from "axios";

export function orderByScore(score, filterdata) {
  return async function (dispatch) {
    try {
      if(!filterdata){
        let json = await axios(
        `/courses?score=${score ? score : ""}`
      );
      return dispatch({
        type: "ORDER_BY_SCORE",
        payload: json.data,
      });
      }else{
        return dispatch({
          type: "ORDER_BY_SCORE_FILTER",
          payload: { data:filterdata, score: score },
        });
      }
      
    } catch (error) {
      console.log("error order score", error);
    }
  };
}
