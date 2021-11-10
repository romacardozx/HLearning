import axios from "axios";

export function orderByPrice(price, filterdata) {
  return async function (dispatch) {
    try {
      let json = await axios(
        `/courses?price=${price ? price : ""}`,
        filterdata
      );
      return dispatch({
        type: "ORDER_BY_PRICE",
        payload: json.data,
      });
    } catch (error) {
      console.log("error order price", error);
    }
  };
}
