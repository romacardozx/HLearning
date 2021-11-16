import axios from "axios";

export function orderByPrice(price, filterdata) {
  return async function (dispatch) {
    try {
      if(!filterdata){
         let json = await axios(
        `/courses?price=${price ? price : ""}`
       
      );
      return dispatch({
        type: "ORDER_BY_PRICE",
        payload: json.data,
      });
      }else{
        return dispatch({
          type: "ORDER_BY_PRICE_FILTER",
          payload: { data: filterdata, price: price },
        });
      }
     
    } catch (error) {
      console.log("error order price", error);
    }
  };
}
