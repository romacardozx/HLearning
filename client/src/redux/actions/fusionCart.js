import axios from "axios";
import { loadState } from "../../localStorage";

export function fusionCart(id) {
  return async function (dispatch) {
    try {

      let cartStorage = loadState();

      const json = await axios(`/cart?id=${id ? id : ""}`);
      const idCart = json.data._id;
      const cartFusioned = cartStorage.concat(json.data.courses);

      let cartMap = cartFusioned.map((item) => {
        return [item._id, item];
      });
      let cartMapArray = new Map(cartMap);
      let cartFinal = [...cartMapArray.values()];

      const courses = cartFinal.map((c) => {
        return c._id;
      });

      const prices = cartFinal.map((c) => c.price);

      const sumPrices = prices.reduce((a, b) => a + b, 0);

      const obj = {
        user: id,
        courses: courses,
        price: sumPrices,
      };

      await axios.put("cart/" + idCart, obj);
      var myItem = localStorage.getItem('user');
      localStorage.clear();
      localStorage.setItem('user',myItem);
       

      return dispatch({
        type: "GET_CART",
        payload: cartFinal,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
