import axios from "axios";

export function getCourseByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios(`/courses/search?name=${name ? name : ""}`);
      return dispatch({
        type: "GET_COURSE_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
