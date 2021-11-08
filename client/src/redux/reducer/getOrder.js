import {  

    GET_ORDER,

} from "../actions/constants.js";
  
const initialState = {

    getOrderId: {},

};

const getOrder = (state = initialState, action) => {
    
    switch(action.type){
        
        case GET_ORDER: {
            return {
              ...state, 
              getOrderId: action.payload
            }
        }

        default: return state;
    }
}

export default getOrder;