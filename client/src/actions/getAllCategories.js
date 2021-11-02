const axios = require("axios");

export function getAllCategories() {
  return async function (dispatch) {
    try {
      var json = await axios(`/categories`);
      return dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
