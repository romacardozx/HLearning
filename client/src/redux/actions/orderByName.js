import axios from "axios";

export function orderByName(name, filterdata) {
  return async function (dispatch) {
    try {
      let json = await axios(`/courses?name=${name ? name : ""}`, filterdata);

      return dispatch({
        type: "ORDER_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log("error order by name", error);
    }
  };
}
