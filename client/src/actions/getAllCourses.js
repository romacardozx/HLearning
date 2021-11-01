const axios = require("axios");

require("dotenv").config();
const { BASE_URL } = process.env;

export function getAllCourses() {
  return async function (dispatch) {
    try {
      var json = await axios(`http://localhost:8000/courses`);
      return dispatch({
        type: "GET_ALL_COURSES",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
