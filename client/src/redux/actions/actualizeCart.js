import axios from "axios";

export function actualizeCart(cart, course, id) {
  return async function (dispatch) {
    try {
        
        const json = await axios(`/cart?id=${id ? id : ""}`);
        const idCart = json.data._id;
        const cartFiltered = cart.filter((c) => c._id !== course);

      let cartMap = cartFiltered.map((item) => {
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
      
      return dispatch({
        type: "DELETE_CART",
        payload: cartFinal,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
