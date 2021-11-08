import {  

    GET_USER

} from "../actions/constants.js";
  
const initialState = {

    getUserId: {},

};

const getUser = (state = initialState, action) => {
    
    switch(action.type){
        
        case GET_USER: {
            return {
              ...state, 
              getUserId: action.payload
            }
        }

        default: return state;
    }
}

export default getUser;