import { GET_PAYMENT_DETAIL } from "../actions/constants";

const initialState = {
    paymentDet: {}
}

const paymentDetail = (state = initialState, action) =>{
    
    switch(action.type){

     case GET_PAYMENT_DETAIL: {
         return{
             ...state
         }
     }
     default: return state;
    }
}

export default paymentDetail;