import axios from "axios";

export function getCoursesScore(scoreToFilter) {
  return async function (dispatch) {
    try {
      let json = await axios.post(`/courses?scoreToFilter=${scoreToFilter}`);
      return dispatch({
        type: "GET_COURSES_SCORE",
        payload: json.data,
      });
    } catch (error) {
      console.log("error order price", error);
    }
  };
}
