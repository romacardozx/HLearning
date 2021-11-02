import axios from "axios";

function filterByCategories(categories) {
  return async function (dispatch) {
    try {
      var json = await axios(
        `/courses/?categories=${categories ? categories : ""}`
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
