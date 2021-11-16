import axios from "axios"

export default function MercadoPago(id){
    console.log("ENTRO A LA FUNCION")
    return async function (dispatch){
        try{
            const response = await axios.post(`/mercadopago/${id}`)
            console.log(response.data)
            window.location.replace(response.data)
            return dispatch({type: "MERCADOPAGO", payload : response.data});
        }
        catch(err){
            console.log(err);
        }
    }
}
