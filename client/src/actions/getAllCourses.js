import axios from 'axios';

export function getAllCourses() {
  return async function (dispatch) {
    try {
      var json = await axios(`/courses`);

      return dispatch({
        type: "GET_ALL_COURSES",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}