import axios from "axios";

export function orderByScore(score, filterdata) {
  console.log(filterdata, 'no me digas undefined');
  const {name2} = filterdata
  const {allCourses} = filterdata
  let filtercourses = []
  name2 === 'Filter By' ? filtercourses = allCourses :  filtercourses = filterdata

  return async function (dispatch) {
    try {
      let json = await axios.post(
        `/courses/filters?score=${score ? score : ""}`,
        filtercourses
      );
      return dispatch({
        type: "ORDER_BY_SCORE",
        payload: json.data,
      });
    } catch (error) {
      console.log("error order score", error);
    }
  };
}
