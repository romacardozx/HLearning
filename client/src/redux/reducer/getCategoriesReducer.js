import {  
  
    GET_ALL_CATEGORIES 

} from "../actions/constants.js";
  
const initialState = {

    getAllCategories: [],

};

const getCategoriesReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_ALL_CATEGORIES: {
            return {
              ...state,
              getAllCategories: action.payload,
            };
        }

        default: return state;
    }
    
}

export default getCategoriesReducer;