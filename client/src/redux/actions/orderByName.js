import axios from "axios";

export function orderByName(name, filterdata) {
  console.log(filterdata, "data que llega!!!");
  return async function (dispatch) {
    try {
      if (!filterdata) {
        let json = await axios(`/courses?name=${name ? name : ""}`);
        return dispatch({
          type: "ORDER_BY_NAME",
          payload: json.data,
        });
      } else {
        return dispatch({
          type: "ORDER_BY_NAME_FILTER",
          payload: { data:filterdata, name: name },
        });
      }
    } catch (error) {
      console.log("error order by name", error);
    }
  };
}
