import axios from "axios";

export function getAllCart(id) {
  return async function (dispatch) {
    try {      
      var json = await axios(`/cart?id=${id ? id : ""}`);
      return dispatch({
        type: "GET_CART",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
