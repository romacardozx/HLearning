const axios = require("axios");
require("dotenv").config();
const { REACT_APP_BASE_URL } = process.env;

export function getAllCategories() {
  return async function (dispatch) {
    try {
      var json = await axios(`http://${REACT_APP_BASE_URL}/categories`);
      return dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
}