import { MERCADOPAGO } from "../actions/constants";

const initialState = []

const MercadoPago = (state = initialState, action) =>{
    
    switch(action.type){

     case MERCADOPAGO: {
         return{
             ...state
         }
     }
     default: return state;
    }
}

export default MercadoPago;
