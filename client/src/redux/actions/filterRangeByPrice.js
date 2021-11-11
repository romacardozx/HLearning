import axios from "axios";

export function filterRangeByPrice(priceToFilter) {

  return async function (dispatch) {
    try {
      let json = await axios.post(
        `/courses/filters?priceToFilter=${priceToFilter ? priceToFilter : ""}`
      );
      return dispatch({
        type: "FILTER_BY_RANGE_PRICE",
        payload: { filterData: json.data, name: priceToFilter },
      });
    } catch (error) {
      console.log("error order price", error);
    }
  };
}
