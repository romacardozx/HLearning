import axios from "axios";

require("dotenv").config();
const { REACT_APP_BASE_URL } = process.env;

function filterByCategories(categories) {
  return async function (dispatch) {
    try {
      var json = await axios(
        `http://${REACT_APP_BASE_URL}/courses?categories=${categories ? categories : ""}`
      );
      return dispatch({
        type: "FILTER_BY_CATEGORIES",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}

export default filterByCategories;
