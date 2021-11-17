import {  

    GET_REVIEWS_BY_ID,

} from "../actions/constants.js";
  
const initialState = {

    getReviewsById: {},

};

const getReviews = (state = initialState, action) => {
    
    switch(action.type){
        
        case GET_REVIEWS_BY_ID: {
            return {
              ...state, 
              getReviewsById: action.payload
            }
        }

        default: return state;
    }
}

export default getReviews;