import axios from "axios"

export default function MercadoPago(id){

    return async function (dispatch){
        try{
            const response = await axios.post(`/mercadopago/${id}`)
            window.location.replace(response.data)
            return dispatch({type: "MERCADOPAGO", payload : response.data});
        }
        catch(err){
            console.log(err);
        }
    }
}
