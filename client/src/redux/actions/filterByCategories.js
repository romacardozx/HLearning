import axios from "axios";

export function filterByCategories(categories) {
  return async function (dispatch) {
    try {
      var json = await axios(
        `/courses/?categories=${categories ? categories : ""}`
      );
      return dispatch({
        type: "FILTER_BY_CATEGORIES",
        payload: { filterData: json.data, name: categories },
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
