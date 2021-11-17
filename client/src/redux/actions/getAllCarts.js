import axios from "axios";

export function getAllCarts(id) {
  return async function (dispatch) {
    try {
      const res = await axios(`/cart?id=${id}`);
   
      
      return dispatch({
        type: "GET_ALL_CART",
        payload: res.data.courses,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
