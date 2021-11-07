import axios from "axios";


export function getOrderById(id){
    
    return async function(dispatch){
        try {
            var json = await axios(`/order/${id}`);
            return dispatch({
                type: "GET_ORDER",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
  };

