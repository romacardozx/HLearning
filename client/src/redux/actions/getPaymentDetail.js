import axios from "axios";


export function getPaymentDetail(id){
    
    return async function(dispatch){
        try {
            var json = await axios.get(`/mercadopago/pagos/${id}`);
            return dispatch({
                type: "GET_PAYMENT_DETAIL",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
  };