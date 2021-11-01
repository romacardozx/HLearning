const axios = require("axios");

require("dotenv").config();
const { REACT_APP_BASE_URL } = process.env;
export function getAllCourses() {
  return async function (dispatch) {
    try {
      var json = await axios(`http://${REACT_APP_BASE_URL}/courses`);
      
      return dispatch({
        type: "GET_ALL_COURSES",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}