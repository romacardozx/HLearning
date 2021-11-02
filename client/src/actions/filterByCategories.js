import axios from "axios";


function filterByCategories(category) {
  return async function (dispatch) {
    try {
      var json = await axios(`/?category=${category ? category : ""}`);
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
