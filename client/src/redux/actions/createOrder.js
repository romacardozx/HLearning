import axios from "axios";


function createOrder(order){
    

  return async function(dispatch){
      try {
        var { data } = await axios.post(`/orders/createOrder`,order);
        return dispatch({
          type: "CREATE_ORDER",
          payload: data
        })
          
      } catch (error) {
        console.log("error", error)
      }
  }
}

export default createOrder;
