import axios from "axios";

export function orderByPrice(price, filterdata) {
  console.log(filterdata, 'no me digas undefined');
  const {name2} = filterdata
  const {allCourses} = filterdata
  let filtercourses = []
  name2 === 'Filter By' ? filtercourses = allCourses :  filtercourses = filterdata

  return async function (dispatch) {
    try {
      let json = await axios.post(
        `/courses/filters?price=${price ? price : ""}`,
        filtercourses
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
