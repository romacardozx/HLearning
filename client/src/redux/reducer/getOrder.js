import {  

    GET_ORDER,
    CREATE_ORDER

} from "../actions/constants.js";
  
const initialState = {

    getOrderId: {},
    orderCreated:undefined,

};

const getOrder = (state = initialState, action) => {
    
    switch(action.type){
        
        case GET_ORDER: {
            return {
              ...state, 
              getOrderId: action.payload
            }
        }

        case CREATE_ORDER: {
            return {
              ...state, 
              orderCreated: action.payload
            }
        }

       

        default: return state;
    }
}

export default getOrder;