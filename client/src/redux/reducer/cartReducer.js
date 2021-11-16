import {  
  
    GET_CART,
    UPDATE_CART, 

} from "../actions/constants.js";
import {loadState} from '../../localStorage'
  

const initialState = {

   allCart: loadState(),
   allCartBackEnd: [],
   totalPrice: 0

};

const cartReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_CART: {

            // comprar allcart con get all ---> nuevo arr para mandarle a update
          console.log('reducer y cl', action.payload);
          
            return {
              ...state,
              allCartBackEnd: action.payload,
              
            };
        }
        case UPDATE_CART: {
            return {
              ...state,
              allCart: action.payload,
            };
        }
        default: return state;
    }
  }

export default cartReducer;
