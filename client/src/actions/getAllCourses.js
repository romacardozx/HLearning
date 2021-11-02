const axios = require("axios");
// import {} from ('../../constants-env');

require("dotenv").config();
const { REACT_APP_BASE_URL } = process.env;
export function getAllCourses() {
  console.log()
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
